<template>
  <div>
    <Lheader></Lheader>
    <Laside></Laside>
    <Lmain></Lmain>
  </div>
</template>

<script>

import Lheader from '../components/header'
import Laside from '../components/aside'
import Lmain from '../components/main'
export default {
  name: 'Home',
  components: {
    Lheader,
    Laside,
    Lmain
  },
  data() {
    return {
      isCollapse: true
    };
  },

  methods: {


  }
}
</script>
<style lang="scss" scoped>
</style>
