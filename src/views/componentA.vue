<template>
    <div >
      <ul>
        <li style="width: 320px"><img :src="img01"></li>
        <li style="width: 580px;background: blanchedalmond"><img :src="img01"></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'componentA',
  data () {
    return {
      img01: require('@/assets/img/middle_left.jpg')
    }
  }
}
</script>

<style scoped>

ul{
  width: 900px;
  list-style-type: none;
margin: 5px auto;
  background: crimson;display: flex;
}

</style>
