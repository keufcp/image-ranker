"use client";
import Image from "next/image";
import Form from "next/form";
import { useState } from "react";
import { mockDataItems, mockDataPatterns, mockDataImgRanks } from "@/mocks/list";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import ProgressBar from "@/components/layout/ProgressBar";
import { waitForDebugger } from "inspector";

// 画像のファイルパスを生成
export function GetImagePath(ImgID: string, Pattern: string): string {
    return `/imgs/${ImgID}/${Pattern}`;
};

export default function FormHome() {
    // let ImgNumber = 0; //? テスト用
    // ImgNumberの状態を管理
    const [ImgNumber, setImgNumber] = useState(0);

    const incrementImgNumber = () => {
        setImgNumber(ImgNumber + 1); // 状態を更新
    };

    // 順位付けの状態管理
    const [selectedRanks, setSelectedRanks] = useState({
        A: null,
        B: null,
        C: null,
        D: null,
    });

    // 全体のデータ（初期値は空の配列）
    const [AllJson, setAllJson] = useState<Object[]>([]);

    // ラジオボタンの変更時の処理
    const handleChange = (imageKey: any, value: any) => {
        setSelectedRanks((prev) => ({
            ...prev,
            [imageKey]: value,
        }));
    };

    const saveToCsv = async () => {
        /* jasoDataの例
        [
            {
                "image_id": "hoge",
                "pattern": "A",
                "rank": "1"
            },
            {
                "image_id": "hoge",
                "pattern": "B",
                "rank": "2"
            },
            {
                "image_id": "hoge",
                "pattern": "C",
                "rank": "4"
            },
            {
                "image_id": "hoge",
                "pattern": "D",
                "rank": "3"
            }
        ]
        */
        try {
            const response = await fetch('/api/generateCsv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ records: AllJson })  // クライアントデータを送信
            });
        } catch (error) {
            alert(`Error: ${error}`);
        }
    };

    // 画像の表示順序を設定
    const [shuffledImages, setShuffledImages] = useState(mockDataPatterns);

    // 配列をランダムにシャッフルする関数
    const shuffleImages = () => {
        const shuffleArray = (array: string[]) => {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 配列の要素を入れ替え
            }
            return shuffled;
        };
        setShuffledImages(shuffleArray(shuffledImages));
    };

    // ページが読み込まれた時に画像をシャッフル
    useEffect(() => {
        shuffleImages();
    }, []);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // ラジオボタンが全て選択されているか確認
        const allSelected = Object.keys(selectedRanks).every(key => selectedRanks[key] !== undefined && selectedRanks[key] !== null);
        if (!allSelected) {
            alert("すべてのラジオボタンを選択してください。");
            return;
        }
        console.log(selectedRanks);
        const jsonData = Object.entries(selectedRanks).map(([key, value]) => ({
            image_id: mockDataItems[ImgNumber].Item.ImgID,
            pattern: key,
            rank: value,
        }));
        setAllJson(prevAllJson => [...prevAllJson, ...jsonData]);
        if (ImgNumber < mockDataItems.length - 1) {
            // selectedRanksをnullに設定 // ラジオボタンをリセット
            setSelectedRanks({ A: null, B: null, C: null, D: null });
            incrementImgNumber();
            shuffleImages(); // ランダムにシャッフル
        }
        else {
            redirect('/thanks');
        }
    };

    // AllJsonが更新された後に実行される処理
    useEffect(() => {
        console.log("AllJson updated:", AllJson);
        if (ImgNumber === mockDataItems.length - 1) {
            if (AllJson.length === mockDataItems.length * mockDataPatterns.length) { // データが全て揃ってから送信
            saveToCsv();
            }
        }
    }, [AllJson]); //? <- AllJsonが変更されたときに実行される

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 mt-4">
                審美的品質が高いと思う順に順位付けをしてください
            </h1>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <ProgressBar current={ImgNumber} total={mockDataItems.length} />
                    <div className="text-2xl font-bold text-center text-gray-600">
                        {ImgNumber * 100 / mockDataItems.length}%
                    </div>
                </div>
            </div>
            <Form action="" className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    {shuffledImages.map((imageKey) => (
                        <div key={imageKey} className="flex flex-col items-center">
                            <Image
                                src={GetImagePath(mockDataItems[ImgNumber].Item.ImgID, mockDataItems[ImgNumber].Item.Pattern[imageKey])}
                                width={300}
                                height={300}
                                alt=""
                                quality={100}
                            />
                            <div className="flex space-x-4 py-2">
                                {mockDataImgRanks.map((rank) => (
                                    <label key={rank} className="flex flex-col items-center text-black text-2xl">
                                        <input
                                            type="radio"
                                            name={imageKey}
                                            value={rank}
                                            checked={selectedRanks[imageKey] === String(rank)}
                                            onChange={(e) => handleChange(imageKey, e.target.value)}
                                            className="w-6 h-6"
                                        />
                                        {rank}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="w-full py-4 text-white text-2xl font-bold bg-green-500 hover:bg-green-600 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-300">次へ</button>
                </div>
            </Form>
        </div>

    );
}