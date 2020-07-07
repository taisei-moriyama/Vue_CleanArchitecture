//Articlesオブジェクトが保持するデータの型定義(CleanArchitectureだとPresenterの役割)
export interface Article{
    body: string;
    id: number;
    title: string;
}

// interface Articles[];