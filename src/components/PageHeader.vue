<template>
  <el-header>
    <el-row :gutter="20">
      <el-col :span="16">
        <ul class="menu-horizontal">
          <li style="padding-left: 25px;">
            <el-image class="logo" :src="imgs.logo" fit="fit"></el-image>
          </li>
          <li class="app-name">博客园</li>
          <li class="menu-item">
            <router-link to="/blogs">首页</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/blogs">我的博客</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/blogs">IT热点</router-link>
          </li>
          <li class="search-item">
            <el-input
              placeholder="代码改变世界"
              suffix-icon="el-icon-search"
              clearable
              v-model="searchContent"
            />
          </li>
        </ul>
      </el-col>
      <el-col :span="8">
        <ul class="menu-horizontal text-right">
          <li class="menu-item">
            <el-button type="danger" round @click="writeBlog">
              <el-image class="csdn-write" :src="imgs.pencil" fit="cover" />
              新随笔
            </el-button>
          </li>
          <li class="menu-item">
            <el-badge :value="120" :max="99" style="cursor: pointer;">
              <i class="el-icon-message-solid big-icon" />
            </el-badge>
          </li>
          <li class="menu-item">
            <el-dropdown style="height: 52px;">
              <el-avatar
                :src="imgs.avatar"
                style="margin-top: 10px;"
              ></el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的关注</el-dropdown-item>
                <el-dropdown-item>我的收藏</el-dropdown-item>
                <el-dropdown-item divided>个人中心</el-dropdown-item>
                <el-dropdown-item>账号设置</el-dropdown-item>
                <el-dropdown-item divided>帮助</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      searchContent: '',
      imgs: {
        logo: require('@/assets/images/logo.png'),
        pencil: require('@/assets/images/icons/pencil.png'),
        avatar: require('@/assets/images/icons/avatar.jpg')
      }
    };
  }, // the end of data
  methods: {
    writeBlog() {
      this.$router.push('/blogs/write');
    }
  } // the end of methods
};
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: solid 1px #e6e6e6;
}
.logo {
  width: 32px;
  height: 32px;
  margin-top: 13px;
}
.app-name {
  font-size: 21px;
  color: rgb(67, 185, 131);
}
.menu-horizontal {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  &::after {
    clear: both;
  }
  > li {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    margin: 0;
    vertical-align: middle;
    white-space: nowrap;
  }
  .menu-item {
    padding: 0 25px;
    a {
      color: #333;
      text-decoration: none;
    }
  }
  .search-item {
    float: right;
    ::v-deep .el-input__inner {
      border-radius: 20px;
      padding-right: 56px;
    }
    ::v-deep .el-input__suffix i.el-input__icon {
      cursor: pointer;
    }
  }
}

.csdn-write {
  float: left;
  width: 16px;
  height: 13px;
  margin-right: 4px;
}
.big-icon {
  font-size: 26px;
  line-height: inherit;
}
::v-deep .el-badge__content.is-fixed {
  top: 14px;
}
</style>
