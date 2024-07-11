import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { UserAuth } from "../Conntext/AuthContext";
import { RiArrowUpSFill, RiArrowDownSFill, RiCloseFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "user", `${user?.email}`), (doc) => {
      setCoins(doc.data().watchList);
    });
  }, [user?.email]);

  const coinPath = doc(db, "user", `${user?.email}`);
  const deleteCoin = async (passedId) => {
    try {
      const result = coins.filter((item) => item.coin.id !== passedId);
      await updateDoc(coinPath, {
        watchList: result,
      });
    } catch (error) {
      console.log(error.messsage);
    }
  };
  //   console.log(coins);
  return (
    <div className="h-full py-3">
      {!coins || coins.length <= 0 ? (
        <div className="h-[200px] flex items-center justify-center">
          <Link to="/" className="hover:text-green-300">
            <p>
              You don't have any coin saved. Please save a coin to add it to
              your watch list. Click to add
            </p>
          </Link>
        </div>
      ) : (
        <table className="table-auto w-full border-collapse py-4 sm:table-fixed overflow-hidden">
          <thead className="h-[40px]">
            <tr className="border-b">
              <th align="center">#</th>
              <th align="start">Coin</th>
              <th align="start">Price</th>
              <th align="start">24h</th>
              <th align="start">Market cap</th>
              <th align="end"></th>
            </tr>
          </thead>
          <tbody>
            {coins &&
              coins.length > 0 &&
              coins.map((coin, idx) => (
                <tr
                  className="h-[60px] overflow-hidden border-b border-opacity-50 last:border-none"
                  key={idx}
                >
                  <td className="" align="center">
                    {coin.coin.market_cap_rank}
                  </td>
                  <td className="" align="start">
                    <div className="w-full flex items-center gap-3">
                      <img
                        loading="lazy"
                        src={coin.coin.image}
                        className="w-6 h-6"
                      />{" "}
                      <p className="text-sm">
                        <span className="hidden md:inline">
                          {coin.coin.name}- &nbsp;
                        </span>
                        <span className="uppercase">{coin.coin.symbol}</span>
                      </p>
                    </div>
                  </td>
                  <td className="" align="start">
                    ${coin.coin.current_price.toLocaleString()}
                  </td>
                  <td className="" align="start">
                    {coin.coin.price_change_percentage_24h > 0 ? (
                      <p className="text-green-600 flex items-center">
                        <span>
                          <RiArrowUpSFill size={20} />{" "}
                        </span>{" "}
                        <span>{coin.coin.price_change_percentage_24h}%</span>
                      </p>
                    ) : (
                      <p className="text-red-600 flex items-center">
                        <span>
                          <RiArrowDownSFill size={20} />{" "}
                        </span>{" "}
                        <span>{coin.coin.price_change_percentage_24h}%</span>
                      </p>
                    )}
                  </td>
                  <td className="" align="start">
                    <p
                      className={`${
                        coin.coin.price_change_percentage_24h > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ${coin.coin.market_cap.toLocaleString()}
                    </p>
                  </td>
                  <td>
                    <button
                      className="text-secondary bg-button p-1 rounded-lg relative group"
                      onClick={() => deleteCoin(coin.coin.id)}
                    >
                      <MdDelete
                        size={20}
                        className="group-hover:text-red-600"
                      />
                      {/* <p className="text-primary text-sm  hidden absolute top-[5px] left-10  group-hover:inline z-20">
                        Remove
                      </p> */}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
