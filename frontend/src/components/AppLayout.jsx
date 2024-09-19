import { Link, Outlet } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-main-bg">
      <header className="h-[136px] md:h-[160px]">
        <div className="px-6 md:px-10 md:pt-9 h-full bg-bgsm md:bg-bgmd bg-cover bg-center pt-8 flex items-start justify-between">
          <Link to="/">
            <img src="/desktop/logo.svg" />
          </Link>

          <ToggleSwitch />
        </div>
      </header>
      <main className="px-6 md:px-10 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
