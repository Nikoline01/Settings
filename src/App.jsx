import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import OnboardingPageOne from "./pages/Onboarding/OnboardingFirst";
import SettingsFrontScreen from "./pages/Settings/SettingsFrontScreen";
import SettingsPersonal from "./pages/Settings/SettingsPersonal";
import SettingsName from "./pages/Settings/SettingsName";
import SettingsLanguage from "./pages/Settings/SettingsLanguage";
import SettingsNotifications from "./pages/Settings/SettingsNotifications";
import SettingsPrivacy from "./pages/Settings/SettingsPrivacy";
import SettingsDelete from "./pages/Settings/SettingsDelete";
import SettingsConfirm from "./pages/Settings/SettingsConfirm";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingPageOne />} />
        <Route path="/settings" element={<SettingsFrontScreen />} />
        <Route path="/personal" element={<SettingsPersonal />} />
        <Route path="/name" element={<SettingsName />} />
        <Route path="/language" element={<SettingsLanguage />} />
        <Route path="/notifications" element={<SettingsNotifications />} />
        <Route path="/privacy" element={<SettingsPrivacy />} />
        <Route path="/delete" element={<SettingsDelete />} />
        <Route path="/confirm-delete" element={<SettingsConfirm />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
