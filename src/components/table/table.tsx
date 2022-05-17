import React from "react";
import { useSelector } from "react-redux";
import { selectTable } from "./table.slice";

interface TableRowProps {
  name: string;
  thumbImageURI: string;
  symbol: string;
  _24percent: string;
  _24hVolume: string;
}
const TableRow: React.FC<TableRowProps> = ({
  name,
  _24hVolume,
  _24percent,
  symbol,
  thumbImageURI,
}: TableRowProps) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap flex items-center gap-2"
      >
        <span><img src={thumbImageURI} alt={symbol}></img></span>
        <span>{name}</span>
      </th>
      <td className="px-6 py-4">{symbol}</td>
      <td className="px-6 py-4">{_24percent}</td>
      <td className="px-6 py-4">{_24hVolume}</td>
      <td className="px-6 py-4 text-right">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          More
        </a>
      </td>
    </tr>
  );
};

export const Table = () => {
  const coins = useSelector(selectTable);

  React.useEffect(() => {
    console.log(coins);
  }, [coins]);

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
              1d
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
          {coins.map((coin) => (
            <TableRow
              key={coin.id}
              name={coin.name}
              thumbImageURI={coin.image.thumb}
              symbol={coin.symbol}
              _24percent={coin._24Percent}
              _24hVolume={coin._24hVolume}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};
