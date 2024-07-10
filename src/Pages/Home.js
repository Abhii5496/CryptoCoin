import React from "react";
import SearchCoin from "../components/SearchCoin";
import Trending from "../components/Trending";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h";

  const { isLoading, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  // console.log(isLoading, error, data);
  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center min-h-screen">
          <h4 className="text-red-500 italic  text-xl">
            Something is not working , please try again. Sorry mate!
          </h4>
        </div>
      )}
      {data && data.length > 0 && <SearchCoin coins={data} />}
      <Trending />
    </div>
  );
};

export default Home;
