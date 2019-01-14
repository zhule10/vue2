<template>
    <div style="margin: 0px">
      <component-a></component-a>
      <div>
        <ul>
          <li style="width: 320px">
           </li>
          <li style="width:  580px">这是文章内容</li>
        </ul>
      </div>
    </div>
</template>

<script>
import ComponentA from './componentA'
// import swiperA from '_c/swiper'
export default {
  name: 'intro',
  data () {
    return {

    }
  },
  components: { ComponentA }
}
</script>

<style scoped>
  ul{
    width: 900px;
    list-style-type: none;
    margin: 5px auto;
    display: flex;
  }

</style>
