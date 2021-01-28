<template>
  <div class="logo" :class="isCollapse?'logo-collapse-width':'logo-width'">
    <img v-if="isCollapse" src="@/assets/image/logo2.jpg" alt />
    <img v-else src="@/assets/image/logo.jpg" alt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.app.isCollapse
    })
  }
}
</script>

<style lang='scss' scoped>
.logo {
  width: 230px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
}
.logo-width {
  width: 230px;
}
.logo-collapse-width {
  width: 65px;
}
</style>