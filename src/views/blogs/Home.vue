<template>
  <div>
    <el-row :gutter="20" class="container">
      <el-col :span="15" :offset="1">
        <div class="left-column"></div>
      </el-col>
      <el-col :span="7">
        <div class="right-column"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
$header-h: 61px;
$gutter: 32px;

.container {
  width: 100%;
  height: calc(100% - #{$header-h} - #{$gutter});
  margin-top: 16px;
  margin-bottom: 16px;
  overflow-y: auto;
  .left-column,
  .right-column {
    min-height: 300px;
    background: white;
  }
}
</style>
