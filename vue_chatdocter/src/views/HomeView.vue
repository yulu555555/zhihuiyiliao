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
              <!-- 其他链接可以类似地使用 router-link -->
          </nav>
      </header>

      <main style="height:50%">
          <div class="hero">
              <h1>大语言模型医疗对话系统</h1>
              <p>医学知识库内容主要来源于在线医疗咨询网站的10万真实世界患者-医生对话，医学专业书籍、药品说明书，满足用户医疗健康类咨询需求，</p>
              <p>如疾病知识及健康建议等，可实现多场景覆盖。</p>
              <div v-if="this.isLogin">
                  <h2>欢迎用户：{{ user['name'] }}</h2>
                  <el-button type="success" size="big" @click="startChat" style="margin-right: 15px;">开始对话</el-button>
<!--                element-ui对话框-->
                  <el-dialog title="咨询人信息" :visible.sync="dialogFormVisible" width="800px">
                    <el-form :model="form" :rules="rules" ref="form">
                      <el-form-item label="姓名" prop="name" :label-width="formLabelWidth" style="width: 335px">
                        <el-input v-model="form.name" autocomplete="off" placeholder="请输入您的姓名" readonly=""></el-input>
                      </el-form-item>
                      <el-form-item label="性别" prop="sex" :label-width="formLabelWidth" style="width: 335px">
                        <el-radio-group v-model="form.sex" style="margin-left: -100px">
                          <el-radio label="男">男</el-radio>
                          <el-radio label="女">女</el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="年龄" prop="age" :label-width="formLabelWidth" style="width: 335px">
                        <el-input v-model.number="form.age"  placeholder="请输入您的年龄"></el-input>
                      </el-form-item>
                      <el-form-item label="联系方式" prop="phone" :label-width="formLabelWidth" style="width: 335px">
                        <el-input v-model.number="form.phone" placeholder="请输入您的联系方式"></el-input>
                      </el-form-item>
                      <el-form-item label="为您分科至" :label-width="formLabelWidth" prop="region">
<!--                        <el-select v-model="form.region" placeholder="请选择您要咨询的科室" @change="handleSelectChange" style="margin-left: -425px">-->
                        <el-select v-model="form.region" filterable placeholder="请选择您要咨询的科室" @change="handleSelectChange" style="margin-left: -435px">
<!--                          来源：百度健康医典-->
                          <el-option label="普通外科" value="普通外科"></el-option>
                          <el-option label="呼吸内科" value="呼吸内科"></el-option>
                          <el-option label="神经内科" value="神经内科"></el-option>
                          <el-option label="心血管内科" value="心血管内科"></el-option>
                          <el-option label="消化内科" value="消化内科"></el-option>
                          <el-option label="内分泌科" value="内分泌科"></el-option>
                          <el-option label="急诊科" value="急诊科"></el-option>
                          <el-option label="妇产科" value="妇产科"></el-option>
                          <el-option label="感染科" value="感染科"></el-option>
                          <el-option label="肿瘤科" value="肿瘤科"></el-option>
                          <el-option label="皮肤性病科" value="皮肤性病科"></el-option>
                          <el-option label="骨科" value="骨科"></el-option>
                          <el-option label="精神心理科" value="精神心理科"></el-option>
                          <el-option label="神经外科" value="神经外科"></el-option>
                          <el-option label="儿科" value="儿科"></el-option>
                          <el-option label="眼科" value="眼科"></el-option>
                          <el-option label="口腔科" value="口腔科"></el-option>
                          <el-option label="耳鼻咽喉头颈外科" value="耳鼻咽喉头颈外科"></el-option>
                          <el-option label="泌尿外科" value="泌尿外科"></el-option>
                          <el-option label="风湿免疫科" value="风湿免疫科"></el-option>
                          <el-option label="肾脏内科" value="肾脏内科"></el-option>
                          <el-option label="肝胆外科" value="肝胆外科"></el-option>
                          <el-option label="心胸外科" value="心胸外科"></el-option>
                          <el-option label="肛肠外科" value="肛肠外科"></el-option>
                          <el-option label="血管外科" value="血管外科"></el-option>
                          <el-option label="血液内科" value="血液内科"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="问题描述" :label-width="formLabelWidth" style="width: 600px">
                        <el-input v-model="form.desc" autocomplete="off" placeholder="请输入您要咨询的问题"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="confirmAndNavigate">确 定</el-button>
                    </div>
                  </el-dialog>
                <el-button type="info" size="big" @click="logout" style="margin-right: 20px;">退出登录</el-button>
              </div>
              <div class="buttons" v-else>
                  <router-link to="/login"><button>登录</button></router-link>
                  <router-link to="/register"><button>注册</button></router-link>
              </div>
          </div>
      </main>

      <footer>
          <p>Copyright © 2024 天津科技大学. All Rights Reserved 20101222</p>
      </footer>
    </div>
  </template>

  <script>
import router from '@/router'
import request from '@/utils/request'
  export default {
    name: 'HomeView',
    // 你可以在这里添加 script 代码，如 methods, data 等
    data(){
        return {
            isLogin:false,
            user:'',
            fileList:[],
            role:'',
            dialogFormVisible: false,
            form: {
              name: '',
              gender: 'male',
              age: null,
              phone: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''// 问题描述
          },
          formLabelWidth: '120px',
          rules: {
            region: [
              { required: true, message: '请选择您要咨询的科室', trigger: 'change' }
            ],
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' }
            ],
            sex: [
              { required: true, message: '请选择性别', trigger: 'change' }
            ],
            age: [
              { required: true, message: '请输入年龄', trigger: 'blur' },
              { type: 'number', message: '年龄必须为数字值', trigger: 'blur' }
            ],
            phone: [
              { required: true, message: '请输入联系方式', trigger: 'blur' },
              { type: 'number', message: '联系方式格式不正确', trigger: 'blur' }
            ],
          },
        }
    },
    created(){
        this.user = JSON.parse(window.localStorage.getItem("user"))
        if(this.user !== null && this.user !== ''){
            this.isLogin = true
        }
    },
    methods:{
      startChat(){
        this.dialogFormVisible = true
        this.form = JSON.parse(localStorage.getItem('user'))
        this.form.phone = Number(this.form.phone)
      },
        start(){
            router.push("/chat")
        }, startAdmin(){
        router.push("/admin-home")
      },
        logout(){
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("user")
            window.localStorage.removeItem("role")
            router.go("/")
        },
        handleSelectChange(value) {
          if (value) {
            // 当用户选择了科室后，自动设置问题描述为 "医生您好，我想咨询一些XX科室的问题"
            this.form.desc = `医生您好，我想咨询有关${value}的问题。`;
          }
        },
        confirmAndNavigate() {
          this.$refs.form.validate((valid) => {
            if (valid) {
              // 如果表单验证通过，则执行跳转逻辑
              request.post("/user/update",this.form).then((res) =>{
                this.$message({type:'success',message:'已更新信息'})
                localStorage.removeItem("user")
                localStorage.setItem("user",JSON.stringify(this.form))
                this.$router.push({path:'/chat',query:{msg:this.form.desc,title:this.form.region}});
                this.dialogFormVisible = false; // 如果需要关闭对话框，可以在这里设置
              })
            } else {
              // 如果表单验证未通过，可以在这里处理，如提示用户等
              this.$message.error('请完整填写表单信息！');
              return false; // 阻止跳转逻辑的执行
            }
          });
        },
    }
  }
  </script>

  <style scoped>
  /* 这里是您的 CSS 代码 */
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
    padding: 247px 0;
    transition: background-position 0.5s ease; /* 添加过渡效果，使移动更平滑 */
}

.hero h1 {
    color: #666;
    font-size: 48px;
    margin-bottom: 20px;
}

.hero p {
    color: #666;
    margin-bottom: 40px;
    font-weight: bold; /* 加粗 */
    font-size: 26px; /* 更改字体大小，根据需要进行调整 */
    word-wrap: break-word; /* 自动换行 */
}


.buttons button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    background-color: #5cb85c;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

.buttons button:hover {
    background-color: #4cae4c;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 20px 0;
}

  </style>
