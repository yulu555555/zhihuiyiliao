<template>
    <div>
      <header>
        <div class="logo">ChatDoctor</div>
        <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/chat">在线咨询</router-link>
          <!--              <router-link to="#">咨询历史</router-link>-->
          <router-link to="/news">科普新闻</router-link>
          <!--              <router-link to="#">常见问题</router-link>-->
          <router-link to="/about">关于我们</router-link>
          <router-link to="/contact">联系我们</router-link>
        </nav>
      </header>
      <el-form :model="user">
      <div class="hero">
        <div class="register-container">
        <h2>在线医生咨询</h2>
        <form id="register-form">
            <div class="form-group">
              <el-form-item>
                <el-input v-model="user.name" prefix-icon="el-icon-user" style="width: 80%" placeholder="请输入用户名"></el-input>
              </el-form-item>
            </div>
            <div class="form-group">
              <el-form :model="user" :rules="rules" ref="userForm">
                <div class="form-group">
                  <el-form-item prop="password">
                    <el-input v-model="user.password" type="password" prefix-icon="el-icon-lock" style="width: 80%" show-password placeholder="请输入密码"></el-input>
                  </el-form-item>
                </div>
                <div class="form-group">
                  <el-form-item prop="confirmPassword">
                    <el-input v-model="user.confirmPassword" type="password" prefix-icon="el-icon-lock" style="width: 80%" show-password placeholder="请再次输入密码"></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>
<!--            <div class="form-group">-->
<!--              <el-form-item>-->
<!--                <el-input v-model="user.confirmPassword" type="password" prefix-icon="el-icon-lock" style="width: 80%" show-password placeholder="请再次输入密码"></el-input>-->
<!--              </el-form-item>-->
<!--            </div>-->
            <div class="form-tips">
                <p>用户名3-20个字符，密码6-20个字符！</p>
            </div>
            <div class="form-group">
              <el-form-item>
                <el-button style="width: 80%; margin-top: 10px" type="primary" @click="register()">注册</el-button>
              </el-form-item>
            </div>
            <div class="switch-links">
                <router-link to="/login">已有账号？去登陆</router-link>
<!--                <router-link to="/admin-register">切换为管理员注册</router-link>-->
            </div>
          </form>
        </div>
      </div>
      </el-form>
      <footer>
        <p>Copyright © 2024 天津科技大学. All Rights Reserved 20101222</p>
      </footer>
    </div>
  </template>

<script>

import request from "@/utils/request";

export default {
  name: "RegisterView",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.user.confirmPassword !== '') {
          // 这里假设你已经有了一个方法来校验确认密码
          this.$refs['userForm'].validateField('confirmPassword');
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      user: {
        name: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        confirmPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  // 页面加载的时候，做一些事情，在created里面
  created() {
  },
  // 定义一些页面上控件出发的事件调用的方法
  methods: {
    register() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          // 这里执行你的注册逻辑
          request.post("/user/register", this.user).then(res => {
            if (res.code === '0') {
              this.$message({
                message: '注册成功',
                type: 'success'
              });
              this.$router.push("/login");
            } else {
              this.$message({
                message: res.msg,
                type: 'error'
              });
            }
          })
        } else {
          console.log('表单验证失败!');
          return false;
        }
      });
    }
  }
}
</script>

  <style scoped>
  /* CSS 代码 */
  /* styles.css */
body {
    margin: 0;
    font-family: 'Arial', sans-serif;
}

header {
    background: #f8f8f8;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    margin-left: 50px;
    font-weight: bold;
    font-size: 24px;
}

nav a {
    margin-right: 20px;
    text-decoration: none;
    color: #333;
}

nav a:hover {
    text-decoration: underline;
}

.hero {
    background: url('@/assets/mainbg.webp') no-repeat center center;
    background-size: cover; /* 调整背景图片大小，50%表示宽度为50%，auto表示高度自动调整 */
    text-align: center;
    padding: 176px 0;
    transition: background-position 0.5s ease; /* 添加过渡效果，使移动更平滑 */
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}


footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
}

/* login.css */

/* Base styles for body to ensure the form is centered */


/* Styles for the container */
.login-container,
.register-container {
    width: 350px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 50px;
}

/* Styles for form elements */
.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* To make sure padding doesn't affect the width */
}

/* Styles for the button */
button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #5cb85c;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px; /* To provide some space above the button */
}

button:hover {
    background-color: #4cae4c;
}

/* Additional styles for the header and tips */
h2 {
    color: #333;
    text-align: center;
}

.form-tips {
    font-size: 14px;
    color: #666;
    text-align: center;
    padding-top: 10px;
}

.switch-links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px; /* 或根据需要调整 */
}

.switch-links a {
    color: #5cb85c; /* 或页面主题颜色 */
    text-decoration: none;
}

.switch-links a:hover {
    text-decoration: underline;
}
/* The rest of the styles remain the same as before */

  </style>
