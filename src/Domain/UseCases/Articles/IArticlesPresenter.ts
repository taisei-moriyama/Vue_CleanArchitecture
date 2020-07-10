import {Articles, PaginationLinks, PaginationMetaInfo} from '../../../Domain/UseCases/Articles/ArticlesOutputData'

export interface IArticlesPresenter{
    presentArticlesData(articles: Articles, paginationLinks: PaginationLinks, paginationMetaInfo: PaginationMetaInfo): void;
}