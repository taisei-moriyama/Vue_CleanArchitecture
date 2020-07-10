<template>
    <div>
       <Loading :active.sync="isLoading" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></Loading>

        <h2>Articles</h2>
        <!-- https://getbootstrap.com/docs/4.5/components/forms/ -->

        <!--@submit.prevent="addArticle" によってデフォルトの送信を止め、独自のメソッドで送信する  -->
        <form @submit.prevent="addArticle" class="mb-3"> 
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title" v-model="article.title">
          </div>
          <div class="form-group">
            <textarea type="text" class="form-control" placeholder="Body" v-model="article.body"></textarea>
          </div>
          <button type="submit" class="btn btn-light btn-block">Save</button>
        </form>

        <!-- https://getbootstrap.com/docs/4.5/components/pagination/ -->
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li v-bind:class="{disabled: !pagination.prev}" class="page-item">
              <a class="page-link" href="#" @click="fetchArticles(pagination.prev)">Previous</a>
            </li>
            <li class="page-item disabled"><a class="page-link" href="#">Page{{pagination.current_page}} of {{pagination.last_page}}</a></li>
            <!-- <li class="page-item">2</li> -->
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
            <hr>
            <!-- https://getbootstrap.com/docs/4.5/components/buttons/ -->
            <button @click="deleteArticle(article.id)" class="btn btn-danger">Delete</button>
        </div>
    </div>
</template>

<script lang="ts">
    // require('vue-loading-overlay')

    // declare module 'vue-loading-overlay'
    // require("Loading")
    // Import component
    import * as Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
import { Component, Vue } from 'vue-property-decorator';
//store読み込み
import store from '../store';
// import {ArticleUseCase} from '../../Domain/UseCases/Articles/ArticleUseCase'
import {container} from '@/DIContainer/DIContainer'
import { IArticleUseCases } from '../../Domain/UseCases/Articles/IArticleUseCases';
import {TYPES} from '@/DIContainer/types'
 
@Component({
  components:{
    Loading,
  },
})
export default class App extends Vue {
  
  //状態
  private articles = store.articles;
  private pagination = store.pagination;
  private article ={
    title: '',
    body: ''
  }
  private isLoading = true

  private usecases: IArticleUseCases = container.get<IArticleUseCases>(TYPES.ArticlesUsecases)


  //Vueインスタンスが作成完了直後に実行されるライフサイクルフックcreated()
  created(){
    this.fetchArticles();
    
  }

  fetchArticles(pageURL?: string){
    //const usecases = container.get<IArticleUseCases>(TYPES.ArticlesUsecases)
    this.usecases.fecthArticlesFromAPI(pageURL);
    // new ArticleUseCase().fecthArticlesFromAPI(pageURL);
  }

  deleteArticle(id: number){
    this.usecases.deleteArticle(id)
  }

  addArticle(){
    // const usecases = container.get<IArticleUseCases>(TYPES.ArticlesUsecases)
    this.usecases.addArticle(this.article)
  }

}
</script>