<!-- vue2 - demo -->
<template>

  <div class="ComUpload" 
    :style="{
      width: style.width,
      height: style.height
    }"
    >
    <el-upload
      @mouseenter.stop="mouseover" @mouseleave.stop="mouseout"
      class="avatar_uploader" 
      action="" 
      :show-file-list="false" 
      :on-remove="handleRemove"
      :http-request="upload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      <div class="edit" v-if="popipVisible">
        <div @click.stop="handleBigImage">+</div>
        <div @click.stop="handleRemove">删除</div>
      </div>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="imageUrl" alt="">
    </el-dialog>
    
  </div>

</template>

<script>
import { uploadImage } from '@/api/index'

export default {
  props: {
    uploadStyle: {
      type: Object,
      default: {
        width: '178px',
        height: '178px'
      },
      required: false,
    }
  },
  data() {
    return {
      imageUrl: '',
      popipVisible: false,
      dialogVisible: false,
      style: {}
    };
  },
  created() {
    this.style.width = this.uploadStyle.width || '178px'
    this.style.height = this.uploadStyle.height || '187px'
  },
  methods: {
    mouseover(e) {
      if (this.imageUrl) {
        this.popipVisible = true
      }
    },
    mouseout(e) {
      if (this.imageUrl) {
        this.popipVisible = false
      }
    },
    handleBigImage() {
      this.dialogVisible = true
      window.open(this.imageUrl)
    },
    handleRemove(file, fileList) {
      this.imageUrl = ''
      this.popipVisible = false
      this.dialogVisible = false
    },
    async upload(param) {
      const formData = new FormData()
      formData.append('file', param.file)
      const { url } = await uploadImage(formData)
      this.imageUrl = url
    }
  }
}
</script>

<style lang="less">
.ComUpload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  .avatar_uploader {
    width: 100%;
    height: 100%;
    position: relative;
    .el-upload {
      width: 100%;
      height: 100%;
    }
    .edit{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      color: white;
      background-color: rgba(0,0,0,.5);
      transition: opacity .3s;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
 

  img {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  i{
    z-index: -1;
  }
  i::before {
    content: "\e6d9";
  }
}

</style>