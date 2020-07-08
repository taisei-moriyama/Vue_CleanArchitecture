//import axios from 'axios';

//import store from '../../../Presentation/store';
import {Articles} from '../../Models/Ariticles'
import {Articles as ArticlesDS, PaginationLinks} from './ArticlesOutputData'
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
            //※Clean Architectureに則るなら、IPresenterを呼び出すべき
            this._articlesPresenter.presentArticlesData(articles, paginationLinks)

        }else{
            //error handlingの記述
        }
    }
}
