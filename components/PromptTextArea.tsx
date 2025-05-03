"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setInput } from "@/store/inputSlice";
import { useEffect, useRef } from "react";
import { Textarea } from "./ui/textarea";

export default function PromptTextarea() {
  const dispatch = useAppDispatch();
  const input = useAppSelector((state) => state.gemini.input);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  return (
    <Textarea
      ref={textareaRef}
      placeholder="Enter a search text"
      className="w-[270px] md:w-[480px] placeholder:text-[10px] bg-transparent resize-none overflow-hidden text-black"
      value={input}
      onChange={(e) => dispatch(setInput(e.target.value))}
    />
  );
}
