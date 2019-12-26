<template>
  <div class="manage_page fillcontain">
    <el-row style="height:100%">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2"> <!-- //index作为唯一的标志 -->
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userList" popper-class="userList">用户列表</el-menu-item>
						<el-menu-item index="orderList">订单列表</el-menu-item>
						<el-menu-item index="adminList">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>添加数据</template>
						<el-menu-item index="addGoods">添加商品</el-menu-item>
					</el-submenu>
					
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-edit"></i>编辑</template>
						<el-menu-item index="uploadImg">上传图片</el-menu-item>
						<el-menu-item index="vueEdit">文本编辑</el-menu-item>
					</el-submenu>

					<el-submenu index="5">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="adminSet">管理员设置</el-menu-item>
						<el-menu-item index="sendMessage">发送通知</el-menu-item>
					</el-submenu>

					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
         
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <div class="grid-content bg-purple-light">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // data(){
  //     return {
  //     }
  // }
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo {
    min-height: 100%; width:100%;
  }
  .el-submenu__title i {
     color: #eeeeee; 
}
</style>