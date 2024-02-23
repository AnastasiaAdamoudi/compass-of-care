import { Link } from "react-router-dom";

const DashboardLink = ({ to, label, color, hoverColor }) => {
  return (
    <Link to={to} className={`bg-${color} rounded-xl p-4 w-[95%] sm:w-[85%] md:w-[75%] lg:w-[95%] h-[80px] md:h-[100px] lg:h-[200px] mb-3 flex justify-center items-center hover:bg-${hoverColor} hover:text-primary`}>
      <h2>{label}</h2>
    </Link>
  );
};

export default DashboardLink;