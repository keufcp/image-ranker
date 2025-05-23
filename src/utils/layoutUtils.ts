// mockDataPatterns.length の値に基づいて grid-cols-* クラス名を返すヘルパー関数
export const getGridColsClass = (length: number): string => {
  if (length === 0) {
    return 'grid-cols-1'
  } else if (length === 1) {
    return 'grid-cols-1'
  } else if (length === 2) {
    return 'grid-cols-2'
  } else if (length === 3) {
    return 'grid-cols-3'
  } else if (length === 4) {
    return 'grid-cols-2' // 4 の場合は grid-cols-2
  } else if (length === 5) {
    return 'grid-cols-3'
  } else if (length === 6) {
    return 'grid-cols-3'
  } else {
    // 7以上の場合
    return 'grid-cols-3'
  }
}
