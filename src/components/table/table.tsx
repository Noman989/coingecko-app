import React from "react";

export const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th scope="col" className="px-6 py-3">
              7d
            </th>
            <th scope="col" className="px-6 py-3">
              24h Volume
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Bitcoin
            </th>
            <td className="px-6 py-4">BTC</td>
            <td className="px-6 py-4">22%</td>
            <td className="px-6 py-4">12334123124</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                More
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
