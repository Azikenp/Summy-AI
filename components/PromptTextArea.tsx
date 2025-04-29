"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUserInput } from "@/store/inputSlice";
import { useEffect, useRef } from "react";
import { Textarea } from "./ui/textarea";

export default function PromptTextarea() {
  const dispatch = useAppDispatch();
  const userInput = useAppSelector((state) => state.input.userInput);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [userInput]);

  return (
    <Textarea
      ref={textareaRef}
      placeholder="Enter a search text"
      className="w-[200px] h-auto md:w-[480px] placeholder:text-[10px] bg-transparent resize-none overflow-hidden"
      value={userInput}
      onChange={(e) => dispatch(setUserInput(e.target.value))}
    />
  );
}
