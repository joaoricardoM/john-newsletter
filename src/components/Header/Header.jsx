import ToggleTheme from "../toggleTheme/toggleTheme";

const Header = ({ user }) => {
  return (
    <div className="flex h-20 bg-blue-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
      <span className="text-gray-100">Olá, {user?.name || "Usuario"}</span>
      <h1 className="text-gray-100 text-xl">John's newsletter</h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
