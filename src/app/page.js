'use client';

import Image from "next/image";
import { Twitter, Send, Shield, Flame, Lock } from 'lucide-react';
import Link from "next/link";
import FAQ from "@/components/faq";

import cookbsc from "@/app/images/cook bsc.jpg";
import dexscreener from "@/app/images/dexscreener_white.png";
import dextools from "@/app/images/DEXTools.png";
import pcsIcon from "@/app/images/mono-white.png";
import poocoin from "@/app/images/poocoin.png";
import BuyPage from "@/components/BuyNow";


export default function Home() {
  return (
    <div>
      <Main></Main>

    </div>
  );
}

function Main() {
  return (
    <main>
      <header className="bg-white sticky top-0 ">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
             <Image src={cookbsc} width={50} className="rounded-[100%]" />
            </div>

            <div className="hidden sm:block">
              <h1>Welcome to the Cook Movement</h1>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-gray-900"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://t.me/cookonbsc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-gray-900"
              >
                <Send size={24} />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div>
        <section className="min-h-screen px-4 py-8">
          <div className="bg-yellow-300 border-[2px] border-black px-8 py-8 rounded-lg flex flex-col md:flex-row gap-8">
            <h1 className="flex flex-col">
              <span className="text-5xl md:text-8xl pb-4 font-bold">Ratatouille the Cooking Rat</span>
              <span>$COOK 👨‍🍳is a safe nanocap started with only 20$ mcap for provide at holders amazing gains, join in the
                next moonshoot in bsc🚀 Let&apos;s $COOK Together 👨‍🍳🔥</span>
              <div className="flex flex-row gap-8 mt-4">
                <Link href="#" className="bg-green-700 text-white rounded-md px-4 py-2 font-bold">Buy now</Link>
                <Link href="#" className="border-neutral-700 border-2 bg-neutral-900 text-white rounded-md px-4  py-2">Chart</Link>
              </div>
            </h1>
            <Image src={cookbsc} alt="cook bsc logo" width={300} className="rounded-lg" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 border-2 border-neutral-600 bg-neutral-900 rounded-lg">
            <div className="bg-[#fcc029] px-4 py-4 rounded-lg">
              <h1 className="text-2xl font-bold">About $COOK</h1>
              <p>Ratatouille ($COOK) is a community-driven BSC token launched at $20 mcap, featuring burned liquidity and anti-whale
                mechanics. We aim to create massive gains through strategic marketing and strong community growth.</p>
            </div>

            <div className="px-8 py-16 flex flex-col items-center">
              <h1 className="text-3xl pb-8 font-bold text-[#fcc029]">Our Partners</h1>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <a href="https://dexscreener.com/bsc/0x6183b70d5b0d81aa4163ff02d3aa451ec1c3d200"><Image src={dexscreener} alt="dexscreener" className="w-52 object-contain" /></a>
                <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0x6183b70d5b0d81aa4163ff02d3aa451ec1c3d200?t=1731351025635"><Image src={dextools} alt="dextools" className="w-52 object-contain" /></a>
                <a href="https://pancakeswap.finance/?outputCurrency=0xa2b1d88570949a761D640b7C1b08a17CBb8F823c"><Image src={pcsIcon} alt="dextools" className="w-52 object-contain" /></a>
                <a href="https://poocoin.app/tokens/0xa2b1d88570949a761d640b7c1b08a17cbb8f823c"><Image src={poocoin} alt="dextools" className="w-52 object-contain" /></a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-4">
            <div className="bg-[#fcc029] px-4 py-4 rounded-lg">
              <Shield className="w-12 h-12 text-black mb-4" />
              <h1 className="text-2xl font-bold">Safe Launch</h1>
              <p>Contract verified & renounced with burned liquidity</p>
            </div>

            <div className="bg-[#fcc029] px-4 py-4 rounded-lg">
              <Lock className="w-12 h-12 text-black mb-4" />
              <h1 className="text-2xl font-bold">Protected</h1>
              <p>1% max wallet to prevent whales</p>
            </div>

            <div className="bg-[#fcc029] px-4 py-4 rounded-lg">
              <Flame className="w-12 h-12 text-black mb-4" />
              <h1 className="text-2xl font-bold">Low tax</h1>
              <p>5-5 tax (1% Burn, 4% Marketing)</p>
            </div>
          </div>
        </section>

        <section className="px-8 md:px-16 py-8 bg-neutral-700">
          <h1 className="text-white text-2xl pb-8">Tokenomics</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-white bg-neutral-900 px-4 py-4 rounded-lg">
              <p className="pb-4">Total Supply</p>
              <p className="text-3xl font-bold text-[#fcc029]">1,000,000,000,000</p>
            </div>
            <div className="text-white bg-neutral-900 px-4 py-4 rounded-lg">
              <p className="pb-4">Initial Marketcap</p>
              <p className="text-3xl font-bold text-[#fcc029]">$100</p>
            </div>
          </div>
        </section>

        <BuyPage />
        
        <FAQ />

        <section className="px-8 py-16 ">
          <h1 className="text-3xl font-bold pb-4">Join the vision</h1>
          <p>
            Join our growing community as we cook up massive gains together. Real nanocap gem with huge X potential and strategic marketing plans.
          </p>
        </section>
      </div>
    </main>
  );
}
