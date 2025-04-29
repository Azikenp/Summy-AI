import ChatView from "./ChatView";
import Search from "./Search";

const ContentPage = () => {
  return (
    <div className="flex-1 flex justify-center text-sm px-3 md:px-16 py-2">
      <ChatView />
      <Search />
    </div>
  );
};

export default ContentPage;
