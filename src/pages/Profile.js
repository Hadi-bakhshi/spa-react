import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Downloads } from "../Components/Download/Downloads";

const Profile = () => {
  return (
    <div>
      <p>هادی عزیز خوش آمدی </p>
      <div className="sidebarContainer">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="downloads" element={<Downloads />} />
        </Routes>
        <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
