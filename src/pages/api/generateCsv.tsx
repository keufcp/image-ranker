import { NextApiRequest, NextApiResponse } from "next";
import { createObjectCsvWriter } from 'csv-writer';
import { getResultFilename } from "@/components/mkResultFile";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { records } = req.body;  // クライアントから送られてきたデータを取得

        const csvWriter = createObjectCsvWriter({
            path: `${getResultFilename()}`,
            header: [
                { id: 'image_id', title: 'image_id' },
                { id: 'pattern', title: 'pattern' },
                { id: 'rank', title: 'rank' },
            ],
            append: true,
        });;

        try {
            await csvWriter.writeRecords(records)
                .then(() => console.log('A CSV file has been created.'))
                .catch((error) => console.error('An error occurred while creating the CSV file:', error));
            res.status(200).json({ message: 'CSV file generated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error generating CSV file', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
