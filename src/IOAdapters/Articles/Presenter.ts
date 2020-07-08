//import {Article} from '../../Domain/Models/Ariticles'
import {Articles, PaginationLinks} from '../../Domain/UseCases/Articles/ArticlesOutputData'
import store from '../../Presentation/store'

export class ArticlePresenter{
    presentArticlesData(articles: Articles, paginationLinks: PaginationLinks){
        store.setArticles(articles)
        //console.log(articlesOutputData.links);
        store.setPagination(paginationLinks)   
    }
}