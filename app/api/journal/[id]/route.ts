import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }: { params: any }) => {
  const { content } = await request.json();

  const user = await getUserByClerkID();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      id: params.id,
      userId: user.id,
    },
    data: {
      content,
    },
  });

  return NextResponse.json({ data: updatedEntry });
};
