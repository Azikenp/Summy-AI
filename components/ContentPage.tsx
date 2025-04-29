import ChatView from "./ChatView";
import Search from "./Search";

const ContentPage = () => {
  return (
    <div className="flex-1 text-sm">
      <ChatView />
      <Search />
    </div>
  );
};

export default ContentPage;
