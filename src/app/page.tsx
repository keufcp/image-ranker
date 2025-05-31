'use client'
import Link from 'next/link'
import { mockDataItems } from '@/mocks/list'

export default function Home() {
  return (
    <div className='mx-auto max-w-4xl p-6'>
      <h1 className='mb-4 text-center text-3xl font-bold text-gray-800'>
        ようこそ
      </h1>
      <p className='mb-6 text-center text-xl text-gray-600'>
        以下のボタンをクリックして回答を開始してください
      </p>

      <div className='mb-6 rounded-md bg-yellow-100 p-4'>
        <h2 className='text-xl font-semibold text-gray-800'>注意事項</h2>
        <ul className='mt-2 list-inside list-disc text-gray-700'>
          <li>PCのブラウザで表示することをおすすめします</li>
          <li>回答中にブラウザの戻るボタンは押さないでください</li>
          <li>回答中はブラウザのアドレスバーに触れないでください</li>
          <li>「次へ」ボタンを連打しないでください</li>
          <li>全部で{mockDataItems.length}セットの回答項目があります</li>
        </ul>
      </div>

      <div className='text-center'>
        <Link href='/ranking'>
          <button className='w-full rounded-md bg-green-500 py-4 text-3xl font-bold text-white shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-300 focus:outline-hidden'>
            回答を開始
          </button>
        </Link>
      </div>
    </div>
  )
}
