import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners, Clients } from "@/components/PartnersAndClients";
import { Services } from "@/components/Services";
import { Contacts } from "@/components/Contacts";
import { Divider } from "@/components/Divider";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 selection:text-gray-50 selection:bg-red-500">
        <Header />
        <div id="hero">
          <Hero />
        </div>
        <div id="partners-and-clients">
          <Divider>Partners</Divider>
          <Partners />
          <Divider>Clients</Divider>
          <Clients />
        </div>
        <div id="services">
          <Divider>Services</Divider>
          <Services />
        </div>
        <div id="contacts">
          <Divider>Contacts</Divider>
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default App;
