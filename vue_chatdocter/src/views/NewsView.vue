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
    <!-- 页面主体 -->

    <div class="width1200">
      <el-input v-model="params.title" style="width: 800px;margin-top: 50px" placeholder="请输入新闻标题："></el-input>
      <el-button type="primary" style="margin-left: 10px" @click="findBySearch()">查询</el-button>
      <!-- left -->
      <div class="w830 fl_left ylTopList">
        <ul class="article_left article_l_list">
          <li class="nopic">
            <h3><a href="https://jiankang.cctv.com/2024/03/05/ARTI0uZKFr35l4EOSmMNWwui240305.shtml?spm=C88180.PSYtN5fkCEZx.EIQXGRqnwXt6.17" target="_blank" style=" font-weight:700;">关于肥胖，世卫组织这么说</a></h3>
            <dl class="con" style="text-align: left">
              <p>“3月4日是世界肥胖日。今年世界肥胖日的主题是“让我们谈谈肥胖和…… ”，关注日益增长的儿童和青少年肥胖问题。如何界定肥胖？肥胖有何危害？如何预防？”<a href="https://jiankang.cctv.com/2024/03/05/ARTI0uZKFr35l4EOSmMNWwui240305.shtml?spm=C88180.PSYtN5fkCEZx.EIQXGRqnwXt6.17">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：93562<span class="pdLeft16">发布时间：2024-03-5 14:38</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.ce.cn/cysc/yy/hydt/202402/21/t20240221_38905783.shtml" target="_blank" style=" font-weight:700;">多地发布健康提醒</a></h3>
            <dl class="con" style="text-align: left">
              <p>“大脑空白，双耳失聪”“手里的汉堡都不香了”……春节假期结束后，复工的不少人直呼“水土不服”。事实上，他们可能是中了“节后综合征”。<a href="http://www.ce.cn/cysc/yy/hydt/202402/21/t20240221_38905783.shtml">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：67456<span class="pdLeft16">发布时间：2024-02-22 13:14</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.xinhuanet.com/health/20240220/eb0236777d164b1886dc5e83d448bc26/c.html" target="_blank" style=" font-weight:700;">健康我来说｜上呼吸道感染后输液需谨慎</a></h3>
            <dl class="con" style="text-align: left">
              <p>新华社《健康我来说》栏目，本期邀请到了北京大学人民医院呼吸与危重症医科主任医师、国家健康科普专家马艳良，为大家讲解上呼吸道感染后的输液常识。<a href="http://www.xinhuanet.com/health/20240220/eb0236777d164b1886dc5e83d448bc26/c.html">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：44684<span class="pdLeft16">发布时间：2024-02-20 14:33</span></span></p>
            </dl>
          </li>

          <li class="nopic">
            <h3><a href="http://www.xinhuanet.com/health/20240220/93ab1219307e4b679b82732e784c6e68/c.html" target="_blank" style=" font-weight:700;">健康我来说｜如何预防胰腺炎？</a></h3>
            <dl class="con" style="text-align: left">
              <p>新华社《健康我来说》栏目，本期邀请到了北京大学人民医院消化内科副主任医师彭涛，为我们讲解如何预防胰腺炎。<a href="http://www.xinhuanet.com/health/20240220/93ab1219307e4b679b82732e784c6e68/c.html">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：32977<span class="pdLeft16">发布时间：2024-02-19 13:54</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.ce.cn/cysc/yy/hydt/202402/21/t20240221_38905780.shtml" target="_blank" style=" font-weight:700;">减肥需要循序渐进</a></h3>
            <dl class="con" style="text-align: left">
              <p>看完贾玲的减肥记录，不少观众立下“豪言壮志”：今年要瘦几斤。如何制定一份符合自身情况的减肥计划，既科学健康又持之以恒？<a href="http://www.ce.cn/cysc/yy/hydt/202402/21/t20240221_38905780.shtml">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：56674<span class="pdLeft16">发布时间：2024-02-15 13:28</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.xinhuanet.com/health/20240207/8a5cb0333f3f48669ed8be026d61cb3c/c.html" target="_blank" style=" font-weight:700;">友谊医生说丨幽门螺杆菌对我们的身体有什么影响？</a></h3>
            <dl class="con" style="text-align: left">
              <p>幽门螺旋杆菌是感染率最高的细菌之一。到底什么是幽门螺杆菌，它对我们的身体有什么影响？新华网《友谊医生说》邀请北京友谊医院消化科医生张希前来解答。<a href="http://www.xinhuanet.com/health/20240207/8a5cb0333f3f48669ed8be026d61cb3c/c.html">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：45140<span class="pdLeft16">发布时间：2024-02-13 16:35</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.xinhuanet.com/health/20240210/9f8d2f4d48c6488b968a7a8299114f19/c.html" target="_blank" style=" font-weight:700;">健康日历·E问医答丨春节期间怎样做到健康饮食？</a></h3>
            <dl class="con" style="text-align: left">
              <p>春节到了，吃的美味且营养均衡是很多网友关心的饮食健康问题。高蛋白、高热量等于高营养吗？哪些美食尽管“馋”也要适量吃？享受美味的同时怎样保持体重？越贵的东西越有营养吗？<a href="http://www.xinhuanet.com/health/20240210/9f8d2f4d48c6488b968a7a8299114f19/c.html">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：35625<span class="pdLeft16">发布时间：2024-02-10 13:33</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.ce.cn/cysc/yy/hydt/202402/07/t20240207_38897402.shtml" target="_blank" style=" font-weight:700;">2024健康过春节| 异物卡喉怎么办？</a></h3>
            <dl class="con" style="text-align: left">
              <p>春节假期，面对花样繁多的新零食、新玩具，最开心的就是孩子们。在欢度节日的同时，要格外注意儿童气道异物的发生。<a href="http://www.ce.cn/cysc/yy/hydt/202402/07/t20240207_38897402.shtml">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：56253<span class="pdLeft16">发布时间：2024-02-7 13:18</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.ce.cn/cysc/yy/hydt/202402/07/t20240207_38897405.shtml" target="_blank" style=" font-weight:700;">2024健康过春节| 呼吸道疾病高发，新年口罩怎么选怎么戴？</a></h3>
            <dl class="con" style="text-align: left">
              <p>春节前，国家卫生健康委就介绍冬季呼吸道疾病防治和健康提示有关情况举行新闻发布会...<a href="http://www.ce.cn/cysc/yy/hydt/202402/07/t20240207_38897405.shtml">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：53265<span class="pdLeft16">发布时间：2024-02-7 14:06</span></span></p>
            </dl>
          </li>
          <li class="nopic">
            <h3><a href="http://www.ce.cn/cysc/yy/hydt/202402/07/t20240207_38897407.shtml" target="_blank" style=" font-weight:700;">如何呵护眼健康？三个“20”来帮您</a></h3>
            <dl class="con" style="text-align: left">
              <p>春节假期来临，无论大人还是孩子，都从紧张繁忙的工作学习中抽身得到休憩机会，但也免不了刷刷手机玩玩平板。春节假期，如何呵护眼睛健康？<a href="http://www.ce.cn/cysc/yy/hydt/202402/07/t20240207_38897407.shtml">[详细]</a></p>
              <p class="article_bottom"><span class="fl_left">阅读量：71583<span class="pdLeft16">发布时间：2024-02-6 14:37</span></span></p>
            </dl>
          </li>

        </ul>
<!--        <div id="pages">-->
<!--          <div class="pageyl">-->
<!--            <ul>-->
<!--              <li><router-link to="#" class="curr">1</router-link></li>-->
<!--              <li><router-link to="/toutiao/page_2">2</router-link></li>-->
<!--              <li><router-link to="/toutiao/page_3">3</router-link></li>-->
<!--              <li><router-link to="/toutiao/page_3">4</router-link></li>-->
<!--              <li><router-link to="/toutiao/page_3">5</router-link></li>-->
<!--              <li><router-link to="/toutiao/page_3">...</router-link></li>-->
<!--              <li><router-link to="/toutiao/page_3">10</router-link></li>-->
<!--              <li><router-link to="/toutiao/page_3">下一页</router-link></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
        <div id="pages">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="params.pageNum"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="params.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </div>
      </div>
      <div class="w340 fl_right article_right">
        <div class="xw24_yl xw24New">
          <h4 class="r_title xw24_h4">头条科普</h4>
          <ul class="xw24_con">
            <li>
              <a href="http://www.news.cn/health/20240123/3085a68b25e646d3acde15c9ec41eac6/c.html">你的腰突就是这样“坐”出来的</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="http://www.news.cn/health/20240119/59ff354d8d7448798eaf9f36fd927deb/c.html">中医支招冬季呼吸道疾病防治</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="http://www.news.cn/health/20230620/b4a261873fac44209bfd0c2d53a6ad47/c.html">撑“大”了的胃 还能这样“缩”回去</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="http://www.news.cn/health/20230620/5e957a16dc754ef2ac250a442980e90a/c.html">牙齿变“黑”不一定是蛀牙</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="http://www.news.cn/health/20230227/9f67756ceb2348a5b2feb6c7d335e303/c.html">不吃早餐或削弱免疫系统功能</a>
              <p class="clear"></p>
            </li>
          </ul>
        </div>
        <div class="xw24_yl xw24New">
          <h4 class="r_title xw24_h4">热门咨询</h4>
          <ul class="xw24_con">
            <li>
              <a href="https://www.youlai.cn/ask/1DE39BY8mUu.html">头晕无力恶心想吐是怎么回事</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="https://www.youlai.cn/yyk/article/4F8CD0mMa4A.html">脸莫名奇妙就肿怎么回事</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="https://www.youlai.cn/yyk/article/5C4181mzYnA.html">嘴唇里面白白的怎么回事</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="https://www.youlai.cn/yyk/article/51A724mzOaB.html">小孩隔三差五感冒怎么回事</a>
              <p class="clear"></p>
            </li>
            <li>
              <a href="https://www.youlai.cn/ask/41C713YnzFx.html">严重便秘怎么办</a>
              <p class="clear"></p>
            </li>
          </ul>
        </div>
        <!-- 24小时新闻 end -->
        <!-- 视频排行榜 -->
        <div class="rmspph_yl">
          <h4 class="r_title">热门视频</h4>
          <div class="xgspph_con">
            <a href="https://www.youlai.cn/video/article/400914.html" class="i_0">
              <img src="https://file.youlai.cn/cnkfile1/M02/88/F6/8A602651622723141818AA75C94588F6WT.jpeg" alt="">
              <span class="timeLong">05:50</span>
              <div class="mask"></div>
              <span class="maskicon"></span>
              <p>心脏骤停急救法</p>
            </a>
            <a href="https://www.youlai.cn/video/article/275529.html" class="i_0">
              <img src="https://file.youlai.cn/cnkfile1/M00/14/E9/ooYBAFlolsKAZs14AACqlVGZ2Ks67.jpeg" alt="">
              <span class="timeLong">05:38</span>
              <div class="mask"></div>
              <span class="maskicon"></span>
              <p>肚子上的赘肉怎么减</p>
            </a>
            <a href="https://www.youlai.cn/video/article/EACE138PsA.html" class="i_0">
              <img src="https://file.youlai.cn/cnkfile1/M02/9B/95/058D05A65AC52469F62BB52372009B95WT.jpeg" alt="">
              <span class="timeLong">06:04</span>
              <div class="mask"></div>
              <span class="maskicon"></span>
              <p>结直肠癌自救指南</p>
            </a>
            <a href="https://www.youlai.cn/video/article/C3141CAMUJ.html" class="i_0">
              <img src="https://file.youlai.cn/cnkfile1/M02/87/5C/CABE6388DF1CE23F9E2060CF1E72875CWT.png" alt="">
              <span class="timeLong">04:12</span>
              <div class="mask"></div>
              <span class="maskicon"></span>
              <p>这些明星的消逝，给我们敲响了警钟！</p>
            </a>
            <a href="https://www.youlai.cn/video/article/F5C692ASul.html" class="i_0">
              <img src="https://file.youlai.cn/cnkfile1/M02/02/74/E7DBF493876DB49D86DCF73F89EC0274.png" alt="" class="dpblock100">
              <span class="timeLong">05:33</span>
              <div class="mask"></div>
              <span class="maskicon"></span>
              <p>B超检查要多久</p>
            </a>
            <a href="https://www.youlai.cn/video/article/D43A12ASSE.html" class="i_0">
              <img src="https://file.youlai.cn/cnkfile1/M02/8D/44/A16897105D01C7A36E51741BB9A28D44.png" alt="" class="dpblock100">
              <span class="timeLong">13:01</span>
              <div class="mask"></div>
              <span class="maskicon"></span>
              <p>面部皮肤松弛下垂如何</p>
            </a>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
      <footer>
        <p>Copyright © 2024 天津科技大学. All Rights Reserved 20101222</p>
      </footer>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: 'NewsView',
  data() {
    return {
      searchQuery: '',
      newsList: [
        // 填入新闻的数据，每个新闻是一个对象，至少包含标题和链接
      ],
      externalCSS: [
        "//static.youlai.cn/css/youlai/pc/common.css?1",
        "//static.youlai.cn/css/youlai/disease.css?1"
      ],
      externalScript: "//static.youlai.cn/js/youlai/hd/yunpian/riddler-sdk-0.2.2.js",
      scriptElement: null,
      params: {
        name:'',
        phone:'',
        title:'',
        digest:'',
        pageNum:1,
        pageSize:5
      },
      tableData: [],
      total:0,
      dialogFormVisible:false,
      form: {}
    };
  },
  mounted() {
    this.loadExternalCSS();
    this.loadExternalScript();
  },
  methods: {
    findBySearch(){
      request.get("/news/search",{
        params:this.params
      }).then(res=>{
        if (res.code === '0'){
          this.tableData = res.data.list;
          this.total = res.data.total;
        }else {
          this.$message({
            message:res.msg,
            type:'success'
          });
        }
      })
    },
    handleSizeChange(pageSize) {
      this.params.pageSize = pageSize;
      this.findBySearch();
    },
    handleCurrentChange(pageNum) {
      this.params.pageNum = pageNum;
      this.findBySearch();
    },
    loadExternalCSS() {
      this.externalCSS.forEach(url => {
        const link = document.createElement('link');
        link.href = url;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.classList.add('external-css'); // 添加一个类名以便稍后移除
        document.head.appendChild(link);
      });
    },
    loadExternalScript() {
      this.scriptElement = document.createElement('script');
      this.scriptElement.src = this.externalScript;
      this.scriptElement.classList.add('external-script'); // 添加一个类名以便稍后移除
      document.body.appendChild(this.scriptElement);
    },
    removeExternalResources() {
      // 移除CSS
      document.querySelectorAll('.external-css').forEach(el => el.remove());

      // 移除JavaScript
      if (this.scriptElement) {
        this.scriptElement.remove();
      }
    }
  },
  beforeDestroy() {
    this.removeExternalResources();
  }
}
</script>

<style scoped>
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
  margin: 0;
  font-family: 'Arial', sans-serif;
  justify-content: space-between;
  align-items: center;
}
</style>
