import Vue from 'vue'
import {Article} from '../Domain/Models/Ariticle'
import {ArticlesOutputData} from '../Domain/UseCases/Articles/ArticlesOutputData'
//import {Pagination} from '../Domain/UseCases/Articles/ArticlesOutputData' 

//状態管理クラス
class Store{
    //クラスプロパティ_articlesはArticles（オブジェクト）型の配列
    private _articles: Article[] =[];
    private _pagination = {};
    // private _pagination :Pagination = {links:{
    //     first:'',
    //     last: '',
    //     prev: '',
    //     next: '',
    // }};

    public get articles(){
        return this._articles;
    }

    public get pagination(){
        return this._pagination
    }
    
    public setArticlesInfo(articlesInfo: ArticlesOutputData){
        // this._articles.push(...articlesInfo.articles);
        const articles = articlesInfo.articles 
        //
        for(let i=0; i<articles.length; i++){
            this._articles.splice(i, 1 ,articles[i])
        }   

        //オブジェクトをリアクティブに変更する
        Object.assign(this._pagination, articlesInfo.links)
        //console.log(this._pagination)
    }

}
 
//Vue.observable(): 引数に与えられたオブジェクトをリアクティブにする.
//※一度引数に渡したオブジェクトは書き換えられない
export default Vue.observable(new Store());