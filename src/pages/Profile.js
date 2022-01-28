import { Route } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Downloads } from "../Components/Download/Downloads";

const Profile = () => {
  return (
    <>
      <p>هادی عزیز خوش آمدی </p>
      <Sidebar />
      <Route path="/profile/dashboard" component={Dashboard} />
      <Route path="/profile/downloads" component={Downloads}/>
    </>
  );
};

export default Profile;
