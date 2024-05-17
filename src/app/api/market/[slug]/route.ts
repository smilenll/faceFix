import { isFaceCreamTypeEnumGuard } from "@/app/shared/type-guards/type-guards";
import { OpenAIService } from "@/app/services/OpenAiService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!isFaceCreamTypeEnumGuard(slug)) {
    throw Error("Category not found");
  }

  const productsList = await OpenAIService.getInstance().getSkinCreamProducts(slug);

  return NextResponse.json({
    products: productsList,
  });
}
