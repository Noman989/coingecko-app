import { Coin } from "../components/table/table.slice";

export const getCryptoDetails = async (id: string, market_data = false) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=${market_data.toString()}&community_data=false&developer_data=false&sparkline=true`,
    { method: "GET" }
  );

  const data = await res.json();
  return data;
};

export const getGeneralData = async (id: string) => {
  const data = await getCryptoDetails(id);
  //   console.log(data);
  const vp = await getVolumeAndPercent(id);

  const chartData = await getChartData(id);

  const coin: Coin = {
    id: id,
    name: data.name,
    image: {
      large: data.image.large,
      small: data.image.small,
      thumb: data.image.thumb,
    },
    _24Percent: `${vp.percent.percent}`,
    gain: vp.percent.gain,
    _24hVolume: `${vp.volume}`,
    symbol: data.symbol,
    chartData,
  };

  return coin;
};

export const getMarketChart = async (id: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=daily`,
    { method: "GET" }
  );

  const data = await res.json();
  console.log(data);
};

export const calcPercent = (init: number, final: number) => {
  if (init < final) {
    return {
      gain: true,
      percent: (final - init) / final,
    };
  } else if (init > final) {
    return {
      gain: false,
      percent: (init - final) / final,
    };
  } else {
    return {
      gain: false,
      percent: 0,
    };
  }
};

export const calcVolume = (init: number, final: number) => {
  return (init + final) / 2;
};

export const getVolumeAndPercent = async (id: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1&interval=daily`,
    { method: "GET" }
  );

  const data = await res.json();
  const percent = calcPercent(data.prices[0][1], data.prices[1][1]);

  const volume = calcVolume(data.total_volumes[0][1], data.total_volumes[1][1]);

  return { percent, volume };
};

export const getChartData = async (id: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`,
    { method: "GET" }
  );

  const data = await res.json();

  const returnData = data.prices.map((p: number[]) => p[1]);
  returnData.shift();
  console.log(returnData);
  return returnData;
};
