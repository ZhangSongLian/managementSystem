<template>
    <div class="login-page fillcontain">
        <transition
            name="fade"
            appear 
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut"
            appear-active-class="animated bounceIn"
         >
            <section class="form_contianer">
                    <div class="form-title">
                        <p>ele后台管理系统</p>
                    </div>
                    <el-form :model="loginForm" :rules="rules" ref="loginForm">
                         <el-form-item  prop="username">
                                 <el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
                        </el-form-item>
                          <el-form-item  prop="password">
                                 <el-input v-model="loginForm.password" placeholder="密码"><span>dsfsf</span></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary"  @click="submitForm('loginForm')">登录</el-button>
                            <el-button @click="resetForm('loginForm')">重置</el-button>
                       </el-form-item> 
                    </el-form>
                    <p class="tip">此项目是vue + element-ui 构建的后台管理系统</p>
            </section>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                     { required: true, message: '请输入用户名', trigger: 'blur' }  
                ],
                password: [
                     { required: true, message: '请输入密码', trigger: 'blur' }  
                ],
            }
        }
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            this.$router.push('manage')
        //   if (valid) {
        //     alert('submit!');
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="less" scoped>
    @import '../style/function.less';
    .login-page {
        background-color: #324057;
    }
    .form_contianer {
        // .wh(320px,260px);
        width: 320px;
        .ctp(320px,210px);
        background-color: #fff;
        padding: 25px;
        border-radius: 5px;
        text-align: center;
        .form-title {
            padding: 20px 0;
           font-size: 28px;
        }
        .tip {
            font-size: 14px;
            color: red;
        }

    }
    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter, .fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
    }
    
</style>