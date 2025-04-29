import ContentPage from "./ContentPage";
import Sidebar from "./Sidebar";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Sidebar />
      <ContentPage />
    </div>
  );
};

export default Homepage;
