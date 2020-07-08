import axios from 'axios';

import {Articles} from '../../Domain/Models/Ariticles'
// import {ArticlesOutputData} from '../../Domain/UseCases/Articles/ArticlesOutputData'


export class ArticlesAPI{
    //async functionの戻り値の型定義の仕方：Promise<約束が成功したときの型|失敗したときの型>
    // 
    async fetchArticles(pageURL?: string): Promise<Articles | null>{  
        try{
            //ページネーション実装（次のページ情報page_urlがあれば、そのページ情報のURLへとリクエストをだす）
            const url = pageURL || 'http://127.0.0.1:8000/api/articles';
            const res = await axios.get(url);
            const articles = new Articles(res.data)
            return articles;
        }catch(error){
            console.log(error)
            return null;
        }
    }

    async deleteArticles(id: number){
        try{
            const url = 'http://127.0.0.1:8000/api/article/'+id
            // console.log(url) 
            await axios.delete(url)
            return true;
        }catch(error){
            console.log(error)
            return false;           
        }
    }

    async addarticle(article: string){
        try{
            const config = {
                headers: {
                    'content-type': 'application/json'
                }
            }
    
            // カスタムヘッダーを付与して、POST
            await axios.post('http://127.0.0.1:8000/api/article', article, config) 
            return true;        
        }catch(error){
            console.log(error)
            return false;
        }
    }
}