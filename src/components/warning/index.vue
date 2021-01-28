<template>
  <div id="warBackground" v-show="boStop" @click="moveStart()">
    <div class="war_com">
      <p class="war_text">游戏结束</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boStop: {
      type: Boolean
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    
  },
  methods: {
    moveStart() {
      this.$emit("isStart");
    }
  },

}
</script>

<style lang="scss" scoped>
#warBackground {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 250, 232, 0.5);
}
.war_com {
  margin: 180px auto;
  width: 300px;
  height: 300px;
  text-align: center;
  line-height: 300px;
  border-radius: 8px;
  background-image: url("../../assets/image/stop.jpg");
  background-size: 100% 100%;

  .war_text {
    font-size: 40px;
    font-weight: bold;
    color: red;
  }
}
</style>