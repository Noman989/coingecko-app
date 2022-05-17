import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface NavProps {
  name?: string;
}
export const Nav: React.FC<NavProps> = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState(location.pathname);
  const [coinId, setCoinId] = React.useState("");

  React.useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const nav = useNavigate();
  const goto = (path: string) => {
    nav(path);
  };
  return (
    <div className="flex items-center justify-between px-12 bg-cyan-600 text-white h-[72px] w-full">
      <div className="flex items-center gap-12">
        <h1 className="text-3xl font-bold">Logo.</h1>
        <div className="flex gap-6 font-bold">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goto("/");
            }}
            className={`${currentPath === '/' ? 'text-cyan-100' : 'text-white'}`}
            >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goto("/compare");
            }}
            className={`${currentPath === '/compare' ? 'text-cyan-100' : 'text-white'}`}
          >
            Compare
          </a>
        </div>
      </div>
      <div>
        <input
          type="text"
          id="coinId-navbar"
          className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="CoinId..."
          value={coinId}
          onChange={(e) => setCoinId(e.currentTarget.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              goto(`/${coinId}`);
            }
          }}
        />
      </div>
    </div>
  );
};
