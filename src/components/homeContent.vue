<template>
    <div class="main">
        <el-menu
      default-active="1"
      class="el-menu-vertical-demo menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" @click="typeClick1">
        <i class="el-icon-menu"></i>
        <span slot="title" >文学</span>
      </el-menu-item>
      <el-menu-item index="2" @click="typeClick2">
        <i class="el-icon-menu"></i>
        <span slot="title" >社科</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu" @click="typeClick1"></i>
        <span slot="title" >少儿</span>
      </el-menu-item>
      <el-menu-item index="4" @click="typeClick1">
        <i class="el-icon-menu"></i>
        <span slot="title" >艺术</span>
      </el-menu-item>
      <el-menu-item index="5" @click="typeClick1">
        <i class="el-icon-menu"></i>
        <span slot="title">生活</span>
      </el-menu-item>
      <el-menu-item index="6" @click="typeClick1">
        <i class="el-icon-menu"></i>
        <span slot="title" >文教</span>
      </el-menu-item>
    </el-menu>
    <homeBooks :book="books"></homeBooks>
    </div>
</template>

<script>
import homeBooks from '@/components/homeBooks.vue'
import axios from 'axios';
export default {
  data(){
    return {
      books:{}
    }
  },
    components:{
        homeBooks
    },
    created() {
      axios.get('data/wenxue/books.json').then(res=>{
          this.books = res.data.result
        })
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      typeClick1(){
        axios.get('data/wenxue/books.json').then(res=>{
          this.books = res.data.result
        })
      },
      typeClick2(){
        axios.get('data/lishi/books.json').then(res=>{
          this.books = res.data.result
        })
      }
    },
}
</script>

<style lang="scss" scoped>
.main{
    background-color:#F0F0F0;
    padding-top: 10px;
    .menu{
        width: 100px;
        position: fixed;
    }
}
</style>