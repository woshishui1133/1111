<template>
  <div id="head">
    <p class="head_screnum">分数：{{NaScore}}</p>
    <button class="head_button" @click="newgame()">开始游戏</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      NaScore: (state) => state.start.NaScore
    })
  },
  methods: {
    ...mapMutations('start', {
      newgame: 'newgame'
    })
  }
}
</script>

<style lang='scss' scoped>
#head {
  margin: 0 auto;
  width: 300px;
  height: 60px;
  // border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .head_screnum {
    font-weight: bold;
  }
  .head_button {
    width: 120px;
    height: 30px;

    color: white;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #c98150;
  }
  .head_button:hover {
    background: #874521;
  }
}
</style>