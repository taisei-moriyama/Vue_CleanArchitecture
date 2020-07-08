//ここをみれば、出力データがどういったデータなのかデータ構造（＝型）がわかる
interface Article{
    body: string;
    id: number;
    title: string;
}

export type Articles = Article[]

export interface PaginationLinks{
    first: string|null;
    last: string|null;
    prev: string|null;
    next: string|null;    
}

export interface PaginationMetaInfo{
    current_page: number,
    last_page: number
}


// {
//     "data": [
//         {
//             "id": 31,
//             "title": "Test Title",
//             "body": "Test Body"
//         },
// （～略～）
//         }
//     ],
//     "links": {
//         "first": "http://127.0.0.1:8000/api/articles?page=1",
//         "last": "http://127.0.0.1:8000/api/articles?page=6",
//         "prev": null,
//         "next": "http://127.0.0.1:8000/api/articles?page=2"
//     },
