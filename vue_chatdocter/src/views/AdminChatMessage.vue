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
              <!--              <template slot="title">分组一</template>-->
              <el-menu-item index="/admin-information">管理员信息</el-menu-item>
              <el-menu-item index="/admin-Userinformation">用户信息</el-menu-item>
              <!--              <el-menu-item index="1-3">历史记录</el-menu-item>-->
              <!--              <el-menu-item index="1-4">历史新闻</el-menu-item>-->
            </el-menu-item-group>

          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span style="font-size: 20px">信息管理</span>
            </template>
            <el-menu-item-group>
              <!--              <template slot="title">分组一</template>-->
              <el-menu-item index="/admin-chat">历史问答</el-menu-item>
              <el-menu-item index="/admin-news">历史新闻</el-menu-item>
            </el-menu-item-group>

          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <div style="margin-bottom: 15px">
          <el-input v-model="params.chatId" style="width: 200px;margin-left: -965px" placeholder="请输入用户名："></el-input>
          <el-input v-model="params.msg" style="width: 200px;margin-left: 5px" placeholder="请输入对话内容："></el-input>
          <el-button type="primary" style="margin-left: 10px" @click="findBySearch()">查询</el-button>
          <el-button type="warning" style="margin-left: 10px" @click="reset()">清空</el-button>
          <el-button type="success" @click="exportConversations">导出对话</el-button>
        </div>
        <div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="conName" label="对话标题"></el-table-column>
            <el-table-column prop="username" label="用户名"></el-table-column>
            <el-table-column prop="msg" label="对话内容"></el-table-column>
            <el-table-column prop="type" label="发送者">
              <template slot-scope="scope">
                <div v-if="scope.row.type == 0">用户</div>
                <div v-else>医生</div>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="对话时间"></el-table-column>
            <el-table-column prop="isLiked" label="用户反馈">
              <template slot-scope="scope">
                <div v-if="scope.row.isLiked == 0">无</div>
                <div v-else-if="scope.row.isLiked == 1">赞</div>
                <div v-else>踩</div>
              </template>
            </el-table-column>
            <el-table-column prop="dislikeReason" label="差评原因"></el-table-column>
          </el-table>
        </div>
        <div style="margin-left: -930px;margin-top: 10px">
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
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import request from "@/utils/request";
import router from "@/router";

export default {
  name: 'AdminHome',
  // 你可以在这里添加 script 代码，如 methods, data 等
  data() {
    return {
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
    }
  },
  //页面加载的时候，做一些事情，在created里面
  created() {
    this.findBySearch();
    // this.load();
  },
  //定义一些页面上控件触发的事件调用的方法，比如点击等
  methods:{
    logout(){
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("user")
      window.localStorage.removeItem("role")
      router.push("/")
    },
    findBySearch(){
      request.get("/chat/search",{
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
    reset(){
      this.params = {
        pageNum:1,
        pageSize:5,
        name:'',
        phone:''
      }
      this.findBySearch();
    },
    handleSizeChange(pageSize){
      this.params.pageSize = pageSize;
      this.findBySearch();
    },
    handleCurrentChange(pageNum){
      this.params.pageNum = pageNum;
      this.findBySearch();
    },
    exportConversations() {
      if (!this.tableData.length) {
        this.$message.error('没有数据可导出');
        return;
      }

      let csvContent = "data:text/csv;charset=utf-8,";
      // 添加标题行
      csvContent += "对话标题,用户名,对话内容,发送者,对话时间,用户反馈,差评原因\n";

      // 遍历数据，转换为CSV格式
      this.tableData.forEach(row => {
        let rowContent = `"${row.conName}","${row.username}","${row.msg}",${row.type === 0 ? "用户" : "医生"},"${row.date}",${row.isLiked === 0 ? "无" : row.isLiked === 1 ? "赞" : "踩"},"${row.dislikeReason || ""}"\n`;
        csvContent += rowContent;
      });

      // 创建隐藏的a标签并模拟点击进行下载
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");

      // 使用当前日期作为文件名的一部分
      let date = new Date().toISOString().slice(0,10); // 格式为 YYYY-MM-DD
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `conversation_export_${date}.csv`);
      document.body.appendChild(link); // Required for FF

      link.click(); // This will download the data file named "conversation_export.csv".

      // 显示导出成功提示
      this.$message.success('导出成功！');
    },
  }
}
</script>
<style>
</style>
