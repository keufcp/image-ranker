export const mockDataPatterns = ['A', 'B', 'C', 'D']; // パターンのリスト
export const mockDataImgRanks = [1, 2, 3, 4]; // 順位を表すリスト

// 型定義
type ItemType = {
    ImgID: string;
    Pattern: Record<string, string>;  // ここで動的なキーを指定
};

// 画像の全パターンを列挙
// ファイルパスで自動化しないのはIDとパターンを正確に対応させるため
// ファイル名がバラバラでも対応可能 (全部書き換えるのは面倒だが...)
export const mockDataItems: Array<{ Item: ItemType }> = [
    {
        Item: {
            ImgID: "hoge",
            Pattern: {
                A: "a.png",
                B: "b.png",
                C: "c.png",
                D: "d.png",
            },
        },
    },
    {
        Item: {
            ImgID: "fuga",
            Pattern: {
                A: "a.png",
                B: "b.png",
                C: "c.png",
                D: "d.png",
            },
        },
    },
];