<template>
  <div id="app">

    <div id="nav">
      <router-link v-for="hedata in headerdata" :to="{name:hedata.id}" :key="hedata.id">{{hedata.content}}</router-link>
    </div>
<router-view></router-view>

  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {

      headerdata: [
        { content: '公司概况', id: 'intro' },
        { content: '产品简介', id: 'chanpin' },
        { content: '新闻动态', id: 'news' },
        { content: '在线留言', id: 'line' },
        { content: '联系我们', id: 'cont' }
      ]
    }
  }
}
</script>
<style lang="less">
  body{
    margin: 0px;
    padding: 0px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background: aqua;
  padding: 30px ;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #fff;
    }
    text-decoration:none;
    padding: 10px ;
  }
}
</style>
