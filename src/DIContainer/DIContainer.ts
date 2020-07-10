import { Container, ContainerModule, interfaces } from "inversify";
import { TYPES } from "./types";
import {IArticlesPresenter} from '../Domain/UseCases/Articles/IArticlesPresenter'
import {IArticlesAPI} from '../Domain/Models/IArticlesAPI'
import { ArticlesPresenter } from '@/IOAdapters/Articles/ArticlesPresenter';
import { ArticlesAPI } from '@/Infrastracture/Article/ArticlesAPI';
import {IArticleUseCases} from '@/Domain/UseCases/Articles/IArticleUseCases'
import {ArticleUseCases} from '@/Domain/UseCases/Articles/ArticleUseCases'

const container = new Container();
// コンテナにクラスをバインド。.bind<...>(...).to(...)
// container.bind<"取得する時の型（＝インターフェース）">("識別子").to("登録対象クラス（＝実装クラス）")
container.bind<IArticlesPresenter>(TYPES.ArticlesPresenter).to(ArticlesPresenter);
container.bind<IArticlesAPI>(TYPES.ArticlesAPI).to(ArticlesAPI);
container.bind<IArticleUseCases>(TYPES.ArticlesUsecases).to(ArticleUseCases);

export { container };

