import {Article} from '../../Models/Ariticle'
//ここをみればどういったデータなのかがわかる
// export interface ArticlesOutputData{
//     data: Article[],
//     links: {
//         first: string|null,
//         last: string|null,
//         prev: string|null,
//         next: string|null,
//     }
// }
// export interface Pagination{
//     links: {
//         first: string|null,
//         last: string|null,
//         prev: string|null,
//         next: string|null,
//     }
// }

// export interface ArticlesOutputData{
//     data: Article[],
//     links: {
//         first: string|null,
//         last: string|null,
//         prev: string|null,
//         next: string|null,
//     }
// }

export interface ArticlesInfo{
    data: Article[];
    links: {
        first: string|null;
        last: string|null;
        prev: string|null;
        next: string|null;
    };
}



export class ArticlesOutputData{
    constructor(private _articlesInfo: ArticlesInfo){}

    get articles(){
        return this._articlesInfo.data
    }

    get links(){
        return this._articlesInfo.links
    }
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
