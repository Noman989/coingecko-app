import React from "react";
import { useParams } from "react-router-dom";
import { getCryptoDetails, getChartData } from "../../api/coingecko";
import { Chart } from "../../components/chart/chart";

export interface CoinIdProps {
  name?: string;
}
export const CoinId: React.FC<CoinIdProps> = () => {
  const params = useParams();
  const [isValid, setIsValid] = React.useState(true);
  const [data, setData] = React.useState({} as any);
  const [chartData, setChartData] = React.useState<number[]>([]);

  React.useEffect(() => {
    (async () => {
      const data = await getCryptoDetails(params.coinid as string, true);
      console.log(data);
      if (data.error) {
        setIsValid(false);
      } else {
        setIsValid(true);
        setData(data);
        const _chart_data = await getChartData(params.coinid as string);
        setChartData(_chart_data);
      }
    })();
    console.log("RESET :", params.coinid);
  }, [params]);

  return (
    <div className="bg-[#e3e3e3] w-full flex justify-center py-12">
      <div className="bg-white rounded-3xl shadow-xl p-12 w-full max-w-[800px]">
        {isValid ? (
          <div>
            {data.image && (
              <div>
                <div id="logo_and_symbol" className="flex items-center gap-2">
                  <img src={data.image.small} alt={data.symbol}></img>
                  <h3 className="font-bold text-2xl">{data.name}</h3>
                  <h3 className="font-bold text-2xl">({data.symbol})</h3>
                  <h3 className="font-bold text-2xl">
                    {data.market_data.price_change_percentage_1h_in_currency
                      .usd > 0 ? (
                      <span className="text-green-400">
                        <i className="fa-solid fa-caret-up"></i>
                        {
                          data.market_data
                            .price_change_percentage_1h_in_currency.usd
                        }
                      </span>
                    ) : (
                      <span className="text-red-400">
                        <i className="fa-solid fa-caret-down"></i>
                        {
                          data.market_data
                            .price_change_percentage_1h_in_currency.usd
                        }
                      </span>
                    )}
                  </h3>
                </div>
                <div id="market_data" className="mt-4">
                  <h1 className="font-semibold text-2xl">Market Data :</h1>
                  <div className="flex flex-col">
                    <div id="text_market_data" className="flex-1 flex-shrink-0">
                      <div className="flex justify-between px-4 py-1">
                        <span className="font-semibold">Current Price :</span>
                        <span className="font-semibold">
                          {data.market_data.current_price.usd}$
                        </span>
                      </div>
                      <div className="flex justify-between px-4 py-1">
                        <span className="font-semibold">All Time High :</span>
                        <span className="font-semibold">
                          {data.market_data.ath.usd}$
                        </span>
                      </div>
                      <div className="flex justify-between px-4 py-1">
                        <span className="font-semibold">All Time Low :</span>
                        <span className="font-semibold">
                          {data.market_data.atl.usd}$
                        </span>
                      </div>
                      <div className="flex justify-between px-4 py-1">
                        <span className="font-semibold">Market Cap :</span>
                        <span className="font-semibold">
                          {data.market_data.market_cap.usd}$
                        </span>
                      </div>
                      <div className="flex justify-between px-4 py-1">
                        <span className="font-semibold">Total Volume :</span>
                        <span className="font-semibold">
                          {data.market_data.total_volume.usd}$
                        </span>
                      </div>
                      <div className="flex justify-between px-4 py-1">
                        <span className="font-semibold">Max Supply :</span>
                        <span className="font-semibold">
                          {data.market_data.max_supply}
                          <img
                            className="inline pl-2"
                            src={data.image.thumb}
                            alt={data.symbol}
                          ></img>
                        </span>
                      </div>
                    </div>
                    <div id="text_market_data" className="flex-1 flex-shrink-0">
                      <Chart
                        chartData={chartData}
                        height={"150px"}
                        name={data.name}
                        x={true}
                        y={true}
                      />
                    </div>
                  </div>
                </div>
                <div id="description_container" className="mt-4">
                  <h1 className="font-semibold text-2xl">Description :</h1>
                  <div
                    id="description"
                    dangerouslySetInnerHTML={{ __html: data.description.en }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>InValid</div>
        )}
      </div>
    </div>
  );
};
