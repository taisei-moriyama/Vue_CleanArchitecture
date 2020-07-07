import axios from 'axios';

//import {Article} from '../../Domain/Models/Ariticle'
import {ArticlesOutputData} from '../../Domain/UseCases/Articles/ArticlesOutputData'

export class ArticlesAPI{
    //async functionの戻り値の型定義の仕方：Promise<約束が成功したときの型|失敗したときの型>
    // 
    async fetchArticles(pageURL?: string): Promise<ArticlesOutputData | null>{  
        try{
            //ページネーション実装（次のページ情報page_urlがあれば、そのページ情報のURLへとリクエストをだす）
            const url = pageURL || 'http://127.0.0.1:8000/api/articles';
            const res = await axios.get(url);
            //console.log(url)
            //console.log(res.data);
            //Articlesオブジェクトの配列articles
            // const articles: Promise<Article[]> = res.data.data
            const articles = new ArticlesOutputData(res.data)
            //console.log(articles)
            return articles;
            // return res.data.data
        }catch(error){
            console.log(error)
            return null;
        }
    }
}