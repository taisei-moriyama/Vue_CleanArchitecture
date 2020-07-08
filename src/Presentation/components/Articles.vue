<template>
    <div>
        <h2>Articles</h2>
        <!-- https://getbootstrap.com/docs/4.5/components/pagination/ -->
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li v-bind:class="{disabled: !pagination.prev}" class="page-item">
              <a class="page-link" href="#" @click="fetchArticles(pagination.prev)">Previous</a>
            </li>
            <!-- {{this.pagination}} -->
            <li v-bind:class="{disabled: !pagination.next}" class="page-item">
              <a class="page-link" href="#" @click="fetchArticles(pagination.next)">Next</a>
            </li>
          </ul>
        </nav>
       <!-- bootstrapのcardでデザインを整えて、表示-->
        <div class="card card-body mb-2" v-for="article in articles" v-bind:key="article.id">
            <h3>{{article.title}}</h3>
            <!-- <h3>{{articles}}</h3> -->
            <p>{{article.body}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//store読み込み
import store from '../store';
import {ArticleUseCase} from '../../Domain/UseCases/Articles/ArticleUseCase'
 
@Component
export default class App extends Vue {
  
  //状態
  private articles = store.articles;
  private pagination = store.pagination;

  //private _articleUseCases =  new ArticleUseCase();

  //Vueインスタンスが作成完了直後に実行されるライフサイクルフックcreated()
  created(){
    // new ArticleUseCase().getArticles();
    //console.log(this._articleUseCases)
    //this._articleUseCases.getArticles();
    this.fetchArticles();
    // console.log(this.pagination)
  }

  fetchArticles(pageURL?: string){
    new ArticleUseCase().fecthArticlesFromAPI(pageURL);
    console.log(pageURL)
    // this._articleUseCases.getArticles(pageURL);
  }
}
</script>