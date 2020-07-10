import {Articles} from './Ariticles'

export interface IArticlesAPI{
    fetchArticles(pageURL?: string): Promise<Articles | null>;
    deleteArticles(id: number): Promise<boolean>;
    addarticle(article: string): Promise<boolean>;
}