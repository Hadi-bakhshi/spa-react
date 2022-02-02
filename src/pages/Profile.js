import { Route } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Downloads } from "../Components/Download/Downloads";

const Profile = () => {
  return (
    <div>
      <p>هادی عزیز خوش آمدی </p>
      <div className="sidebarContainer">
        <Route path="/profile/dashboard" component={Dashboard} />
        <Route path="/profile/downloads" component={Downloads} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Profile;
