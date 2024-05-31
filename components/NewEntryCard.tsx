"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

const NewEntryCard = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    console.log("clicked");
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  };
  return (
    <div className="cursor-pointer divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6" onClick={handleOnClick}>
        <span className="text-xl">New entry</span>
      </div>
    </div>
  );
};

export default NewEntryCard;
