import { getErrorResponse } from "@/app/builders/ResponseBuilder";
import { isFaceCreamTypeEnumGuard } from "@/app/shared/guards/type-guards";
import { OilinessEnum, ThicknessEnum } from "@/app/shared/enums/SkinEnum";
import { ISkinCreamParams } from "@/app/shared/interfaces/ai";
import { OpenAIService } from "@/app/services/OpenAiService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params: ISkinCreamParams = getParams(req);
  const service = OpenAIService.getInstance();
  const category = await service.getSkinCreamType(params);

  if (!isFaceCreamTypeEnumGuard(category)) {
    return getErrorResponse("Category not found! Try again.", 404);
  }

  const description = await service.getSkinCreamDescription(params, category);

  return NextResponse.json({
    category,
    description,
  });
}

const getParams = (req: NextRequest) => {
  // TODO Validate params with zod
  const searchParams = req.nextUrl.searchParams;

  return {
    age: searchParams.get("age") as unknown as number,
    skinColor: searchParams.get("skinColor") as unknown as number,
    oiliness: searchParams.get("oiliness") as unknown as OilinessEnum,
    thickness: searchParams.get("thickness") as unknown as ThicknessEnum,
  };
};
