import { Coin } from '../components/table/table.slice'
export const getGeneralData = async (id: string) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true`,
    { method: "GET" }
  );

  const data = await res.json();
  //   console.log(data);

  const coin: Coin = {
    id: id,
    name: data.name,
    image: {
      large: data.image.large,
      small: data.image.small,
      thumb: data.image.thumb,
    },
    _24Percent: "22",
    _24hVolume: "2222222",
    symbol: data.symbol,
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
