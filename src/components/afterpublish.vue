<template>
    <div class="main"> 
    <el-card :body-style="{ padding: '0px' }" v-for="(item,index) in book" :key=item.id ref="card">
      <img :src=item.src class="image">
      <div style="padding: 14px;">
        <span>{{item.name}}</span>
        <div class="bottom clearfix">
          <time class="time">发布日期：{{item.time}}</time>
          <el-button type="text" class="button" @click="deletebook(index)">删除</el-button>
        </div>
      </div>
    </el-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
       return {
           book:{}
       }
   },
   created(){
       axios.get('data/lishi/books.json').then(res=>{
           this.book = res.data.result
       })
   },
   methods:{
       deletebook(index){
           this.book.splice(index,1)
       }
   }
}
</script>
<style lang="scss" scoped>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
    margin-top: 10px;
  }

  .image {
    width: 200px;
    height: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-card{
      width: 200px;
      height: 300px;
      float: left;
      margin-bottom: 20px;
  }
  .main{
      margin-left: 150px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
  }
</style>