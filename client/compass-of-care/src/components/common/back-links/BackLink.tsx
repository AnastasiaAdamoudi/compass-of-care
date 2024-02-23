import { useState } from "react";
import { backArrowGreen, backArrowRed } from "../../../assets";
import { Link } from "react-router-dom";

const BackLink = ({ to, doubleArrows }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-row justify-start items-center text-left mx-auto mb-6">
      <Link
        to={to}
        className="flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {doubleArrows && (
          <img src={isHovered ? backArrowRed : backArrowGreen} alt="back arrow" className="w-8 h-8 mt-4 ml-6" />
        )}
        <img
          src={isHovered ? backArrowRed : backArrowGreen}
          alt="back arrow"
          className={`w-8 h-8 mt-4 ${doubleArrows ? "-ml-3" : "ml-8"}`}
        />
        <p className="text-tertiaryDark hover:text-secondaryDark text-xl font-body mt-4 ml-2">main dashboard</p>
      </Link>
    </div>
  );
};

export default BackLink;
