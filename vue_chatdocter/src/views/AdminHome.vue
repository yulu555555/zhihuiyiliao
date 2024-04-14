<template>
  <div id="app">
    <el-container>
      <el-header style="background-color: #4c535a">
        <img src="@/assets/logo.png" alt="" style="width: 40px;position: relative;margin-left:-1550px;top: 10px">
        <span style="font-size: 20px;margin-left: 15px;color: white">基于大语言模型的医疗问答系统</span>
        <span @click="logout" style="font-size: 20px; position: absolute; right: 1%; top: 15px; color: white;" onmouseover="this.style.color='red'" onmouseout="this.style.color='white'">用户端</span>
      </el-header>

    </el-container>

    <el-container>
      <el-aside style="overflow: hidden;min-height: 100vh;background-color: #545c64;width: 250px">
        <el-menu
          :default-active="$route.path"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/admin-home">
            <i class="el-icon-s-home"></i>
            <span slot="title" style="font-size: 20px">系统首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span style="font-size: 20px">用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin-information">管理员信息</el-menu-item>
              <el-menu-item index="/admin-Userinformation">用户信息</el-menu-item>
            </el-menu-item-group>

          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span style="font-size: 20px">信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin-chat">历史问答</el-menu-item>
              <el-menu-item index="/admin-news">历史新闻</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <div class="welcome-messages">
          <h1>欢迎访问ChatDoctor后台管理系统！</h1>
          <p>在这里，您可以轻松管理用户数据、查看历史问答记录，以及发布最新医疗新闻。</p>
          <p>我们的目标是使医疗咨询更加便捷、高效。</p>
        </div>
        <div class="introduction-section">
          <h2 class="introduction-title">关于ChatDoctor</h2>
          <p class="introduction-text">ChatDoctor是一款专注于人工智能技术在医疗健康领域应用的全科智能医生。</p>
          <p class="introduction-text">ChatDoctor将深度学习、大数据处理、语义理解、医疗交互式对话等最新的AI技术与医学相融合，致力于“打造主动式AI，让优质医疗触手可及”，用技术手段扩大优质医疗资源的供给，缓解优质医疗资源过度集中与患者需求过度分散的矛盾。</p>
          <p class="introduction-text">ChatDoctor通过与不同应用场景的结合，为各方提供优质的医疗服务，赋能医疗健康行业。</p>
          <p class="introduction-mission"><strong>使命：</strong>打造主动式AI，让优质医疗触手可及</p>
          <p class="introduction-vision"><strong>愿景：</strong>成为智能医生驱动的数字医疗平台</p>
        </div>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'AdminHome',
  // 你可以在这里添加 script 代码，如 methods, data 等
  methods:{
    logout(){
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("user")
      window.localStorage.removeItem("role")
      router.push("/")
    }
  }
}
</script>

<style>
.welcome-messages {
  padding: 20px;
  background: #f5f5f5; /* 轻微的灰色背景 */
  border-left: 5px solid #4c535a; /* 添加边框高亮 */
  margin: 20px;
  border-radius: 10px; /* 圆角边框 */
  box-shadow: 0 2px 15px rgba(0,0,0,0.1); /* 添加阴影 */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* 设置过渡效果 */
}
.welcome-messages:hover {
  transform: translateY(-5px); /* 当鼠标悬浮时向上移动 */
  box-shadow: 0 5px 15px rgba(0,0,0,0.2); /* 增加阴影来增强浮动效果 */
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.welcome-messages h1 {
  animation: fadeIn 1s ease-out;
  color: #333;
  margin-bottom: 15px;
  font-size: 28px;
}

.welcome-messages p {
  color: #555; /* 段落文字颜色 */
  font-size: 20px; /* 文本字体大小 */
  line-height: 1.5; /* 行高 */
  margin-bottom: 10px; /* 段落间距 */
}
.introduction-section {
  padding: 30px;
  background: #ffffff; /* 使用明亮的背景色 */
  margin: 40px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15); /* 添加更明显的阴影以增强层次感 */
  transition: all 0.3s ease; /* 添加过渡效果使浮现更平滑 */
}

.introduction-section:hover {
  transform: translateY(-5px); /* 鼠标悬浮时轻微上移 */
  box-shadow: 0 6px 25px rgba(0,0,0,0.2); /* 鼠标悬浮时阴影加深 */
}

.introduction-title {
  color: #4c535a; /* 使用与边框相协调的颜色 */
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* 标题居中 */
}

.introduction-text {
  color: #555; /* 文本颜色稍微深一点 */
  font-size: 18px;
  line-height: 1.7;
  text-align: justify; /* 文本对齐 */
  text-align: center;
}

.introduction-mission {
  font-style: italic;
  color: #4c535a;
  font-weight: bold;
}

.introduction-vision {
  font-style: italic;
  color: #4c535a;
  font-weight: bold;
}

</style>
