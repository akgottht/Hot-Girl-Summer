import React from "react";
import { Sparkles, Send, Calendar, PieChart } from "lucide-react";

export default function HotGirlSummer() {
  return (
    <div className="relative min-h-screen text-center overflow-hidden">
      <div className="absolute inset-0 z-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-pink-300 via-rose-200 to-orange-100"></div>

      <div className="relative z-10 p-6">
        <h1 className="text-5xl font-extrabold text-pink-800 mb-4 flex justify-center items-center gap-2">
          <Sparkles className="text-yellow-500" />
          Hot Girl Summer Coin
        </h1>
        <p className="text-xl text-pink-700 font-medium mb-10">
          HOTTEST OFFICIAL COIN OF THE SUMMER
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-80 shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-pink-800 mb-2">🔥 Why HGS?</h2>
            <p className="text-pink-700">
              Built for fun, vibes, and serious heat. It's not just a coin—it's a lifestyle. Empowering queens (and kings) on the blockchain.
            </p>
          </div>

          <div className="bg-white bg-opacity-80 shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-pink-800 mb-2">🌴 Summer Utility</h2>
            <p className="text-pink-700">
              Exclusive drops, beach party access, merch discounts, and community-led giveaways. The hotter the summer, the stronger the coin.
            </p>
          </div>

          <div className="bg-white bg-opacity-80 shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-pink-800 mb-2">💅 Join the Movement</h2>
            <p className="text-pink-700">
              Get in early, stay cute, and ride the wave. $HGS is where the summer never ends.
            </p>
          </div>

          <div className="bg-white bg-opacity-80 shadow-xl rounded-2xl p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-pink-800 mb-2 flex items-center gap-2">
              <PieChart className="text-pink-600" /> Tokenomics
            </h2>
            <p className="text-pink-700">
              50% Community | 20% Liquidity | 15% Marketing | 10% Team | 5% Airdrops
            </p>
          </div>

          <div className="bg-white bg-opacity-80 shadow-xl rounded-2xl p-6 md:col-span-2">
            <h2 className="text-2xl font-bold text-pink-800 mb-2 flex items-center gap-2">
              <Calendar className="text-pink-600" /> Roadmap
            </h2>
            <ul className="text-pink-700 list-disc list-inside">
              <li>Q2: Launch and Airdrop</li>
              <li>Q3: Partnerships + Merch Drop</li>
              <li>Q4: Metaverse Beach Club + NFT Launch</li>
              <li>Q1: DAO Formation + Utility Expansion</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 text-lg rounded-full shadow-lg">
            Buy $HGS Now
          </button>
          <a
            href="https://t.me/HotCoinSummer1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white border border-pink-500 text-pink-700 px-6 py-3 text-lg rounded-full shadow-md hover:bg-pink-50 transition"
          >
            <Send className="mr-2" /> Join Telegram
          </a>
        </div>
      </div>

      <style jsx>{\`
        .animate-gradient {
          background-image: linear-gradient(270deg, #fbcfe8, #fcd34d, #fca5a5, #fdba74);
          animation: gradientMove 15s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      \`}</style>
    </div>
  );
}
