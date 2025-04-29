"use client";

import { useEffect, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import SubmitButton from "./SubmitButton";

const Search = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResize();
  }, [text]);

  return (
    <form className="fixed bottom-10 border-1 rounded-md">
      <div className="flex items-center justify-center ">
        <Textarea
          ref={textareaRef}
          placeholder="Enter a search text"
          className="w-[200px] h-auto md:w-[480px] placeholder:text-[10px] bg-transparent resize-none overflow-hidden"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default Search;
