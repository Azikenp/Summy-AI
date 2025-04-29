"use client";
import { useAppSelector } from "@/store/hooks";
import { Button } from "./ui/button";
import { IoSendOutline } from "react-icons/io5";

export default function SubmitButton() {
  const userInput = useAppSelector((state) => state.input.userInput);

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("✅ Rewritten response:", data.message);
      } else {
        console.error("❌ Error:", data.error);
      }
    } catch (error) {
      console.error("❌ Network Error:", error);
    }
  };

  return (
    <Button onClick={handleSubmit} type="submit">
      <IoSendOutline />
    </Button>
  );
}
