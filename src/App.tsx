import React from 'react';
import './App.css';
import { Nav } from './components/nav';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Compare } from './pages/Compare';
import { CoinId } from './pages/CoinId';
import { pushCoin } from "./components/table/table.slice";
import { getGeneralData, getVolumeAndPercent } from "./api/coingecko";
import { useDispatch } from "react-redux";
import { CoinsList } from "./utils/coins_list";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {

    (async () => {
      let counter = 0;
      const interval = setInterval(async () => {
        const coin = await getGeneralData(CoinsList.compare_list[counter].id);
        dispatch(pushCoin(coin));
        counter++;
        if (!CoinsList.compare_list[counter]) clearInterval(interval);
      }, 1000);

      await getVolumeAndPercent("bitcoin");
    })();
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/:coinid" element={<CoinId />} />
      </Routes>
    </div>
  );
}

export default App;
