import React, { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import "../App.css";

function Main() {

  const [prices, setPrices] = useState({
    bitcoin: null,
    tether: null,
    dogecoin: null,
    shiba: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [news, setNews] = useState([]);

  const fetchCryptoPrices = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,tether,dogecoin,shiba-inu&vs_currencies=usd"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch the data");
      }
      const data = await res.json();
      setPrices({
        bitcoin: data.bitcoin.usd,
        tether: data.tether.usd,
        dogecoin: data.dogecoin.usd,
        shiba: data["shiba-inu"].usd,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const fetchNews = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/news");
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      const dataNews = await response.json();
      console.log(dataNews);  // نمایش داده‌های دریافت شده از API
      setNews(dataNews); // ذخیره اخبار در state
    } catch (error) {
      console.error("Error fetching news:", error);  // نمایش خطای دریافتی در کنسول
    }
  };

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  useEffect(() => {
    fetchNews(); // فراخوانی تابع هنگام بارگذاری کامپوننت
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container col-span-4 ">
      <div className="grid grid-cols-4 gap-4">
        <ShowPriceBitcoin bitcoin={prices.bitcoin} />
        <ShowPricetether tether={prices.tether} />
        <ShowPricedogecoin dogecoin={prices.dogecoin} />
        <ShowPriceshiba shiba={prices.shiba} />
      </div>
      <div><TradingViewChart /> </div>
      <div className="grid grid-cols-2 gap-4 mt-3">
        <div className="h-60 rounded-lg overflow-auto">
        {news.length > 0 ? (
    news.map((n, index) => (
      <div key={index} className="mb-4 p-2 border-b">
        <h5 className="text-lg font-bold">{n.title || "No Title"}</h5>
        <p className="text-gray-600">
          {n.description || "No description available"}
        </p>
        <a
          href={n.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
    ))
  ) : (
    <p>No news available</p>
  )}
        </div>
        <div className="mr-2 h-60 rounded-lg">Other Content</div>
      </div>
    </div>
  );
}
export default Main;

function ShowPriceBitcoin({ bitcoin }) {
  return (
    <div className="bg-slate-100 h-24 rounded-lg flex gap-x-12 mr-5">
      <div className="justify-start m-2">
        <FaBitcoin className="font-mono mt-2" size={53} color="#f7931a" />
        <h1 className="price text-[#f7931a] mt-1">Bitcoin</h1>
      </div>
      <div className="flex">
        <h1 className="mt-8 mr-2 text-2xl flex text-green-800">
          <span className="mr-3">↑</span> {bitcoin}$
        </h1>
      </div>
>>>>>>> 136e7380329d299d7361955f37faf40a5964939b
    </div>
  );
}

function ShowPricetether({ tether }) {
  return (
    <div className="bg-slate-100 h-24 rounded-lg flex gap-x-12 mr-5">
      <div className="justify-start m-2">
        <img src="../src/assets/825508.png" className="w-12 mt-2" />
        <h1 className="price text-[#18A27A] mt-2">tether</h1>
      </div>
      <div className="flex">
        <h1 className="mt-8 mr-2 text-2xl flex text-red-800">
          <span className="mr-3">↓</span> {tether}$
        </h1>
      </div>
    </div>
  );
}

function ShowPricedogecoin({ dogecoin }) {
  return (
    <div className="bg-slate-100 h-24 rounded-lg flex gap-x-1 mr-5">
      <div className="justify-start m-2">
        <img src="../src/assets/6001356.png" className="w-14" />
        <h1 className="price text-[#EBBF00] mt-2">dogecoin</h1>
      </div>
      <div className="flex">
        <h1 className="mt-8 mr-2 text-2xl flex text-red-800">
          <span className="mr-3">↓</span> {dogecoin}$
        </h1>
      </div>
    </div>
  );
}

function ShowPriceshiba({ shiba }) {
  return (
    <div className="bg-slate-100 h-24 rounded-lg flex gap-x-1 mr-5">
      <div className="justify-start m-2">
        <img src="../src/assets/8708467.png" className="w-14" />
        <h1 className="price text-[#EBBF00] mt-2">shiba</h1>
      </div>
      <div className="flex">
        <h1 className="mt-8 mr-2 text-2xl flex text-green-800">
          <span className="mr-3">↑</span> {shiba}$
        </h1>
      </div>
    </div>
  );
}

function TradingViewChart() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "100%",
        height: 400,
        symbol: "BTCUSDT",
        interval: "15",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_side_toolbar: false,
        save_image: false,
        container_id: "tradingview-chart",
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div className="rounded-xl mr-5 mt-3" id="tradingview-chart"></div>;
}
