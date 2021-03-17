<template>
    <el-row :gutter="10">
  <el-col :span="9"><div class="grid-content bg-purple"><img src="data/logo.png" alt=""><img class="ziti" src="data/ziti_a.png" alt=""></div></el-col>
  <span class="shouye" @click="shouye">首页</span>
  <el-col :span="7">
    <div class="grid-content bg-purple">
      <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
</div>
</el-col>
  <el-col :span="2"><div class="grid-content bg-purple fabu" @click="prepub">我要发布</div></el-col>
  <el-col :span="2"><div class="grid-content bg-purple fabu" @click="afterpub">我发布的</div></el-col>
  <el-col :span="2" class="log"><div class="grid-content bg-purple "><img class="unlog" src="data/unlog.png" alt=""><span v-if='logtag'>未登录</span><span v-else>user</span></div></el-col>
  <el-col :span="1"><div class="grid-content bg-purple fabu"><el-button type="success" @click="login">登录/注册</el-button></div></el-col>
</el-row>
</template>

<script>
export default {
    data() {
      return {
        input: '',
        logtag:1
      }
    },
    created(){
      this.logtag = this.$store.state.logTag
    },
    activated(){
      this.logtag = this.$store.state.logTag
    },
    methods:{
      prepub(){
        this.$emit('changeToPre')
      },
      afterpub(){
        this.$emit('changeToAft')
      },
      shouye(){
        this.$emit('changeToShouye')
      },
      login(){
        this.$router.push('/login')
      }

    }
}
</script>

<style lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
    height: 120px;
    position: relative;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    margin-top: 20px;
    border-radius: 4px;
    min-height: 36px;
    .ziti{
      width: 257px;
      height: 59px;
    }
    .unlog{
      //display: block;
      width: 60px;
      height: 60px;
    }
    span{
      bottom: 0;
      display: block;
      text-align: center;
    }
  }
  .fabu{
      margin-top: 40px;
      text-align: center;
      line-height: 30px;
      height: 30;
      background-color: #E6A23C;
      &:hover{
        cursor: pointer;
      }
    }
    .log{
      width: 100px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
  .row-bg {
    padding: 10px 0;
  }
  .el-input{
    margin-top: 20px;
    width: 300px;
  }
  .shouye{
    position: absolute;
    display: inline-block;
    margin-left: -50px;
    margin-top: 50px;
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
</style>