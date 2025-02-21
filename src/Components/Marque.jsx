import React from "react";

import ACI from "../assets/img/Companies/ACI.png";
import Arista from "../assets/img/Companies/Arista.png";
import Barclays from "../assets/img/Companies/Barclays.png";
import BMC from "../assets/img/Companies/BMC.png";
import BNYMellon from "../assets/img/Companies/BNYmelon.png";
import HSBC from "../assets/img/Companies/HSBC.png";
import Ittiam from "../assets/img/Companies/Ittiam.png";
import Mastercard from "../assets/img/Companies/Mastercard.png";
import merilytics from "../assets/img/Companies/merilytics.png";
import PhonePe from "../assets/img/Companies/PhonePay.png";
import ZS from "../assets/img/Companies/ZS_logo.png";

const companyLogos = [
  { src: ACI, alt: "ACI" },
  { src: HSBC, alt: "HSBC" },
  { src: Mastercard, alt: "Mastercard" },
  { src: ZS, alt: "ZS" },
  { src: Arista, alt: "Arista" },
];

const companyLogos2 = [
  { src: Barclays, alt: "Barclays" },
  { src: PhonePe, alt: "PhonePe" },
  { src: BMC, alt: "BMC" },
  { src: BNYMellon, alt: "BNY Mellon" },
  { src: Ittiam, alt: "Ittiam" },
  { src: merilytics, alt: "Merilytics" },
];

const Marquee = () => {
  return (
    <div className="company-logos-container">
      {/* Row 1 - Left to Right */}
      <div className="marquee-wrapper">
        <div className="marquee">
          {companyLogos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
          {/* Duplicate set for seamless effect */}
          {companyLogos.map((logo, index) => (
            <img key={`dup-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="marquee-wrapper">
        <div className="marquee reverse">
          {companyLogos2.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
          {/* Duplicate set for seamless effect */}
          {companyLogos2.map((logo, index) => (
            <img key={`dup-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
