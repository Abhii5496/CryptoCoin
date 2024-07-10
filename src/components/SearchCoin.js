import React, { useState } from "react";
import CoinItem from "./CoinItem";

const SearchCoin = ({ coins }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="rounded-div my-4">
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right ">
          <h1 className="text-2xl font-bold my-2">Search Coin</h1>
          <form>
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-lg"
              type="text"
              placeholder="Search here"
            ></input>
          </form>
        </div>

        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th></th>
              <th className="px-4">#</th>
              <th className="text-left ">Coin</th>
              <th></th>
              <th>Price</th>
              {/* <th>1h</th> */}
              <th>24h</th>
              <th>24h Volume</th>
              <th className="hidden sm:table-cell">Market</th>
              <th className="hidden md:table-cell">Last 7 days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((value) => {
                {
                  /* return  value.id.toLowerCase().includes(search)  ||  value.symbol.toLowerCase().includes(search) */
                }
                {
                  /* return value.name.toLowerCase().includes(search.toLocaleLowerCase()) || value.symbol.toLowerCase().includes(search) */
                }

                if (search === "") {
                  return value;
                } else if (
                  value.name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  value.symbol.toLowerCase().includes(search)
                ) {
                  return value;
                }
              })
              .map((coin) => (
                <CoinItem key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchCoin;
