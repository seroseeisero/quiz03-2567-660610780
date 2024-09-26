import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Phirapart Yangna",
    studentId: "660610780",
  });
};
  