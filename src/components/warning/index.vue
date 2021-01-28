<template>
  <div id="warBackground" v-show="EndBoStop" @click="moveStart()">
    <div class="war_com">
      <!-- <p class="war_text">游戏结束</p> -->
      <img :src="require('../../assets/image'+image[1])" alt />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {

  data() {
    return {
      image: [
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
        '/image4.jpg',
        '/image5.jpg',
        '/image6.jpg',
        '/image7.jpg',
      ]
    }
  },
  computed: {
    ...mapState('end', {
      EndBoStop: "boStop"
    })

  },
  mounted() { console.log(this.image[2]) },
  methods: {
    ...mapMutations('end', { moveStart: 'moveStart' })
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

  .war_text {
    font-size: 40px;
    font-weight: bold;
    color: red;
  }
}
</style>