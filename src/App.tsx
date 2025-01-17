import { Header } from "@/components/Header";
import {
  Hero,
  Stats,
  Clients,
  Partners,
  Services,
  Events,
  Contacts,
} from "@/components/sections";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-gray-50 selection:text-gray-50 selection:bg-red-500">
        <Header />
        <div id="about-us">
          <Hero />
        </div>
        <div id="stats">
          <Divider>Stats</Divider>
          <Stats />
        </div>
        <div id="clients">
          <Divider>Clients</Divider>
          <Clients />
          <div id="partners">
            <Divider>Partners</Divider>
            <Partners />
          </div>
        </div>
        <div id="services">
          <Divider>Services</Divider>
          <Services />
        </div>
        <div id="events">
          <Divider>Events</Divider>
          <Events />
        </div>
        <div id="contacts">
          <Divider>Contacts</Divider>
          <Contacts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
