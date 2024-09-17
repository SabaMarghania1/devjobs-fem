import { Link, Outlet } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const AppLayout = () => {
  return (
    <div>
      <header className="h-[136px]">
        <div className="px-6 h-full bg-bgsm bg-cover bg-center pt-8 flex items-start justify-between">
          <Link to="/">
            <img src="/desktop/logo.svg" />
          </Link>

          <ToggleSwitch />
        </div>
      </header>
      <main className="px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
