import ContentPage from "./ContentPage";
import Sidebar from "./Sidebar";

const Homepage = () => {
  return (
    <div className="flex h-screen text-gray-100 pt-10">
      <Sidebar />
      <ContentPage />
    </div>
  );
};

export default Homepage;
