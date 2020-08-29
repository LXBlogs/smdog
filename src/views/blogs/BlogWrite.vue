<template>
  <div class="m-container">
    <el-row class="panel">
      <el-col :span="12">
        <el-input
          v-model="blogTitle"
          size="medium"
          :clearable="true"
          placeholder="请输入标题"
        >
          <template slot="prepend">标题</template>
        </el-input>
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button size="small" type="primary" plain icon="el-icon-upload2">
          导入(.md)
        </el-button>
        <!-- 
        <el-button size="small" type="primary" plain icon="el-icon-download">
          导出
        </el-button>
         -->
      </el-col>
    </el-row>
    <mavon-editor v-model="mkOptions.content" @save="save" />

    <div class="panel" style="margin-top: 25px;">
      <label>标签：</label>
      <el-tag
        :key="tag"
        v-for="tag in blogTags.dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="blogTags.inputVisible"
        v-model.trim="blogTags.inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button
        v-else
        class="button-new-tag"
        size="small"
        icon="el-icon-plus"
        @click="showInput"
      >
        新增
      </el-button>
    </div>
    <div class="panel panel-notice">
      <label>通知：</label>
      <div>
        <el-checkbox-group v-model="blogNotice.group" size="small">
          <el-checkbox label="好友" border />
          <el-checkbox label="关注者" border />
        </el-checkbox-group>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="blogNotice.noticeList"
        >
        </el-input>
      </div>
    </div>
    <div class="panel text-center">
      <el-button size="small" type="primary" plain>发布</el-button>
      <el-button size="small" type="info" plain>存为草稿</el-button>
      <el-button size="small" type="danger" plain>取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogTitle: '',
      mkOptions: {
        content: ''
      },
      blogTags: {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      },
      blogNotice: {
        group: [],
        noticeList: ''
      }
    };
  },
  methods: {
    handleClose(tag) {
      this.blogTags.dynamicTags.splice(
        this.blogTags.dynamicTags.indexOf(tag),
        1
      );
    },
    showInput() {
      this.blogTags.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.blogTags.inputValue;
      if (inputValue) {
        this.blogTags.dynamicTags.push(inputValue);
      }
      this.blogTags.inputVisible = false;
      this.blogTags.inputValue = '';
    },

    save(value, render) {
      console.log(value);
      console.log(render);
    }
  }
};
</script>

<style lang="scss" scoped>
.m-container {
  padding: 16px;
  background-color: #fff;
}
.panel {
  padding: 16px 0;
  label {
    vertical-align: middle;
  }
}
.el-tag + .el-tag {
  margin-left: 16px;
}
.button-new-tag {
  margin-left: 10px;
}
.input-new-tag {
  width: 120px;
  margin-left: 10px;
}

.panel-notice {
  &::before,
  &::after {
    display: table;
    content: '';
  }
  &::after {
    clear: both;
  }
  > label {
    float: left;
  }
  > div {
    float: left;
    width: calc(100% - 50px);
  }
  .el-checkbox-group {
    margin: -5px 0 10px;
  }
}
</style>
