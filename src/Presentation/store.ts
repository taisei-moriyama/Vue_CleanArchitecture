import Vue from 'vue'
//import {Article} from '../Domain/Models/Ariticle'
import {Articles,PaginationLinks, PaginationMetaInfo} from '../Domain/UseCases/Articles/ArticlesOutputData'
//import {Pagination} from '../Domain/UseCases/Articles/ArticlesOutputData' 

//状態管理クラス
class Store{
    //クラスプロパティ_articlesはArticles（オブジェクト）型の配列
    private _articles: Articles =[];
    private _pagination = {};
    // private _isLoading = false;
    private _isLoading = [true];
    private _error: string[]= [];


    // Vue.Object.defineProperty(){

    // }
    // Vue.set()

    public get articles(){
        return this._articles;
    }

    public get pagination(){
        return this._pagination;
    }

    public get isLoading(){
        return this._isLoading;    
    }

    public get error(){
        return this._error;
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

    // public setIsLoading(){
    //     this._isLoading.splice(0, 1, !this._isLoading[0]);
    //     // console.log(this._isLoading[0])
    //     // this._isLoading = !this._isLoading
    //     // this._isLoading = true
    //     console.log(!this._isLoading[0])
    // }

    public setError(error: string){
        this._error.splice(0, 1, error);
        this._isLoading.splice(0, 1, !this._isLoading[0]);

        // setTimeout(() => {
        //     this._isLoading.splice(0, 1, !this._isLoading[0]);
        // }, 2000);
        // this.setIsLoading();
        
    }

}
 
//Vue.observable(): 引数に与えられたオブジェクトをリアクティブにする.
//※一度引数に渡したオブジェクトは書き換えられない
export default Vue.observable(new Store())