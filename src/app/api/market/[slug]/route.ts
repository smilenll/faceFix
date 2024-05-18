import { isFaceCreamTypeEnumGuard } from "@/app/shared/type-guards/type-guards";
import { OpenAIService } from "@/app/services/OpenAiService";
import { NextRequest, NextResponse } from "next/server";
import { AmazonAuth } from "@/app/auth/amazon";
import AmazonService from "@/app/services/AmazonService";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!isFaceCreamTypeEnumGuard(slug)) {
    throw Error("Category not found");
  }

  try {
    const productsList = await OpenAIService.getInstance().getSkinCreamProducts(
      slug
    );
    const amazonService = await new AmazonService(await AmazonAuth());
    const marketProducts = await Promise.all(
      productsList.map(async (p) => (await amazonService.getProduct(p.brand, p.productName, p.price)).body)
    );
  
    return NextResponse.json({
      products: marketProducts,
    });
  } catch (error) {
    console.log("MARKET ERROR",error);
    return NextResponse.json({
      error: "Products not found ",
    });
  }
}
