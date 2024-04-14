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
          <el-input v-model="params.title" style="width: 200px;margin-left: -990px" placeholder="请输入新闻标题："></el-input>
          <el-input v-model="params.digest" style="width: 200px;margin-left: 5px" placeholder="请输入新闻摘要："></el-input>
          <el-button type="warning" style="margin-left: 10px" @click="findBySearch()">查询</el-button>
          <el-button type="warning" style="margin-left: 10px" @click="reset()">清空</el-button>
          <el-button type="primary" style="margin-left: 10px" @click="add()">新增</el-button>
        </div>
        <div>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="digest" label="摘要"></el-table-column>
            <el-table-column prop="source" label="来源"></el-table-column>
            <el-table-column prop="reading" label="阅读量"></el-table-column>
            <el-table-column prop="time" label="发布时间"></el-table-column>
            <el-table-column prop="url" label="链接"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" @click="edit(scope.row)">编辑</el-button>
                <el-popconfirm title="确定删除吗？" @confirm="del(scope.row.id)">
                  <el-button slot="reference" type="danger" style="margin-left: 5px">删除</el-button>
                </el-popconfirm>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="margin-left: -1050px;margin-top: 10px">
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
        <div>
          <el-dialog title="请填写信息" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form">
              <el-form-item label="标题" label-width="15%">
                <el-input v-model="form.title" autocomplete="off" style="width: 90%"></el-input>
              </el-form-item>
              <el-form-item label="摘要" label-width="15%">
                <el-input v-model="form.digest" autocomplete="off" style="width: 90%"></el-input>
              </el-form-item>
              <el-form-item label="来源" label-width="15%">
                <el-input v-model="form.source" autocomplete="off" style="width: 90%"></el-input>
              </el-form-item>
              <el-form-item label="阅读量" label-width="15%">
                <el-input v-model="form.reading" autocomplete="off" style="width: 90%"></el-input>
              </el-form-item>
<!--              <el-form-item label="发布时间" label-width="15%">-->
<!--                <el-input v-model="form.phone" autocomplete="off" style="width: 90%"></el-input>-->
<!--              </el-form-item>-->
              <el-form-item label="发布时间" label-width="15%">
                <el-date-picker
                  v-model="form.time"
                  type="datetime"
                  placeholder="选择日期时间"
                  value-format="yyyy-MM-ddTHH:mm:ss"
                  style="width: 90%">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="链接" label-width="15%">
                <el-input v-model="form.url" autocomplete="off" style="width: 90%"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submit()">确 定</el-button>
            </div>
          </el-dialog>
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
    // load(){
    //   request.get("/news").then(res =>{
    //     if (res.code === '0'){
    //       this.tableData = res.data;
    //     }else {
    //
    //     }
    //   })
    // },
    logout(){
      window.localStorage.removeItem("token")
      window.localStorage.removeItem("user")
      window.localStorage.removeItem("role")
      router.push("/")
    },
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
    add(){
      this.form = {};
      this.dialogFormVisible=true;
    },
    edit(obj){
      this.form = obj;
      this.dialogFormVisible=true;
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
    submit() {
      request.post("/news", this.form).then(res => {
        if (res.code === '0') {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.dialogFormVisible=false;
          this.findBySearch();
        } else {
          this.$message({
            message: res.msg,
            type: 'success'
          });
        }
      })
    },
    del(id) {
      request.delete("/news/" + id).then(res => {
        if (res.code === '0') {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.findBySearch();
        } else {
          this.$message({
            message: res.msg,
            type: 'success'
          });
        }
      })
    }
  }
}
</script>
<style>
</style>
