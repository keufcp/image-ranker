const generateTimestamp = (): string => {
  const now = new Date()

  // 年、月、日、時、分、秒を取り出し、ゼロ埋め
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  // フォーマット: YYYY-MM-DD_HH-mm-ss
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`
}

// ファイル名衝突回避用のランダム文字列生成
function generateRandomString(length: number): string {
  const validChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = validChars.length
  for (let i = 0; i < length; i++) {
    result += validChars.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

// 結果保存用ファイル名を指定
export function getResultFilename(): string {
  return `public/result_${generateTimestamp()}_${generateRandomString(5)}.csv`
}
