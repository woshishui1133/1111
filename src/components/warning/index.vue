<template>
  <div id="warBackground" v-show="EndBoStop" @click="moveStart()">
    <div class="war_com">
      <!-- <p class="war_text">游戏结束</p> -->
      <img :src="image[index]" alt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

  data() {
    return {
      image: [
        require('../../assets/image/end.jpg'),
        require('../../assets/image/end2.jpg'),
        require('../../assets/image/end3.jpg'),
        require('../../assets/image/end4.jpg'),
        require('../../assets/image/end5.jpg'),
        require('../../assets/image/end6.jpg'),
        require('../../assets/image/end7.jpg'),
        require('../../assets/image/end8.jpg'),
        require('../../assets/image/end9.jpg'),
      ],
      index: null,
    }
  },
  computed: {
    ...mapState('end', {
      EndBoStop: "boStop"
    })

  },
  created() {

  },
  mounted() {
    let _this = this;
    _this.index = parseInt(Math.random() * 8);
    console.log(_this.index);

  },
  methods: {
    // ...mapMutations(
    //   'end', { moveStart: 'moveStart' },
    //   'start', { moveStart: 'Bonewgame' }),
    moveStart() {
      this.$store.commit("end/moveStart");
      this.$store.commit("start/Bonewgame");

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

  img {
    width: 300px;
    height: 300px;
  }
}
</style>