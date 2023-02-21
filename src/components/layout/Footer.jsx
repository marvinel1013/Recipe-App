import React from "react";
import Logo from "../../images/FooterLogo.png";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-2 md:p-6 gap-3 bg-[#7c5441]">
      <img src={Logo} alt="logo" className="w-16 md:w-24" />
      <span className="md:text-xl text-[#5c2a1a] font-semibold">
        Find the perfect meal recipe for you
      </span>
      <small className="text-[#dbcdb5]">
        © “Meals Recipe by Marvinel” | 2022 All right reserved.
      </small>
    </div>
  );
}

export default Footer;
