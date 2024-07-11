import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../Conntext/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const CoinItem = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, "user", `${user?.email}`);

  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          coin,
        }),
      });
    } else {
      alert("Please Sign in To save Coin to WatchList");
    }
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden last:border-none ">
      <td
        onClick={saveCoin}
        className="cursor-pointer hover:scale-125 duration-300"
      >
        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
              loading="lazy"
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>

      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {" "}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {" "}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell ">
        ${coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden md:table-cell ">
        ${coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine
            color={coin.price_change_percentage_24h > 0 ? "green" : "red"}
          />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
