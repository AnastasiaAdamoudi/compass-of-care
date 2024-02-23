import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar, Footer } from "./components/common";
import { 
  Home,
  Calendar,
  Contacts,
  Policies,
  Login,
  MainDashboard,
  EmployeesMainDashboard,
  EmployeeList,
  EmployeeDetails,
  EmployeeProfileList,
  EmployeeProfileDetails,
  TrainingList,
  EmployeeIncidentList,
  EmployeeIncidentDetails,
  ServiceUserMainDashboard,
  ServiceUserList,
  ServiceUserDetails,
  CarePlanList,
  CarePlanDetails,
  MedicationList,
  RiskAssessmentList,
  ServiceUserIncidentList,
  ServiceUserIncidentDetails,
} from "./pages";

const App = () => {

  const [modalState, setModalState] = useState({
    privacyOpen: false,
    accessibilityOpen: false,
    aboutOpen: false,
  });

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      accessibilityOpen: false,
      aboutOpen: false,
    });
  };

  return (
    <Router>
      <div
        id="scroll-container"
        className="bg-cover bg-n-repeat bg-center overflow-hidden"
      >
        <Navbar
          modalState={modalState}
          setModalState={setModalState}
          closeModal={closeModal}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<MainDashboard />} />
          <Route path="/employees" element={<EmployeesMainDashboard />} />
          <Route path="/employees/list" element={<EmployeeList />} />
          <Route path="/employees/details" element={<EmployeeDetails />} />
          <Route path="/employees/profiles" element={<EmployeeProfileList />} />
          <Route path="/employees/profiles/details" element={<EmployeeProfileDetails />} />
          <Route path="/employees/training" element={<TrainingList />} />
          <Route path="/employees/incidents" element={<EmployeeIncidentList />} />
          <Route path="/employees/incidents/details" element={<EmployeeIncidentDetails />} />
          <Route path="/service-users" element={<ServiceUserMainDashboard />} />
          <Route path="/service-users/list" element={<ServiceUserList />} />
          <Route path="/service-users/details" element={<ServiceUserDetails />} />
          <Route path="/service-users/care-plans" element={<CarePlanList />} />
          <Route path="/service-users/care-plans/details" element={<CarePlanDetails />} />
          <Route path="/service-users/medications" element={<MedicationList />} />
          <Route path="/service-users/risk-assessments" element={<RiskAssessmentList />} />
          <Route path="/service-users/incidents" element={<ServiceUserIncidentList />} />
          <Route path="/service-users/incidents/details" element={<ServiceUserIncidentDetails />} />
        </Routes>
        <Footer
          modalState={modalState}
          setModalState={setModalState}
          closeModal={closeModal}
        />
      </div>
    </Router>
  );
};

export default App;
