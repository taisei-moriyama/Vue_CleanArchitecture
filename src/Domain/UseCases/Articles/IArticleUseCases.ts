import {IArticlesAPI} from '../../Models/IArticlesAPI'
import {IArticlesPresenter} from './IArticlesPresenter'
import {ArticleInputData} from './ArticleInputData'

export interface IArticleUseCases{
    _articlesAPI: IArticlesAPI
    _articlesPresenter:  IArticlesPresenter

    fecthArticlesFromAPI(pageURL?: string): void
    deleteArticle(id: number): Promise<void>
    addArticle(article: ArticleInputData): Promise<void>
}