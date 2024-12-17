import { NextApiRequest, NextApiResponse } from "next";
import { result_file } from "../../app/page";


import { createObjectCsvWriter } from 'csv-writer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { records } = req.body;  // クライアントから送られてきたデータを取得

        const csvWriter = createObjectCsvWriter({
            path: `${result_file}`,
            header: [
                { id: 'image_id', title: 'image_id' },
                { id: 'pattern', title: 'pattern' },
                { id: 'rank', title: 'rank' },
            ],
            append: true,
        });;

        try {
            await csvWriter.writeRecords(records)
                .then(() => console.log('CSVファイルが作成されました。'))
                .catch((error) => console.error('CSVファイルの作成中にエラーが発生しました:', error));
            res.status(200).json({ message: 'CSV file generated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error generating CSV file', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
