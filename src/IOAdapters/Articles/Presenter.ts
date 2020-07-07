//import {Article} from '../../Domain/Models/Ariticles'
import {ArticlesOutputData} from '../../Domain/UseCases/Articles/ArticlesOutputData'
import store from '../../Presentation/store'

export class ArticlePresenter{
    presentArticlesData(articlesOutputData: ArticlesOutputData){
        store.setArticlesInfo(articlesOutputData)
        //console.log(articlesOutputData.links);
        
    }
}