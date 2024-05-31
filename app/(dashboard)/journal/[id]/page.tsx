import Editor from "@/components/Editor";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id: string) => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId: user.id,
      id,
    },
  });

  return entry;
};

const EntryPage = async ({ params }: { params: any }) => {
  const entry = await getEntry(params.id);
  return (
    <div className="h-[calc(100vh-70px)] p-4 text-xl w-full">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
