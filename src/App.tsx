import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners, Clients } from "@/components/PartnersAndClients";
import { Services } from "@/components/Services";
import { Divider } from "@/components/Divider";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 selection:text-gray-50 selection:bg-red-500">
        <Header />
        <Hero />
        <Divider>Partners</Divider>
        <Partners />
        <Divider>Clients</Divider>
        <Clients />
        <Divider>Services</Divider>
        <Services />
      </div>
    </>
  );
};

export default App;
