import { NextRequest, NextResponse } from 'next/server'
import { createObjectCsvWriter } from 'csv-writer'
import { getResultFilename } from '@/components/mkResultFile'

export async function POST(request: NextRequest) {
  try {
    const { records } = await request.json() // クライアントから送られてきたデータを取得

    const csvWriter = createObjectCsvWriter({
      path: `${getResultFilename()}`,
      header: [
        { id: 'image_id', title: 'image_id' },
        { id: 'pattern', title: 'pattern' },
        { id: 'rank', title: 'rank' },
      ],
      append: true,
    })

    await csvWriter
      .writeRecords(records)
      .then(() => console.log('A CSV file has been created.'))
      .catch((error) =>
        console.error('An error occurred while creating the CSV file:', error),
      )

    return NextResponse.json({ message: 'CSV file generated successfully' })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error generating CSV file', error },
      { status: 500 },
    )
  }
}
