"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "./ui/button";
import { IoSendOutline } from "react-icons/io5";
import { sendPrompt } from "@/store/inputSlice";

export default function SubmitButton() {
  const dispatch = useAppDispatch();
  const input = useAppSelector((state) => state.gemini.input);
  // const loading = useAppSelector((state) => state.gemini.loading);

  const handleClick = () => {
    console.log("Prompt Sent:", input);
    dispatch(sendPrompt(input));
  };

  return (
    <Button onClick={handleClick} type="submit">
      <IoSendOutline />
    </Button>
  );
}
