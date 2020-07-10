//import {Article} from '../../Domain/Models/Ariticles'
import { injectable} from "inversify";
import "reflect-metadata";

import {Articles, PaginationLinks, PaginationMetaInfo} from '../../Domain/UseCases/Articles/ArticlesOutputData'
import store from '../../Presentation/store'
import {IArticlesPresenter} from '../../Domain/UseCases/Articles/IArticlesPresenter'

@injectable()
export class ArticlesPresenter implements IArticlesPresenter{
    presentArticlesData(articles: Articles, paginationLinks: PaginationLinks, paginationMetaInfo: PaginationMetaInfo){
        store.setArticles(articles)
        //console.log(articlesOutputData.links);
        store.setPagination(paginationLinks, paginationMetaInfo)   
    }
}