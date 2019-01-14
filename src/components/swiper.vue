<template>
<div>
  <p>asd</p>
  <swiper :options="swiperOption">
   <swiper-slide><img src="@/assets/img/logo.png"></swiper-slide>
    <swiper-slide><img src="@/assets/img/logo.png"></swiper-slide>
</swiper>
</div>
</template>

<script>

export default {
  name: 'swiper',
  data () {
    return {
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数一样
        //
      }
    }
  }

}
</script>

<style scoped>

</style>
