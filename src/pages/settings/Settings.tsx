import { NavBar } from '../../components/navbar/Navbar';
import SettingsList from '../../components/settingsList/SettingsList';
import SettingsSpace from '../../components/settingsSpace/SettingsSpace';
import './Settings.scss';

export default function Settings() {
  return (
    <div className="main">
      <NavBar />
      <SettingsList />
      <SettingsSpace />
    </div>
  );
}
