"use client";
import { useAppSelector } from "@/store/hooks";

const ChatView = () => {
  const { history, loading } = useAppSelector((state) => state.gemini);
  console.log(history);

  return (
    <div className="mt-2 flex flex-col pt-10 pb-32  overflow-scroll hide-scrollbar ">
      {history.map((data, i) => (
        <div
          key={i}
          className={`mb-4 rounded-md p-2 text-xs text-black w-[80%] font-bold capitalize ${data.role === "assistant" ? "bg-gray-400 self-start" : "self-end text-gray-200 text-right"}`}
        >
          {data.content}
        </div>
      ))}
    </div>
  );
};

export default ChatView;
