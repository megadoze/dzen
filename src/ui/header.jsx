import { SunIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className=" flex justify-between items-center bg-slate-50 p-4 rounded-lg text-slate-700 mt-3">
      <p id="logo" className=" text-2xl text-slate-700 font-semibold">
        Dzen
      </p>
      <div id="weather" className=" hidden items-center sm:flex">
        <SunIcon className="size-6 text-yellow-400" />
        <p className="font-medium text-lg pl-1">
          +18
          <span className=" pl-3">Salou</span>
        </p>
      </div>
      <p
        id="currency"
        className="hidden font-medium text-lg items-center sm:flex"
      >
        usd <span className="pl-2 pr-3"> 42,05 </span>
        eur <span className="pl-2"> 44,02</span>
      </p>
      <p className=" font-medium">Войти</p>
    </header>
  );
};

export default Header;
