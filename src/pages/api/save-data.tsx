"use client";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { result_file } from "../../app/page";

interface Result {
    image_id: string;
    pattern: string;
    rank: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const results: Result[] = req.body; // 型を明示的に定義
        const csvData = results.map((result) => `${result.image_id},${result.pattern},${result.rank}`).join("\n");
        const filePath = path.join(process.cwd(), "public", `${result_file}`);

        try {
            // 非同期の書き込み
            fs.promises.writeFile(filePath, csvData, "utf8");

            res.status(200).json({ message: "Results saved successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error saving the file" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
