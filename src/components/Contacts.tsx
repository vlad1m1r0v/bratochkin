import Instagram from "@/assets/socials/instagram.svg";
import Telegram from "@/assets/socials/telegram.svg";
import LinkedIn from "@/assets/socials/linkedin.svg";

interface Social {
  logo: string;
  href: string;
}

const socials: Social[] = [
  {
    logo: Instagram,
    href: "https://www.instagram.com/simplemaker/",
  },
  {
    logo: Telegram,
    href: "https://t.me/simplemaker",
  },
  {
    logo: LinkedIn,
    href: "https://www.linkedin.com/in/oleg-br%C3%A1tochkin-229188185/",
  },
];

interface Location {
  country: string;
  address: string;
}

const locations: Location[] = [
  {
    country: "🇵🇱 Poland",
    address: "Warsaw, Grzybowska St. 73/8a",
  },
  {
    country: "🇪🇪 Estonia",
    address: "Tallinn, Kesklinna linnaosa, Vesivärava tn 50-201",
  },
  {
    country: "🇺🇸 United States",
    address: "30 N Gould St Ste R, Sheridan, WY 82801",
  },
];

export const Contacts = () => {
  return (
    <section>
      <div className="flex flex-col gap-y-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex flex-row gap-x-6">
            {socials.map((social) => (
              <a href={social.href}>
                <img className="w-12 rounded-md" src={social.logo} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {locations.map((location) => (
            <div>
              <p className="text-2xl font-bold">{location.country}</p>
              <p className="text-xl font-light">{location.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
