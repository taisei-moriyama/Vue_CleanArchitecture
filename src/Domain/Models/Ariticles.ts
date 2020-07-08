//Articlesオブジェクトが保持するデータの型定義(CleanArchitectureだとPresenterの役割)

interface Article{
    body: string;
    id: number;
    title: string;
}


interface ArticlesInfo{
    data: Article[];
    links: {
        first: string|null;
        last: string|null;
        prev: string|null;
        next: string|null;
    };
}

export class Articles{
    constructor(private _articlesInfo: ArticlesInfo){}

    get articles(){
        return this._articlesInfo.data
    }

    get paginationLinks(){
        return this._articlesInfo.links
    }
}

// interface Articles[];