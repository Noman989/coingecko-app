import React from "react";
import { Table } from "../../components/table";
import { setCoinsList, pushCoin, selectTable } from "../../components/table/table.slice";
import { getGeneralData, getMarketChart, getVolumeAndPercent } from "../../api/coingecko";
import { useDispatch, useSelector } from "react-redux";
import { CoinsList } from "../../utils/coins_list";
import { Chart } from "../../components/chart/chart";
export interface HomeProps {
  name?: string;
}
export const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const coins = useSelector(selectTable);

  React.useEffect(() => {
    (async () => {
      let counter = 0;
      const interval = setInterval(async () => {
        const coin = await getGeneralData(CoinsList.compare_list[counter].id);
        dispatch(pushCoin(coin));
        counter++;
        if (!CoinsList.compare_list[counter]) clearInterval(interval);
      }, 300);

      await getVolumeAndPercent("bitcoin");
    })();
  }, []);

  return (
    <div className="flex justify-center mt-12">
      <Table />
    </div>
  );
};
