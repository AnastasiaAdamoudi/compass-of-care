import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar, Footer } from "./components/common";
import { 
  Home,
  About,
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
  });

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      accessibilityOpen: false,
    });
  };

  return (
    <Router>
      <div
        id="scroll-container"
        className="bg-cover bg-n-repeat bg-center overflow-hidden"
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
