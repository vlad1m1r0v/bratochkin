import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 selection:text-gray-50 selection:bg-red-500">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default App;
