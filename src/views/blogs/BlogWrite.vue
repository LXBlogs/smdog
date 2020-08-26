<template>
  <div class="m-container">
    <el-row class="toolbar">
      <el-col :span="16">
        <el-input
          v-model="blog.title"
          size="medium"
          :clearable="true"
          placeholder="请输入标题"
        >
          <template slot="prepend">标题</template>
        </el-input>
      </el-col>
      <el-col :span="8" class="text-right">
        <el-button size="small" type="primary" icon="el-icon-upload2">
          导入
        </el-button>
        <el-button size="small" type="primary" icon="el-icon-download">
          导出
        </el-button>
      </el-col>
    </el-row>
    <mavon-editor v-model="blog.content" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: ''
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  padding: 16px;
  background-color: #fff;
}
</style>
