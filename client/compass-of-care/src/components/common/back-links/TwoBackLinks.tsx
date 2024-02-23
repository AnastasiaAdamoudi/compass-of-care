import { backArrowRed, backArrowGreen } from "../../../assets";
import { Link } from "react-router-dom";

const BackLink = () => {
  return (
    <>
    <Link to="/dashboard">
<div className="flex flex-row justify-start items-center text-left mx-auto">
  <img src={backArrowGreen} alt="back arrow" className="w-12 h-12 mt-4 ml-8" />
  <img src={backArrowGreen} alt="back arrow" className="w-12 h-12 mt-4 -ml-4" />
  <p className="text-tertiaryDark hover:text-secondayDark text-xl font-body mt-4 ml-2">main dashboard</p>
</div>
</Link>
<Link to="/dashboard">
<div className="flex flex-row justify-start items-center text-left mx-auto">
  <img src={backArrowGreen} alt="back arrow" className="w-12 h-12 mt-4 ml-8" />
  <p className="text-tertiaryDark hover:text-secondayDark text-xl font-body mt-4 ml-2">main dashboard</p>
</div>
</Link>
</>
    );
    };

export default BackLink;