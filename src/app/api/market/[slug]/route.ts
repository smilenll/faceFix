import { isFaceCreamTypeEnumGuard } from "@/app/shared/guards/type-guards";
import { OpenAIService } from "@/app/services/OpenAiService";
import { NextRequest, NextResponse } from "next/server";
import { AmazonAuth } from "@/app/auth/amazon";
import AmazonService from "@/app/services/AmazonService";
import { getErrorResponse } from "@/app/builders/ResponseBuilder";

export async function GET(
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  if (!isFaceCreamTypeEnumGuard(slug)) {
    return getErrorResponse("Invalid category", 400);
  }

  try {
    const productsList = await OpenAIService.getInstance().getSkinCreamProducts(
      slug
    );
    const amazonService = await new AmazonService(await AmazonAuth());
    const marketProducts = await Promise.all(
      productsList.map(
        async (p) =>
          (
            await amazonService.getProduct(p.brand, p.productName, p.price)
          ).body
      )
    );

    return NextResponse.json({
      products: marketProducts,
    });
  } catch (error) {
    return getErrorResponse("Products not found", 404);
  }
}
