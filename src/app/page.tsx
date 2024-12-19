"use client";
import Link from "next/link";
import { mockDataItems } from "@/mocks/list";

export default function Home() {
	return (
		<div className="max-w-4xl mx-auto p-6">
			<h1 className="text-3xl font-bold text-center text-gray-800 mb-4">ようこそ</h1>
			<p className="text-xl text-gray-600 mb-6 text-center">以下のボタンをクリックして回答を開始してください</p>

			<div className="bg-yellow-100 p-4 rounded-md mb-6">
				<h2 className="text-xl font-semibold text-gray-800">注意事項</h2>
				<ul className="list-inside list-disc text-gray-700 mt-2">
					<li>PCのブラウザで表示することをおすすめします</li>
					<li>回答中にブラウザの戻るボタンは押さないでください</li>
					<li>回答中はブラウザのアドレスバーに触れないでください</li>
					<li>「次へ」ボタンを連打しないでください</li>
					<li>全部で{mockDataItems.length}セットの回答項目があります</li>
				</ul>
			</div>

			<div className="text-center">
				<Link href="/ranking">
					<button className="w-full py-4 text-white text-3xl font-bold bg-green-500 hover:bg-green-600 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-300">
						回答を開始
					</button>
				</Link>
			</div>
		</div>

	);
}