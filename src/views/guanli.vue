<template>
<div class="main">
    <el-table
    :data="tableData"
    style="width: 100%"
    max-height="800">
    <el-table-column
      fixed
      prop="date"
      label="创建日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
  
</template>

<script>
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'user',
          province: '123456'
        }, {
          date: '2016-05-02',
          name: 'user2',
          province: 'daw13543'
        }, {
          date: '2016-05-04',
          name: 'user3',
          province: '1654daf'
        }, {
          date: '2016-05-01',
          name: 'user4',
          province: '4687441qe'
        }, {
          date: '2016-05-08',
          name: 'user5',
          province: '66448e'
        }, {
          date: '2016-05-06',
          name: 'user6',
          province: '56786da4d466'
        }, {
          date: '2016-05-07',
          name: 'user7',
          province: '135aff513'
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>
.main{
    //display: block;
    width: 600px;
    margin: 0 auto;
}
</style>