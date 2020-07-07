<template>
  <div id="app">
    <Navbar/>
    <Articles/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Articles from './components/Articles.vue';
import Navbar from './components/Navbar.vue';

//使用するコンポーネントを明記
@Component({
  components:{
    Articles,
    Navbar
  },
})
//Appクラスとしてエクスポート
export default class App extends Vue {}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
