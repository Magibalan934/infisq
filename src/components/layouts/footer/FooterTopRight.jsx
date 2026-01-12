import { ourService } from "../../../data/ourService";
import { exploreMe } from "../../../data/exploreMore";
import FooterDetailsLoader from "./FooterDetailsLoader";
import {
  footerContactDetails,
  socialMediaLinks,
} from "../../../data/footerContactDetails";
import {
  MapPin,
  Phone,
  Mail,
  Smartphone,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function FooterTopRight() {
  return (
    <div className="w-[60%] flex justify-between ps-15">
      {/* our services */}

      <FooterDetailsLoader title="Our Services" datas={ourService} />

      {/* explore more */}

      <FooterDetailsLoader title="Explore More" datas={exploreMe} />

      {/* contact us */}

      <div className="flex flex-col gap-5">
        <h1 className="text-primary font-semibold text-xl">Contact us</h1>
        <ul className="flex flex-col gap-3">
          {footerContactDetails.map((detail, index) => {
            return (
              <li key={index} className="flex gap-2">
                <span>
                  <detail.Icon className="text-primary" />
                </span>
                <span>{detail.value}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-5 my-3">
          {socialMediaLinks.map((social, index) => {
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.Icon className="text-primary" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
