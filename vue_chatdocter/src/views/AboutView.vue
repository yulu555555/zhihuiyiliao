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

    <main>
      <div class="c-img-box"><img src="https://cdn.zuoshouyisheng.com/open-platform/open-manage/static/img/company-intr.e2826c13.png" class="c-img"></div>
      <div class="c-content">
        <div class="c-desc"> ChatDoctor是一款专注于人工智能技术在医疗健康领域应用的全科智能医生。
          <div class="c-divider">

          </div>
          ChatDoctor将深度学习、大数据处理、语义理解、医疗交互式对话等最新的AI技术与医学相融合，致力于“打造主动式AI，让优质医疗触手可及”，用技术手段扩大优质医疗资源的供给，缓解优质医疗资源过度集中与患者需求过度分散的矛盾。
          <div class="c-divider">

          </div>
          ChatDoctor通过与不同应用场景的结合，为各方提供优质的医疗服务，赋能医疗健康行业。
          <div class="c-divider">

          </div>
          <strong>
            使命：
          </strong>
          打造主动式AI，让优质医疗触手可及
          <div class="c-divider">

          </div>
          <strong>
            愿景：
          </strong>
          成为智能医生驱动的数字医疗平台
        </div>
      </div>
    </main>

    <footer>
      <p>Copyright © 2024 天津科技大学. All Rights Reserved 20101222</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  // 你可以在这里添加 script 代码，如 methods, data 等
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

footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: -105px;
}
.c-img-box {
  position: relative;
  text-align: center;
}
.c-content {
  width: 1050px;
  margin: 57px auto 152px;
}
.c-desc {
  font-size: 18px;
  color: #323232;
  line-height: 25px;
}
.c-divider {
  height: 25px;
}
</style>
