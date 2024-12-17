export const mockDataPatterns = ['A', 'B', 'C', 'D']; // パターンのリスト

// 画像の全パターンを列挙
// ファイルパスで自動化しないのはIDとパターンを正確に対応させるため
// ファイル名がバラバラでも対応可能 (全部書き換えるのは面倒だが...)
export const mockDataItems = [
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