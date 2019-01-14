<template>
<div>
  <p>argue</p>
  <!--{{$route.params.name}}-->
  <!--$route 当前页面加载的路由对象-->
{{name}}
</div>
</template>

<script>
export default {
  name: 'argu',
  props:{
    name:{
      type:String,
      default:'name'
    }
  }
}
</script>

<style scoped>

</style>
