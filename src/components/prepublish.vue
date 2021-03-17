<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <span class="title">发布您的书籍</span>
  <el-form-item label="书名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="请选择类别" prop="type">
    <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="电话" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="QQ" prop="QQ">
    <el-input v-model="ruleForm.QQ"></el-input>
  </el-form-item>
  <el-form-item label="上传图片" prop="img">
    <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即发布</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          phone:'',
          QQ:'',
          img:''
        },
        options: [{
          value: '选项1',
          label: '文学'
        }, {
          value: '选项2',
          label: '社科'
        }, {
          value: '选项3',
          label: '少儿'
        }, {
          value: '选项4',
          label: '艺术'
        }, {
          value: '选项5',
          label: '生活'
        },
        {
          value: '选项5',
          label: '文教'
        }],
        value: '',
        rules: {
          name: [
            { required: true, message: '请输入书名', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入您的电话号码', trigger: 'blur' }
          ],
          QQ: [
            { required: true, message: '请输入您的QQ', trigger: 'blur' }
          ],
          img: [
            { required: true, message: '请上传书籍图片', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择类别', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>
<style lang="scss" scoped>
.el-form{
    width: 500px;
    margin: 0 auto;
}
.title{
    display: block;
    margin-left: 220px;
    margin-bottom: 20px;
}
</style>