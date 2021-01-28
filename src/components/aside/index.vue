<template>
  <div class="aside-container" :class="isCollapse?'aside-collapse-width':'aside-width'">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :class="isCollapse?'aside-collapse-width':'aside-width'"
      :collapse-transition="false"
      :unique-opened="true"
      :collapse="isCollapse"
      background-color="#4b5f6e"
      text-color="#fff"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group v-for="(item,index) in oRouter" :key="index">
          <el-menu-item :index="item.index" @click="handleRoute(item)">{{item.name}}</el-menu-item>
          <!-- <el-menu-item index="1-2" @click="$router.push({path:'/cai'})">菜单管理</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      oRouter: [{
        name: "用户管理",
        title: "用户管理",
        path: "/username"
      }, {
        name: "菜单管理",
        title: "菜单管理",
        path: "/cai"
      }, {
        name: "游戏2048",
        title: "游戏2048",
        path: "/name2048"
      }, {
        name: "CSS3动画",
        title: "CSS3动画",
        path: "/iscss3"
      }, {
        name: "贪吃蛇",
        title: "贪吃蛇",
        path: "/snake"
      }]

    }
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.app.isCollapse
    }),
    mainTabs: {
      get() {
        return this.$store.state.app.mainTabs
      },
      set(val) {
        this.$store.commit('updateMainTabs', val)
      }
    },
    mainTabsActiveName: {
      get() {
        return this.$store.state.app.mainTabsActiveName
      },
      set(val) {
        this.$store.commit('updateMainTabsActiveName', val)
      }

    }

  },
  wacth: {
    $route: 'hardleRoute'
  },
  created() {
    console.log(this.$route)
    this.handleRoute(this.$route)
  },
  components: {

  },
  methods: {
    handleRoute(route) {
      let tab = this.mainTabs.filter((item) => item.name === route.name)[0]
      console.log(tab, route)
      if (!tab) {
        tab = {
          name: route.name,
          title: route.name,
          // icon: route.meta.icon
          icon: route.name
        }
        this.mainTabs = this.mainTabs.concat(tab)
      }
      this.mainTabsActiveName = tab.name
      console.log(this.mainTabs)
      this.$router.push({ name: route.name })
    },
    getRefreshto(item) {
      this.handleRoute(this.$route);

      this.$router.push({ path: item.path })
    }

  }
}
</script>

<style lang='scss' scoped>
.aside-container {
  width: 230px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  // z-index: 1200;
  .el-menu {
    position: absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }
}
.aside-width {
  width: 230px;
}
.aside-collapse-width {
  width: 65px;
}
</style>