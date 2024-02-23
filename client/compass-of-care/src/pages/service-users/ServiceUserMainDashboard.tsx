import DashboardLink from "../../components/dashboard/DashboardLink";
import BackLink from "../../components/common/back-links/BackLink";

const ServiceUsersMainDashboard = () => {
  const links = [
    { to: "/service-users/list", label: "Service Users List", color: "secondaryDark", hoverColor: "secondary" },
    { to: "/service-users/care-plans", label: "Care Plans", color: "tertiaryDark", hoverColor: "tertiary" },
    { to: "/service-users/medication", label: "Medications", color: "secondaryDark", hoverColor: "secondary" },
    { to: "/service-users/risk-assessments", label: "Risk Assessments", color: "tertiaryDark", hoverColor: "tertiary"},
    { to: "/service-users/incidents", label: "Incidents", color: "secondaryDark", hoverColor: "tertiary" },
  ];

  return (
    <div className="bg-cover bg-n-repeat bg-center overflow-hidden bg-background inset-0 w-full h-full min-h-screen">
      <BackLink to="/dashboard" />
      <div className="flex flex-col justify-center items-center text-center mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-title w-[90%] mb-3">Service Users</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 w-full lg:w-[70%] justify-items-center font-bold font-body text-white uppercase text-3xl">
          {links.map((link, index) => (
            <DashboardLink key={index} to={link.to} label={link.label} color={link.color} hoverColor={link.hoverColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceUsersMainDashboard;
