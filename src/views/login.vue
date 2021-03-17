<template>
    <div>
        <el-container>
        <el-header>欢迎登录宜宾学院书籍交换平台</el-header>
        <el-main>
           <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name" >
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item class="user" label="密码" prop="password">
    <el-input v-model="ruleForm.password" type="password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
  <el-form-item>
    没有账号？点击注册
    <el-button type="primary" @click="zhuce">注册</el-button>
  </el-form-item>
</el-form>
        </el-main>
</el-container>
    </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
          ],
         password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const _this = this;
            this.$store.commit('changeLog')
            console.log(this.ruleForm.name)
            if(this.ruleForm.name == "master"){
              this.$router.push('/guanli')
            }else{
                alert('登录成功');
            this.$router.push('/Home')
            }
            
            this.$axios.post('',this.ruleForm).then(res=>{
                const userInfo = res.data.data
                _this.$store.commit({type:"SET_USERINFO",userInfo})
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      zhuce(){
        this.$router.push('/zhuce')
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
    //background-color: #B3C0D1;
    margin-left: 65px;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
    text-align: center;
    line-height: 160px;
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }
</style>
