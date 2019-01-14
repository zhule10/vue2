<template>
<div>
  <p>这是邮件</p>
  <p>{{foods}}</p>
</div>
</template>

<script>
export default {
  name: 'email',
  props: {
    foods: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
