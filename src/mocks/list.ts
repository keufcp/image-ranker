export const mockDataPatterns = ['A', 'B', 'C', 'D'] as const // パターンのリスト
export const mockDataImgRanks = [1, 2, 3, 4] as const // 順位を表すリスト

// 型定義
export type PatternKey = (typeof mockDataPatterns)[number]
export type RankValue = (typeof mockDataImgRanks)[number]

type ItemType = {
  ImgID: string
  Pattern: Record<PatternKey, string> // ここで動的なキーを指定
}

// 画像の全パターンを列挙
// ファイルパスで自動化しないのはIDとパターンを正確に対応させるため
// ファイル名がバラバラでも対応可能 (全部書き換えるのは面倒だが...)
export const mockDataItems: Array<{ Item: ItemType }> = [
  {
    Item: {
      ImgID: 'a2532',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a2552',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a2557',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a2584',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a2586',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a2671',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a2683',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a2800',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a4660',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a4685',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
  {
    Item: {
      ImgID: 'a4691',
      Pattern: {
        A: 'a.png',
        B: 'b.png',
        C: 'c.png',
        D: 'd.png',
      },
    },
  },
]
