<template>
  <el-container class="m-container" direction="vertical">
    <PageHeader />
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'Home',
  components: {
    PageHeader
  }
};
</script>

<style lang="scss" scoped>
$header-h: 61px;

.el-main {
  width: 100%;
  height: calc(100% - #{$header-h});
  margin: 0 auto;
  padding: 16px 72px;
  overflow-y: auto;

  ::v-deep .left-column,
  ::v-deep .right-column {
    min-height: 300px;
    background: white;
  }
}
</style>
