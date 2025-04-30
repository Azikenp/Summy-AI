// import { useEffect, useRef, useState } from "react";
import SubmitButton from "./SubmitButton";
import PromptTextarea from "./PromptTextArea";

const Search = () => {
  // const [text, setText] = useState("");
  // const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form className="fixed bottom-10 border-1 rounded-md">
      <div className="flex items-center justify-center ">
        <PromptTextarea />
        <SubmitButton />
      </div>
    </form>
  );
};

export default Search;
