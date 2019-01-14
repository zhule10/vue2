<template>
  <div>
    <a-input v-model="valuez"></a-input>
    <a-show :content="valuez"></a-show>
    <p>{{valuez}}</p>
    <p>双子座：{{shuju1a}}·{{skill1}}</p>
    <p>处女座：{{shuju2a}}`{{skill2}}</p>
    <button @click="handlename">点我修改要用mutations</button>
    <p>{{shuju3a}}</p>
  </div>
</template>
<script>
import aInput from "_c/aInput";
import aShow from "_c/aShow";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {
    aInput,
    aShow
  },
  data() {
    return {
      valuez: ""
    };
  },
  computed: {
    // shuju1a: {
    //   set: function(newValue) {
    //     this.valuez = newValue + "sd";
    //   },
    //   get: function() {
    //     return this.valuez + "asdad";
    //   }
    // },
    // shuju2a() {
    //   return this.$store.state.user.shuju2;
    // }
    // skill1a() {
    //   return this.$store.getters.skill1;
    // },
    ...mapGetters(["skill1", "skill2"]),
    ...mapState({
      shuju1a: state => state.shuju1,
      shuju3a: state => state.shuju3,
      shuju2a: state => state.user.shuju2
    })
  },
  methods: {
    ...mapMutations(["SET_NAME", "SET_SHUJU2"]),
    ...mapActions(["adianna"]),
    handlename() {
      //  this.$store.commit('SET_NAME','加隆') 一种写法
      //对应mutations的
      //    SET_NAME(state, params) {
      //   state.shuju1 = params
      // }
      //第二种写法
      // this.$store.commit("SET_NAME", {
      //   shuju1: "加隆"
      // });
      //直接添加对象形式
      // this.$store.commit({
      //   type: "SET_NAME",
      //   xshuju1: "加隆"
      // });
      this.SET_NAME({
        xshuju1: "加隆"
      });
      this.SET_SHUJU2("阿释密达");
      this.adianna();
    }
  }
};
</script>
