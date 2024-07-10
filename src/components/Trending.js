import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Trending = () => {
  const url = `https://api.coingecko.com/api/v3/search/trending`;

  const { isPending, error, data } = useQuery({
    queryKey: ["trending"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="rounded-div my-12 pb-4  text-primary">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      {data && data.length <= 0 && (
        <h4 className="text-sm font-bold py-4">Trending Coins</h4>
      )}{" "}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.coins.map((coin, idx) => (
          <Link to={`/coin/${coin.item.id}`} key={idx}>
            <div
              key={idx}
              className="rounded-div flex justify-between p-4 hover:scale-105 ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex">
                  <img className="mr-4 " src={coin.item.small} alt="" />
                  <div>
                    <p className="font-bold">{coin.item.name}</p>
                    <p>{coin.item.symbol}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img className="w-4 mr-2" src="" alt="" />
                  <p>{coin.item.price_btc.toFixed(7)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
