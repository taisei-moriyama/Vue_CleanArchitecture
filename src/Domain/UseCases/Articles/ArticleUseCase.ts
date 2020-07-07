//import axios from 'axios';

//import store from '../../../Presentation/store';
//import {Article} from '../../Models/Ariticles'
import {ArticlesOutputData} from './ArticlesOutputData'
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

    async getArticles(pageURL?: string){ 
        //データの初期化
        // let articlesOutputData: ArticlesOutputData
        //  = {data:[],
        //     links:{
        //         first:'',
        //         last: '',
        //         prev: '',
        //         next: '',
        //     }};
        //本当はインターフェースを呼び出すべき。
        const result: ArticlesOutputData|null = await this._articlesAPI.fetchArticles(pageURL);

        if (result != null){
            // //※Clean Architectureに則るなら、Presenterの役割
            const articlesOutputData = result
            //※Clean Architectureに則るなら、IPresenterを呼び出すべき
            this._articlesPresenter.presentArticlesData(articlesOutputData)

        }else{
            //error handlingの記述
        }
    }
}
