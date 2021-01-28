<template>
  <div class="header">
    <logo></logo>

    <hamburget></hamburget>

    <div class="headNavBar">
      <el-menu
        default-active="1"
        class="el-menu-demo"
        background-color="#4b5f6e"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
      >
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">使用文档</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">Dithub</span>
        </el-menu-item>
        <el-menu-item class="headNavBar-right">
          <i class="el-icon-full-screen" @click="toggleFull()"></i>
        </el-menu-item>
        <el-menu-item class="headNavBar-right">
          <el-dropdown class="userinfo">
            <span class="el-dropdown-link userinfo-inner">
              admin
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/">
                  <i class="el-icon-s-home"></i>
                  首页
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/">
                  <i class="el-icon-s-custom"></i>
                  我的主页
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <a @click="loginOut()">
                  <i class="el-icon-switch-button"></i>登出
                </a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>

import screenfull from 'screenfull'
import logo from './logo'
import hamburget from './hamburger'

export default {
  name: 'Home',
  components: {
    logo,
    hamburget
  },
  data() {
    return {
      isCollapse: true
    };
  },


  methods: {

    loginOut() {
      this.$confirm('是否确定退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
        this.$router.push('/');
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        });

      });
    },
    toggleFull() {
      if (!screenfull.isEnabled) {
        this.$message({
          type: 'warning',
          message: 'you browser can work'
        })
        return false
      }
      screenfull.toggle();
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: #4b5f6e;
  display: flex;

  .userinfo {
    color: #fff;
  }
}
</style>
