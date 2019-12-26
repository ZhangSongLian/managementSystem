<template>
    <div class="header_container">
       <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>

        <el-dropdown>
          <div class="block"><el-avatar :size="40" :src="circleUrl"></el-avatar></div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    
    </div>
</template>

<script>
export default {
    name:'headTop',
    data(){
      return{
         circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      }
    }
}
</script>

<style lang="less" scoped>
    @import '../style/function';
    .header_container {
      // width: 100%;
      background-color: #EFF2F7;
      height: 60px;
      .df-sb(@type:space-between);
      padding:0 20px;
    }
</style>