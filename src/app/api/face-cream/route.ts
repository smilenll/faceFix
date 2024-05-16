import { OilinessEnum, ThicknessEnum } from "@/app/shared/enums/SkinEnum";
import { ISkinCreamParams } from "@/app/shared/interfaces/ai-api";
import { OpenAIService } from "@/services/AiService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params: ISkinCreamParams = getParams(req);

  const service = OpenAIService.getInstance();
  const [category, description] = await Promise.all([
    service.getSkinCreamType(params),
    service.getSkinCreamDescription(params),
  ]);

  return NextResponse.json({
    category: category,
    description,
  });
}

const getParams = (req: NextRequest) => {
  // TODO Validate prams with zod
  const searchParams = req.nextUrl.searchParams;

  return {
    age: searchParams.get("age") as unknown as number,
    skinColor: searchParams.get("skinColor") as unknown as number,
    oiliness: searchParams.get("oiliness") as unknown as OilinessEnum,
    thickness: searchParams.get("thickness") as unknown as ThicknessEnum,
  };
};
