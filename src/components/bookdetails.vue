<template>
<div class="home">
  <span class="header">详细信息</span>
  <div class="main">
      <div class="main-left">
        <el-card :body-style="{ padding: '0px' }">
      <img :src=detail.src class="image">
    </el-card>
      </div>
        <div class="main-right">
          <ul class="msg">
            <li><span>书名：{{detail.name}}</span></li>
            <el-divider></el-divider>
            <li><span>卖家信息</span></li>
            <li><i class="el-icon-user-solid"></i><span>用户名：{{detail.username}}</span></li>
            <li><i class="el-icon-chat-dot-round"></i><span>QQ:{{detail.qq}}</span></li>
            <li><i class="el-icon-phone"></i><span>电话:{{detail.phone}}</span></li>
          </ul>
        </div>
    </div>
</div>
    
</template>

<script>
import axios from 'axios'
export default {
  name:"bookdetails",
    data() {
        return {
            bookid:"",
            detail:{}
        }
    },
    created(){
        this.bookid = this.$route.params.id
        console.log(this.bookid)
        this.request()
    },
    methods: {
        request(){
            //let _this = this
            axios.get('data/details'+this.bookid+'.json').then(res=>{
                this.detail = res.data.result
            })
        }
    },
    
}
</script>

<style lang="scss" scoped>
.header{
  width: 200px;
  height: 40px;
  display: block;
  margin: 0 auto;
  font-weight: 1000;
  text-align: center;
}
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
  }

  .image {
    width: 300px;
    height: 300px;
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
  .main{
    width: 600px;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(249,249,249);
    margin: 0 auto;
    box-shadow: 0 0 9px 3px #999;
    .main-right{
      ul li{
        list-style: none;
        line-height: 40px;
        span{
          color: #409EFF;
        }
      }
    }
  }
  .el-icon-user-solid,.el-icon-chat-dot-round,.el-icon-phone{
    color: #409EFF;
    font-size: 30px;
    margin-left: -30px;
    margin-right: 10px;
  }
</style>