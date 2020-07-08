//import axios from 'axios';

//import store from '../../../Presentation/store';
import {Articles} from '../../Models/Ariticles'
import {Articles as ArticlesDS, PaginationLinks, PaginationMetaInfo} from './ArticlesOutputData'
import {ArticleInputData} from './ArticleInputData'
import {ArticlesAPI} from '../../../Infrastracture/Article/ArticlesAPI'
import {ArticlePresenter} from '../../../IOAdapters/Articles/Presenter'

export class ArticleUseCase{

    //コンストラクタで、このクラス全体で使用するArticlesAPIクラスをインスタンス化しておく
    private _articlesAPI: ArticlesAPI;
    private _articlesPresenter:  ArticlePresenter
    constructor(){
        this._articlesAPI = new ArticlesAPI();
        this._articlesPresenter = new ArticlePresenter();
    }

    async fecthArticlesFromAPI(pageURL?: string){ 
        //本当はインターフェースを呼び出すべき。
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
        }
    }

    async deleteArticle(id: number){
        // window.confirm():引数に渡した文言をダイアログボックスとして表示しｍokを押されたらtrueを返す 
        if(confirm("Are you sure")){
            // console.log(id);
            if(await this._articlesAPI.deleteArticles(id)){
                await this.fecthArticlesFromAPI()
                alert('Article Removed')
            }
        }
    }

    async addArticle(article: ArticleInputData){
        console.log(article)
        //オブジェクト型のarticleをjson(string型)に変換する。
        const articleJson = JSON.stringify(article)
        if(await this._articlesAPI.addarticle(articleJson)){
            await this.fecthArticlesFromAPI()
            alert('Article Added')
        }
        


    }
}
