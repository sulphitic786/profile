import SettingsContext from "app/contexts/SettingsContext";
import { useContext } from "react";

const useSettings = () => useContext(SettingsContext);

export default useSettings;
