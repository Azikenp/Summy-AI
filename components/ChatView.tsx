const ChatView = () => {
  const chats = [
    {
      name: "jne db wedjdk w j j dw jdwjdnwjwj jw dw djwq j djq wdjqd j sdj sj j jj  hd wjdw j",
    },
    {
      name: "jne db wedjdk w j j dw jdwjdnwjwj jw dw djwq j djq wdjqd j sdj sj j jj  hd wjdw jjne db wedjdk w j j dw jdwjdnwjwj jw dw djwq j djq wdjqd j sdj sj j jj  hd wjdw jjne db wedjdk w j j dw jdwjdnwjwj jw dw djwq j djq wdjqd j sdj sj j jj  hd wjdw jjne db wedjdk w j j dw jdwjdnwjwj jw dw djwq j djq wdjqd j sdj sj j jj  hd wjdw jvv j sdj sj j jj  hd wjdw jew wdwdw dwid djqw djq wduw u u",
      ai: true,
    },
  ];

  return (
    <div className="mt-2 flex flex-col">
      {chats.map((chat, i) => (
        <div
          key={i}
          className={`mb-4 rounded-md p-2 text-xs  text-black w-[80%] font-bold capitalize ${chat.ai ? "bg-gray-400 self-start" : "self-end text-gray-200 text-right"}`}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
};

export default ChatView;
