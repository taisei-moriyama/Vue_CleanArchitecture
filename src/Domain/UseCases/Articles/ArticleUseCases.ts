import { injectable, inject } from "inversify";
import "reflect-metadata";

// import {container} from '../../../DIContainer/DIContainer'
import {IArticlesAPI} from '../../Models/IArticlesAPI'
import {IArticlesPresenter} from './IArticlesPresenter'
import {IArticleUseCases} from './IArticleUseCases'
import {TYPES} from '../../../DIContainer/types'

import {Articles} from '../../Models/Ariticles'
import {Articles as ArticlesDS, PaginationLinks, PaginationMetaInfo} from './ArticlesOutputData'
import {ArticleInputData} from './ArticleInputData'
// import {ArticlesAPI} from '../../../Infrastracture/Article/ArticlesAPI'
// import {ArticlesPresenter} from '../../../IOAdapters/Articles/ArticlesPresenter'

@injectable()
export class ArticleUseCases implements IArticleUseCases{

    //コンストラクタで、このクラス全体で使用するArticlesAPIクラスをインスタンス化しておく
    @inject(TYPES.ArticlesAPI) _articlesAPI: IArticlesAPI;
    @inject(TYPES.ArticlesPresenter) _articlesPresenter:  IArticlesPresenter


    async fecthArticlesFromAPI(pageURL?: string): Promise<void>{ 
        //本当はインターフェースを呼び出すべき。
        console.log(this._articlesAPI);
        const result: Articles|null = await this._articlesAPI.fetchArticles(pageURL);

        if (result != null){
            // //※Clean Architectureに則るなら、Presenterの役割
            const articles: ArticlesDS = result.articles
            const paginationLinks: PaginationLinks = result.paginationLinks
            const paginationMetaInfo: PaginationMetaInfo = result.paginationMetaInfo        
            //※Clean Architectureに則るなら、IPresenterを呼び出すべき
            this._articlesPresenter.presentArticlesData(articles, paginationLinks, paginationMetaInfo)

        }else{
            //error handlingの記述
            this._articlesPresenter.notifiyError("cannot find arctiles")
        }
    }

    async deleteArticle(id: number): Promise<void>{
        // window.confirm():引数に渡した文言をダイアログボックスとして表示しｍokを押されたらtrueを返す 
        if(confirm("Are you sure")){
            // console.log(id);
            if(await this._articlesAPI.deleteArticles(id)){
                await this.fecthArticlesFromAPI()
                alert('Article Removed')
            }
        }
    }

    async addArticle(article: ArticleInputData): Promise<void>{
        console.log(article)
        //オブジェクト型のarticleをjson(string型)に変換する。
        const articleJson = JSON.stringify(article)
        if(await this._articlesAPI.addarticle(articleJson)){
            await this.fecthArticlesFromAPI()
            alert('Article Added')
        }
        


    }
}
