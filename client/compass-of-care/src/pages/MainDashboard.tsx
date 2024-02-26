import { userProfile } from "../data/data";
import DashboardLink from "../components/dashboard/DashboardLink";

const MainDashboard = () => {
  const links = [
    { to: "/employees", label: "Employees", color: "secondaryDark", hoverColor: "secondary" },
    { to: "/service-users", label: "Service Users", color: "tertiaryDark", hoverColor: "tertiary" },
    { to: "/calendar", label: "Calendar", color: "secondaryDark", hoverColor: "secondary" },
    { to: "/policies", label: "Policies", color: "tertiaryDark", hoverColor: "tertiary" },
    { to: "/contacts", label: "Contacts", color: "secondaryDark", hoverColor: "secondary" },
    { to: "/notes", label: "Notes", color: "tertiaryDark", hoverColor: "tertiary" }
  ];

  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden bg-background inset-0 w-full h-full min-h-screen">
      <div className="flex flex-col justify-center items-center text-center mx-auto">
        <h1 className="mt-2 text-4xl md:text-5xl font-bold font-title text-primary w-[90%] mb-3">{userProfile.company} Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 w-full lg:w-[70%] justify-items-center font-bold font-body text-white uppercase text-3xl">
          {links.map((link, index) => (
            <DashboardLink key={index} to={link.to} label={link.label} color={link.color} hoverColor={link.hoverColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;