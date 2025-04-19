"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
    const { publicKey, connected } = useWallet();

    return (
        <div className="w-full h-screen flex flex-col items-center justify-between bg-gray-900 text-gray-200">
            {/* Header */}
            <header className="w-full py-4 bg-gray-800 text-white text-center shadow-md">
                <h1 className="text-3xl font-bold">Solana Wallet Connect</h1>
                <p className="text-sm text-gray-400">Securely connect and interact with your Solana wallet</p>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center flex-grow gap-6">
                <WalletMultiButton className="!bg-indigo-600 !text-white !px-6 !py-2 !rounded-md !hover:bg-indigo-500 transition-all" />
                <div className="text-center mt-4">
                    {connected ? (
                        <p className="text-lg font-medium">
                            Connected to wallet: <span className="text-indigo-400">{publicKey?.toBase58()}</span>
                        </p>
                    ) : (
                        <p className="text-lg font-medium text-gray-400">Please connect your wallet to get started</p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-4 bg-gray-800 text-gray-400 text-center">
                <p className="text-sm">
                    Built with ❤️ by <a href="https://www.linkedin.com/in/ashutosh-tech/" className="underline hover:text-indigo-400">Ashutosh</a>
                </p>
            </footer>
        </div>
    );
}
