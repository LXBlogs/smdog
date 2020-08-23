<template>
  <header class="page-header">
    <el-row>
      <el-col :span="12">
        <ul class="menu-horizontal">
          <li>SmGog</li>
          <li class="menu-item">
            <router-link to="/home">首页</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/home">我的博客</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/home">IT热点</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <ul class="menu-horizontal">
          <li>
            <el-input
              placeholder="代码改变世界"
              suffix-icon="el-icon-search"
              clearable
              v-model="searchContent"
            />
          </li>
          <li class="menu-item">
            <el-button type="danger" round>
              <el-image class="csdn-write" :src="imgs.pencil" fit="cover" />
              新随笔
            </el-button>
          </li>
          <li class="menu-item">
            <el-tooltip effect="dark" content="收藏" placement="bottom">
              <router-link to="/home">
                <i class="el-icon-star-off big-icon" />
              </router-link>
            </el-tooltip>
          </li>
          <li class="menu-item">
            <el-badge :value="120" :max="99">
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
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchContent: '',
      imgs: {
        pencil: require('@/assets/images/icons/pencil.png'),
        avatar: require('@/assets/images/icons/avatar.jpg')
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 60px;
  border-bottom: solid 1px #e6e6e6;
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
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    white-space: nowrap;
  }
  .menu-item {
    padding: 0 25px;

    a {
      color: #333;
      text-decoration: none;
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
