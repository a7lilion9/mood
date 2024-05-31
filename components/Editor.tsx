"use client";

import { updateEntry } from "@/utils/api";
import React from "react";
import { useAutosave } from "react-autosave";

const Editor = ({ entry }: { entry: any }) => {
  const [value, setValue] = React.useState(entry.content);
  const [isLoading, setIsLoading] = React.useState(false);
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const updated = await updateEntry(entry.id, _value);
      setIsLoading(false);
    },
  });
  return (
    <div className="h-full w-full">
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <textarea
          id="textarea"
          className="h-full w-full outline-none resize-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={(e) => (e.target.selectionStart = e.target.value.length)}
          autoFocus
        />
      )}
    </div>
  );
};

export default Editor;
