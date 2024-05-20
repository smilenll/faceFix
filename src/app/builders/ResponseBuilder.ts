import { NextResponse } from "next/server";

export const getErrorResponse = (error: string, status: number) => {
  return NextResponse.json(
    {
      error,
    },
    { status }
  );
};

export const getSuccessResponse = <Body>(body: Body) => {
  return NextResponse.json({
    body,
  });
};
