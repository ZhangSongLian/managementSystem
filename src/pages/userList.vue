 <template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
            :data="tableData"
            highlight-current-row
            style="width: 100%">
            <el-table-column
                type="index"
                width="100">
            </el-table-column>
            <el-table-column
                prop="date"
                label="注册日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="用户姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="注册地址">
            </el-table-column>
            </el-table> 

            <div class="pagination">
                <el-pagination
                    :current-page.sync="currentPage"
                    :page-size="100"
                    layout="total, prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
            
        </div>
      
        
    </div>
  </template>

  <script>
  import headTop from '../components/headTop'
    export default {
        components:{
            headTop
        },
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海'
          }, {
            date: '2016-05-03',
            name: '王小虎',
             address: '上海'
          }],
           currentPage: 1,
        }
      }
    }
  </script>

  <style lang="less" scoped>
      .table_container {
          padding: 20px;
      }
      .pagination {
          text-align: left;
          margin-top: 10px;
      }
  </style>