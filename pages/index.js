import SideBar from "../components/sideBar";
import Modalsetting from "../components/modalsetting";
import EmergencyNumber from "../components/callEmergencylModal";
import Logout from "../components/logout";
import Connection from "../components/connection";
import Devicefound from "../components/devicefound";

export default function Home() {
  return (
    <>

    <Devicefound />
    <Connection />
    <Logout/>
      <EmergencyNumber /> 
	 {/*  <Modalsetting /> */}
    </>
  );
}
