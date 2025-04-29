"use client";

import { IoSendOutline } from "react-icons/io5";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <div className="fixed bottom-10 border-1 rounded-md">
      <div className="flex items-center justify-center ">
        <Input
          placeholder="Enter a search text"
          className="w-[200px] md:w-[480px] placeholder:text-[10px] bg-transparent"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button>
          <IoSendOutline />
        </Button>
      </div>
    </div>
  );
};

export default Search;
