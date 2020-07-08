import Vue from 'vue'
//import {Article} from '../Domain/Models/Ariticle'
import {Articles,PaginationLinks, PaginationMetaInfo} from '../Domain/UseCases/Articles/ArticlesOutputData'
//import {Pagination} from '../Domain/UseCases/Articles/ArticlesOutputData' 

//状態管理クラス
class Store{
    //クラスプロパティ_articlesはArticles（オブジェクト）型の配列
    private _articles: Articles =[];
    private _pagination = {};

    public get articles(){
        return this._articles;
    }

    public get pagination(){
        return this._pagination
    }


    public setArticles(articles: Articles){
        for(let i=0; i<articles.length; i++){
            this._articles.splice(i, 1 ,articles[i])
        }   
    }

    public setPagination(paginationLinks: PaginationLinks, paginationMetaInfo: PaginationMetaInfo){
        Object.assign(this._pagination, paginationLinks, paginationMetaInfo)
        // console.log(this._pagination)
    }

}
 
//Vue.observable(): 引数に与えられたオブジェクトをリアクティブにする.
//※一度引数に渡したオブジェクトは書き換えられない
export default Vue.observable(new Store());