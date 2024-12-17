import Link from "next/link";
import { mockDataItems } from "@/mocks/list";

const generateTimestamp = (): string => {
	const now = new Date();

	// 年、月、日、時、分、秒を取り出し、ゼロ埋め
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');

	// フォーマット: YYYY-MM-DD_HH-mm-ss
	return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
};

// ファイル名衝突回避用のランダム文字列生成
export function generateRandomString(length: number): string {
	const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	const charactersLength = validChars.length;
	for (let i = 0; i < length; i++) {
		result += validChars.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

// 結果保存用ファイル名を指定
export const result_file: string = `public/result_${generateTimestamp()}_${generateRandomString(5)}.csv`;
console.log(result_file);

export default function Home() {
	return (
		<div className="max-w-4xl mx-auto p-6">
			<h1 className="text-3xl font-bold text-center text-gray-800 mb-4">ようこそ</h1>
			<p className="text-xl text-gray-600 mb-6 text-center">以下のボタンをクリックして回答を開始してください</p>

			<div className="bg-yellow-100 p-4 rounded-md mb-6">
				<h2 className="text-xl font-semibold text-gray-800">注意事項</h2>
				<ul className="list-inside list-disc text-gray-700 mt-2">
					<li>パソコンのブラウザで表示することをおすすめします</li>
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