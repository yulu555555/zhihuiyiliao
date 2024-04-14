<template>
  <div class="home">
    <header>
      <div class="logo">ChatDoctor</div>
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/chat">在线咨询</router-link>
        <router-link to="/news">科普新闻</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/contact">联系我们</router-link>
      </nav>
    </header>
    <div class="chatpdf">
      <div class="pannel">
        <div class="fileList" >
          <div class="newFile" @click="new_chat">新的对话</div>
          <div
            class="fileTitle"
            v-for="(history, index) in historys"
            :key="index"
            @click="toggleSelection(index)"
            :class="{ selected: isSelected(index) }"
          >
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
              <div style="font-size: 18px;color: black;">{{ history.name }}</div>
            <div style="justify-content: right;">
              <el-popconfirm
                style="margin-right: 5px"
                confirm-button-text='确认'
                cancel-button-text='取消'
                icon="el-icon-info"
                icon-color="blue"
                @confirm="exportChat(history.name)"
                title="确定导出该对话吗？">
                <el-button slot="reference" type="success"><div><i class="el-icon-download"></i></div></el-button>
              </el-popconfirm>
                <el-popconfirm
                  confirm-button-text='确认'
                  cancel-button-text='取消'
                  icon="el-icon-info"
                  icon-color="red"
                  @confirm="deleteCon(history.id)"
                  title="这是一段内容确定删除吗？">
                  <el-button slot="reference" type="danger"><div><i class="el-icon-delete"></i></div></el-button>
                </el-popconfirm>
            </div>
          </div>
            <div style="font-size: 14px;text-align: left;color: black;">{{ history.date.replace('T',' ') }}</div>

          </div>
        </div>
        <div class="userBox">
          <div>
            <el-avatar :src="avter"></el-avatar>
            <span style="font-size: 30px; margin-left: 10px">{{
              user["name"]
            }}</span>
          </div>
        </div>
      </div>
      <div class="chatpdfBox">
        <div class="chatpdfLine">
          <div class="chatpdfRow">
            <div class="chatpdfContent">
              欢迎使用ChatDoctor模型，我是医疗问答机器人，一个专门响应人类指令的大模型,我服务于人类，致力于让生活更美好！
            </div>
          </div>
          <div class="chatpdfRow">
            <div class="chatpdfContent">在下方输入文字和我对话吧</div>
          </div>
          <div
            :class="{ chatpdfRow: true, chatpdfAsk: chat.type == 0 }"
            v-for="(chat, index) in chats"
            :key="index"
          >
            <div class="chatpdfContent">
              <el-input
                v-if="chat.type == 1"
                type="textarea"
                :value="chat.msg"
                readonly=""
                autosize
                resize="none"
                cols="90"
              >
              </el-input>
              <div v-else>{{ chat.msg }}</div>
              <!--点赞和差评-->
              <div v-if="chat.type === 1" class="sH2Blm93">
                <div class="g6TGOYrk">
                  <span class="Ek_OG88D"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="PAoQC1uB"
                      @click="copyToClipboard(chat.msg)"
                    >
                      <path
                        d="M12 4.3A1.7 1.7 0 0113.7 6v8a1.7 1.7 0 01-1.7 1.7H4A1.7 1.7 0 012.3 14V6A1.7 1.7 0 014 4.3h8zm0 1.4H4a.3.3 0 00-.3.3v8a.3.3 0 00.3.3h8a.3.3 0 00.3-.3V6a.3.3 0 00-.3-.3z"
                      ></path>
                      <path
                        d="M13 2.3A2.7 2.7 0 0115.7 5v7a.7.7 0 01-1.4 0V5A1.3 1.3 0 0013 3.7H6a.7.7 0 010-1.4h7z"
                      ></path></svg></span
                  ><i class="yBRSyYWp"></i>
                  <div class="iXnzMOlK" id="copy-container"></div>
                </div>
                <div class="sUi46ygj">
                  <span class="vgRQZPcG" @click="toggleLike(index)"
                    ><svg
                      :class="{ liked: chat.isLiked == 1 }"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 600 600"
                      width="600"
                      height="600"
                      preserveAspectRatio="xMidYMid meet"
                      style="
                        width: 100%;
                        height: 100%;
                        transform: translate3d(0px, 0px, 0px);
                        content-visibility: visible;
                      "
                    >
                      <defs>
                        <clipPath id="__lottie_element_119">
                          <rect width="600" height="600" x="0" y="0"></rect>
                        </clipPath>
                        <clipPath id="__lottie_element_121">
                          <path d="M0,0 L600,0 L600,600 L0,600z"></path>
                        </clipPath>
                        <clipPath id="__lottie_element_137">
                          <path d="M0,0 L600,0 L600,600 L0,600z"></path>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#__lottie_element_119)">
                        <g
                          clip-path="url(#__lottie_element_137)"
                          transform="matrix(1,0,0,1,0,0)"
                          opacity="1"
                          style="display: block"
                        >
                          <g
                            transform="matrix(1,0,0,1.080649971961975,300,288.5)"
                            opacity="1"
                            style="display: block"
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                :stroke="
                                  chat.isLiked == 1
                                    ? 'rgb(255,0,0)'
                                    : 'rgb(120,134,164)'
                                "
                                stroke-opacity="1"
                                stroke-width="41"
                                d=" M-70,-31 C-70,-31 -70,184 -70,184"
                              ></path>
                            </g>
                          </g>
                          <g
                            transform="matrix(30,0,0,30,335.5320129394531,299.9930114746094)"
                            opacity="1"
                            style="display: block"
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                  stroke-linecap="butt"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                  :stroke="
                                    chat.isLiked == 1
                                      ? 'rgb(255,0,0)'
                                      : 'rgb(120,134,164)'
                                  "
                                  stroke-opacity="1"
                                  stroke-width="1.4"
                                  d=" M0.453000009059906,-5.868000030517578 C-0.492000013589859,-5.934000015258789 -1.0089999437332153,-5.4670000076293945 -1.0160000324249268,-4.493000030517578 C-1.0839999914169312,-3.11299991607666 -1.3589999675750732,-2.321000099182129 -2.0290000438690186,-1.6749999523162842 C-2.259999990463257,-1.475000023841858 -2.625999927520752,-1.2209999561309814 -2.9800000190734863,-1.0980000495910645 C-3.119999885559082,-1.062000036239624 -3.36299991607666,-1.0119999647140503 -3.4519999027252197,-1.0099999904632568 C-3.4519999027252197,-1.0099999904632568 -4.763999938964844,-1.0099999904632568 -4.763999938964844,-1.0099999904632568 C-5.440000057220459,-1.0099999904632568 -5.854000091552734,-0.531000018119812 -5.854000091552734,0.13099999725818634 C-5.854000091552734,0.13099999725818634 -5.854000091552734,4.802000045776367 -5.854000091552734,4.802000045776367 C-5.765999794006348,5.300000190734863 -5.35099983215332,5.684000015258789 -4.765999794006348,5.666999816894531 C-4.765999794006348,5.666999816894531 -2.9749999046325684,5.659999847412109 -2.9749999046325684,5.659999847412109 C-2.9749999046325684,5.659999847412109 -2.882999897003174,5.666999816894531 -2.882999897003174,5.666999816894531 C-2.882999897003174,5.666999816894531 2.130000114440918,5.666999816894531 2.130000114440918,5.666999816894531 C3.0280001163482666,5.617000102996826 3.3410000801086426,5.2870001792907715 3.884999990463257,4.89900016784668 C3.884999990463257,4.89900016784668 4.249000072479248,4.493000030517578 4.249000072479248,4.493000030517578 C4.357999801635742,4.3420000076293945 4.460999965667725,4.196000099182129 4.5279998779296875,3.996000051498413 C4.716000080108643,3.622999906539917 4.894000053405762,3.2109999656677246 5.107999801635742,2.615999937057495 C5.322000026702881,2.0179998874664307 5.336999893188477,2.0450000762939453 5.461999893188477,1.5099999904632568 C5.515999794006348,1.25 5.636000156402588,0.7279999852180481 5.6479997634887695,0.5809999704360962 C5.6479997634887695,0.5809999704360962 5.660999774932861,0.2549999952316284 5.660999774932861,0.2549999952316284 C5.76200008392334,-0.8460000157356262 5.178999900817871,-1.687000036239624 3.944000005722046,-1.8009999990463257 C3.944000005722046,-1.8009999990463257 1.6710000038146973,-1.812000036239624 1.6710000038146973,-1.812000036239624 C1.6710000038146973,-1.812000036239624 1.9819999933242798,-2.687999963760376 1.9819999933242798,-2.687999963760376 C2.059000015258789,-2.997999906539917 2.1070001125335693,-3.2990000247955322 2.1070001125335693,-3.7170000076293945 C2.1070001125335693,-4.932000160217285 1.565999984741211,-5.607999801635742 0.734000027179718,-5.866000175476074 C0.734000027179718,-5.866000175476074 0.453000009059906,-5.868000030517578 0.453000009059906,-5.868000030517578z"
                                ></path>
                              </g>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <g>
                                <path
                                  stroke-linecap="butt"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g
                          clip-path="url(#__lottie_element_121)"
                          style="display: none"
                        >
                          <g style="display: none">
                            <g>
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <g>
                                <path
                                  stroke-linecap="butt"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                ></path>
                              </g>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <g>
                                <g><path></path></g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g></svg></span
                  ><i class="yBRSyYWp"></i
                  ><span class="vgRQZPcG n5lGUp0d" @click="toggleDislike(index)"
                    ><svg
                      :class="{ disliked: chat.isLiked == 2 }"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 600 600"
                      width="600"
                      height="600"
                      preserveAspectRatio="xMidYMid meet"
                      style="
                        width: 100%;
                        height: 100%;
                        transform: translate3d(0px, 0px, 0px);
                        content-visibility: visible;
                      "
                    >
                      <defs>
                        <clipPath id="__lottie_element_154">
                          <rect width="600" height="600" x="0" y="0"></rect>
                        </clipPath>
                        <clipPath id="__lottie_element_156">
                          <path d="M0,0 L600,0 L600,600 L0,600z"></path>
                        </clipPath>
                        <clipPath id="__lottie_element_172">
                          <path d="M0,0 L600,0 L600,600 L0,600z"></path>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#__lottie_element_154)">
                        <g
                          clip-path="url(#__lottie_element_172)"
                          transform="matrix(1,0,0,1,0,0)"
                          opacity="1"
                          style="display: block"
                        >
                          <g
                            transform="matrix(1,0,0,1.080649971961975,300,288.5)"
                            opacity="1"
                            style="display: block"
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                                :stroke="
                                  chat.isLiked == 2
                                    ? 'rgb(0,0,255)'
                                    : 'rgb(120,134,164)'
                                "
                                stroke-opacity="1"
                                stroke-width="41"
                                d=" M-70,-31 C-70,-31 -70,184 -70,184"
                              ></path>
                            </g>
                          </g>
                          <g
                            transform="matrix(30,0,0,30,335.5320129394531,299.9930114746094)"
                            opacity="1"
                            style="display: block"
                          >
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                  stroke-linecap="butt"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                  :stroke="
                                    chat.isLiked == 2
                                      ? 'rgb(0,0,255)'
                                      : 'rgb(120,134,164)'
                                  "
                                  stroke-opacity="1"
                                  stroke-width="1.4"
                                  d=" M0.453000009059906,-5.868000030517578 C-0.492000013589859,-5.934000015258789 -1.0089999437332153,-5.4670000076293945 -1.0160000324249268,-4.493000030517578 C-1.0839999914169312,-3.11299991607666 -1.3589999675750732,-2.321000099182129 -2.0290000438690186,-1.6749999523162842 C-2.259999990463257,-1.475000023841858 -2.625999927520752,-1.2209999561309814 -2.9800000190734863,-1.0980000495910645 C-3.119999885559082,-1.062000036239624 -3.36299991607666,-1.0119999647140503 -3.4519999027252197,-1.0099999904632568 C-3.4519999027252197,-1.0099999904632568 -4.763999938964844,-1.0099999904632568 -4.763999938964844,-1.0099999904632568 C-5.440000057220459,-1.0099999904632568 -5.854000091552734,-0.531000018119812 -5.854000091552734,0.13099999725818634 C-5.854000091552734,0.13099999725818634 -5.854000091552734,4.802000045776367 -5.854000091552734,4.802000045776367 C-5.765999794006348,5.300000190734863 -5.35099983215332,5.684000015258789 -4.765999794006348,5.666999816894531 C-4.765999794006348,5.666999816894531 -2.9749999046325684,5.659999847412109 -2.9749999046325684,5.659999847412109 C-2.9749999046325684,5.659999847412109 -2.882999897003174,5.666999816894531 -2.882999897003174,5.666999816894531 C-2.882999897003174,5.666999816894531 2.130000114440918,5.666999816894531 2.130000114440918,5.666999816894531 C3.0280001163482666,5.617000102996826 3.3410000801086426,5.2870001792907715 3.884999990463257,4.89900016784668 C3.884999990463257,4.89900016784668 4.249000072479248,4.493000030517578 4.249000072479248,4.493000030517578 C4.357999801635742,4.3420000076293945 4.460999965667725,4.196000099182129 4.5279998779296875,3.996000051498413 C4.716000080108643,3.622999906539917 4.894000053405762,3.2109999656677246 5.107999801635742,2.615999937057495 C5.322000026702881,2.0179998874664307 5.336999893188477,2.0450000762939453 5.461999893188477,1.5099999904632568 C5.515999794006348,1.25 5.636000156402588,0.7279999852180481 5.6479997634887695,0.5809999704360962 C5.6479997634887695,0.5809999704360962 5.660999774932861,0.2549999952316284 5.660999774932861,0.2549999952316284 C5.76200008392334,-0.8460000157356262 5.178999900817871,-1.687000036239624 3.944000005722046,-1.8009999990463257 C3.944000005722046,-1.8009999990463257 1.6710000038146973,-1.812000036239624 1.6710000038146973,-1.812000036239624 C1.6710000038146973,-1.812000036239624 1.9819999933242798,-2.687999963760376 1.9819999933242798,-2.687999963760376 C2.059000015258789,-2.997999906539917 2.1070001125335693,-3.2990000247955322 2.1070001125335693,-3.7170000076293945 C2.1070001125335693,-4.932000160217285 1.565999984741211,-5.607999801635742 0.734000027179718,-5.866000175476074 C0.734000027179718,-5.866000175476074 0.453000009059906,-5.868000030517578 0.453000009059906,-5.868000030517578z"
                                ></path>
                              </g>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <g>
                                <path
                                  stroke-linecap="butt"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g
                          clip-path="url(#__lottie_element_156)"
                          style="display: none"
                        >
                          <g style="display: none">
                            <g>
                              <path
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                fill-opacity="0"
                                stroke-miterlimit="4"
                              ></path>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <g>
                                <path
                                  stroke-linecap="butt"
                                  stroke-linejoin="round"
                                  fill-opacity="0"
                                ></path>
                              </g>
                            </g>
                          </g>
                          <g style="display: none">
                            <g>
                              <g>
                                <g><path></path></g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g></svg
                  ></span>
                  <el-dialog
                    title="您的反馈将帮助我们改进"
                    :visible.sync="dislikeDialogVisible"
                    width="30%">
                    <el-checkbox-group v-model="dislikeReasons">
                      <el-checkbox
                        v-for="option in dislikeOptions"
                        :label="option.value"
                        :key="option.value"
                        >{{ option.label }}</el-checkbox>
                    </el-checkbox-group>
                    <el-input
                      v-model="otherDislikeReason"
                      type="textarea"
                      placeholder="如果上述选项无法描述您的问题，请在这里输入"
                      v-show="dislikeReasons.length === 0 || otherDislikeReason"
                    ></el-input>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dislikeDialogVisible = false"
                        >取消</el-button>
                      <el-button type="primary" @click="confirmDislike(chat)"
                        >提交</el-button>
                    </span>
                  </el-dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chatpdfArea">
          <el-input
            style="height: 35px !important"
            type="text"
            v-model="chatMessage"
            @keydown.native.enter="sendMessage()"
            placeholder="输入内容后点击右侧按钮或回车发送"
          ></el-input>
          <button @click="sendMessage()" style="height: 31px">
            <svg
              t="1682141916531"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1271"
              width="16"
              height="16"
            >
              <path
                d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936L0 0l1024 512z"
                fill="#ffffff"
                p-id="1272"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heada_Image from "../assets/avter.png";
import request from "@/utils/request";
export default {
  name: "ChatView",
  data() {
    return {
      dislikeDialogVisible: false,
      title:'',
      dislikeReasons: [], // 确保这是一个数组
      dislikeOptions: [
        { label: "格式问题", value: "格式问题" },
        { label: "逻辑问题", value: "逻辑问题" },
        { label: "有害信息", value: "有害信息" },
        { label: "事实错误", value: "事实错误" },
        { label: "答非所问", value: "答非所问" },
        { label: "没有帮助", value: "没有帮助" },
      ],
      otherDislikeReason: "", // 新增加的其他不喜欢原因
      historys: [],
      chats: [],
      chatMessage: "",
      sent_able: true,
      id: -1,
      user: JSON.parse(window.localStorage.getItem("user")),
      avter: heada_Image,
      new_history: [],
      selectedIndices: [], // 用于跟踪选中的文件标题的索引
      newChatOpen: false   // 用于跟踪新对话是否打开
    };
  },
  methods: {
    deleteCon(id){
      request.get("/chat/deleteCon?id="+id).then((res) =>{
        if(Number(res.code) === 0 ){
          this.$message.success(res.data)
        }
        console.log(res)
        this.loadHistory()
        this.id = -1;
        this.chats = []
      })
    },
    exportChat(title) {
      if (!this.chats.length) {
        this.$message.error('没有聊天记录可导出');
        return;
      }

      let csvContent = "data:text/csv;charset=utf-8,对话标题,用户名,对话内容,发送者,对话时间,用户反馈,差评原因\n";

      this.chats.forEach(chat => {
        let sender = chat.type === 0 ? "用户" : "医生";
        let feedback = chat.isLiked === 0 ? "无" : chat.isLiked === 1 ? "赞" : "踩";
        let rowContent = `"${title}","${this.user.name}","${chat.msg}","${sender}","${chat.date}","${feedback}","${chat.dislikeReason || ""}"\n`;
        csvContent += rowContent;
      });

      var encodedUri = encodeURI(csvContent);
      var sanitizedTitle = title.replace(/[\s\/\\?%*:|"<>]/g, '_'); // 简单的清理文件名中的不允许字符
      var fileName = `${sanitizedTitle}_chat_records.csv`; // 使用对话标题作为文件名

      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", fileName); // 设置文件名
      document.body.appendChild(link);

      link.click(); // 模拟点击下载

      // 显示导出成功提示
      this.$message.success('导出成功！');
    },

    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.$message.success("内容已复制到剪贴板");
        })
        .catch((err) => {
          console.error("复制失败", err);
        });
    },
    toggleLike(index) {
      if (Number(this.chats[index].isLiked) == 1) {
        this.chats[index].isLiked = 0;
      } else {
        this.chats[index].isLiked = 1;
      }
      let message = this.chats[index].isLiked == 1 ? "点赞成功！" : "取消点赞！";
      this.feedback(
        this.chats[index].id,
        this.chats[index].isLiked,
        ''
      ).then((res) => {
          this.$message({
          message: message,
          type: this.chats[index].isLiked == 1 ? "success" : "info",
        });
      }).catch((error) =>{
        this.chats[index].isLiked = 0;
        this.$message({
          message: "提交失败",
          type: "error",
        });
      });
    },
    toggleDislike(index) {
      if (Number(this.chats[index].isLiked) == 2) {
        this.chats[index].isLiked = 0;
        //存后端
        this.feedback(
          this.chats[this.currentChat].id,
          0,
          ''
        ).then((res) => {
            this.$message({
            message: "已取消标记不喜欢！",
            type: "info",
          });
        }).catch((error) =>{
          this.chats[this.currentChat].isLiked = 2;
          this.$message({
            message: "提交失败",
            type: "error",
          });
        });
        return;
      }
      this.currentChat = index;
      this.dislikeDialogVisible = true;
    },
    confirmDislike() {
      var reason = [];
      if (this.dislikeReasons.length > 0 || this.otherDislikeReason) {
        this.chats[this.currentChat].isLiked = 2;
        if (this.otherDislikeReason) {
          reason.push(this.otherDislikeReason);
        } else {
          this.dislikeReasons.forEach((res) => {
            reason.push(res);
          });
        }
        this.feedback(
          this.chats[this.currentChat].id,
          2,
          reason.toString()
        ).then((res) => {
          this.$message({
            message: "已标记为不喜欢！",
            type: "warning",
          });
        }).catch((error) =>{
          this.chats[this.currentChat].isLiked = 0;
          this.$message({
            message: "提交失败",
            type: "error",
          });
        });
      } else {
        this.$message.error("请选择一个不喜欢的原因或描述其他问题");
      }
      this.dislikeDialogVisible = false;
    },
    scrollTop() {
      this.$nextTick(() => {
        let div = document.querySelector(".chatpdfLine");
        div.scrollTop = div.scrollHeight;
      });
    },
    sendMessage() {
      if (this.chatMessage == "") {
        return;
      }
      if (!this.sent_able) {
        this.$message.error("您发送过快！请稍后尝试");
        return;
      }
      this.sent_able = false;
      this.$set(this.chats, this.chats.length, {
        msg: this.chatMessage,
        type: 0,
        isLiked: 0,
      });
      this.scrollTop();
      var param = {
        id: this.id,
        msg: this.chatMessage,
        history: this.new_history,
        title: this.title
      };
      console.log(param)
      request
        .post("/chat/sendMessage", param)
        .then(async (res) => {
          console.log(res);
          // this.chats.push({ msg: res.data.msg, type: 1, isLiked: 0 });
          this.chats.push({id:res.data.msgId, msg: res.data.msg, type: 1, isLiked: 0 });
          this.new_history = res.data.new_history;
          if (this.id == -1) {
            await this.loadHistory();
          }
          this.id = res.data.id;
          setTimeout(() => {
            this.sent_able = true;
          }, 1000);
          this.scrollTop();
        })
        .catch((error) => {
          this.$message.error("请求错误，请重试");
          setTimeout(() => {
            this.sent_able = true;
          }, 1000);
        });
      this.chatMessage = "";
    },
    loadHistory() {
      request.get("/chat/getHistory").then((res) => {
        this.historys = res;
      });
    },
    clearQueryParams() {
      this.$router.replace({ query: { msg: undefined, title: undefined } }).catch(err => {});
    },
    new_chat() {
      this.clearQueryParams(); // 清除URL中的查询参数
      this.chats = [];
      this.title = ''
      this.id = -1;
      // 重置selectedIndices数组，取消所有对话框的选中状态
      this.selectedIndices = [];
      // 可能还需要打开新对话界面
      this.newChatOpen = true;
    },
    getMessage(index) {
      this.id = this.historys[index]["id"];
      this.chats = request
        .get("/chat/getMessage?id=" + this.historys[index]["id"])
        .then((res) => {
          this.chats = res;
          console.log(res);
          this.new_history = [];
          this.scrollTop();
        });
    },
    // 添加一个新方法来切换选中状态
    toggleSelection(index) {
      // 重置selectedIndices数组，取消所有对话框的选中状态
      this.selectedIndices = [];
      // 将新选中的对话框的索引添加到数组中
      this.selectedIndices.push(index);
      // 调用getMessage方法获取消息
      this.getMessage(index);
    },
    // 检查文件标题是否被选中
    isSelected(index) {
      return this.selectedIndices.includes(index);
    },
    feedback(id, status, reason) {
      var params = { id: id, status: status, reason: reason }
      console.log(params)
      return request.post("/chat/feedback",params );
    },
  },
  created() {
      request.get("/chat/getHistory").then((res) => {
        if (res.length == 0) {
          this.id = -1;
        }
        this.historys = res;
      });
      if(this.$route.query['msg'] !== undefined){
        this.chatMessage = this.$route.query['msg']
        this.title = this.$route.query['title']
        this.sendMessage()
        this.clearQueryParams();// 清除URL中的查询参数
      }
  }
};
</script>
<style scoped>
/deep/ .el-textarea__inner {
  background-color: #f8f8f8 !important;
  border: none;
  border: 0;
  resize: none;
  padding: 5px 0;
  overflow-y: hidden;
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
.chatpdf {
  display: flex;
  height: calc(100vh - 60px); /* 假设header高度为60px */
  flex-direction: row;
  overflow: auto; /* 添加滚动条 */
}
.chatpdf .pannel {
  width: 255px;
  background-color: rgb(0, 21, 41);
  overflow-y: auto;
  height: 820px;
}
.chatpdf .pannel .userBox {
  width: 200px;
  background-color: rgb(0, 21, 41);
  color: #ffffff;
  position: fixed;
  bottom: 0;
  border-radius: 0px;
  padding: 25px;
  margin-left: -10px;
  font-size: 14px;
  cursor: pointer;
}

.chatpdfBox {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(to bottom right, #dbe6fb, #f3f4f8);
  background-size: cover;
  background-attachment: fixed;
}
.chatpdfLine {
  flex: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow-y: auto;
}
.chatpdfRow {
  margin: 20px 10px;
  display: flex;
}
.chatpdfAsk {
  justify-content: flex-end;
}
.chatpdfContent {
  text-align: left;
  display: inline-block;
  border-radius: 8px;
  padding: 6px 12px;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.12),
    0px 1.6px 3.6px rgba(0, 0, 0, 0.16);
}
.chatpdfAsk .chatpdfContent {
  background: linear-gradient(90deg, #2870ea 10.79%, #1b4aef 87.08%);
  color: #fff;
}
.chatpdfArea {
  display: flex;
  padding: 5px 10px;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
.chatpdfArea textarea {
  flex: 1;
  border-color: #d9d9d9;
  resize: none;
  outline: none;
  padding: 0px 5px;
  height: 35px;
  line-height: 30px;
  color: #404040;
  border-radius: 10px 0px 0px 10px;
  transition: all 0.3s, height 0s;
}
.chatpdfArea textarea:hover {
  border-color: #4096ff;
}
.chatpdfArea button {
  height: 35px;
  color: #fff;
  background: linear-gradient(90deg, #2870ea 10.79%, #1b4aef 87.08%);
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
  border: none;
  padding: 0 20px;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
}
.chatpdfArea button:hover {
  background-color: #388aff;
}
.chatpdf .fileTitle {
  background-color: #ffffff;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  font-size: 14px;
  cursor: pointer;
}
.chatpdf .newFile {
  background-color: #caffc4;
  color: #000000;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  cursor: pointer;
}
@media (max-width: 768px) {
  .pannel {
    display: none;
  }
}
.sH2Blm93 {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  position: relative;
}
.g6TGOYrk {
  display: flex;
  margin-right: -3px;
  padding-top: 1px;
}
.Ek_OG88D {
  cursor: pointer;
  height: 20px;
  margin-right: 12px;
  position: relative;
  width: 20px;
}
.Ek_OG88D .PAoQC1uB {
  border-radius: 3px;
  color: #7886a4;
  height: 16px;
  width: 16px;
}
.sUi46ygj {
  align-items: center;
  display: flex;
  margin-top: -2px;
}
.vgRQZPcG {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 23px;
  justify-content: center;
  position: relative;
  width: 23px;
}
.sUi46ygj .yBRSyYWp {
  background: rgba(207, 204, 223, 0.7);
  height: 12px;
  margin: 0 5px;
  width: 1px;
}
.vgRQZPcG.n5lGUp0d {
  transform: rotate(180deg) scaleX(-1);
}
.Ek_OG88D:after {
  background-color: rgba(207, 204, 223, 0.7);
  content: "";
  height: 11px;
  margin-top: 3px;
  position: absolute;
  right: -6px;
  width: 1px;
}
/* 对话框的样式 */
.el-dialog {
  /* 调整对话框的边框、阴影等 */
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

/* 自定义复选框的样式 */
.el-checkbox-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 两列布局 */
  gap: 10px; /* 格子间隔 */
  padding: 10px; /* 内边距 */
}

.el-checkbox-button__inner {
  text-align: center;
  border: 1px solid #dcdfe6;
  color: #606266;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  padding: 10px 0; /* 按钮的垂直内边距 */
  margin: 0; /* 重置外边距 */
  font-size: 14px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.el-checkbox-button__inner:hover {
  border-color: #409eff;
}

.el-checkbox-button__inner.is-checked {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.el-checkbox-button__inner.is-checked:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

/* 对话框底部按钮的样式 */
.dialog-footer {
  text-align: right;
  padding: 10px 20px; /* 按钮区域的内边距 */
}

.dialog-footer .el-button {
  margin-left: 10px; /* 按钮间的间隔 */
}

/* 取消按钮的样式 */
.dialog-footer .el-button:first-child {
  background-color: #fff;
  color: #606266;
  border: 1px solid #dcdfe6;
}

/* 取消按钮悬停的样式 */
.dialog-footer .el-button:first-child:hover {
  border-color: #409eff;
  color: #409eff;
}

/* 确认按钮的样式 */
.dialog-footer .el-button:last-child {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

/* 确认按钮悬停的样式 */
.dialog-footer .el-button:last-child:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

/* 如果您的ElementUI版本支持::v-deep，您可以使用它来穿透scoped样式 */
::v-deep .el-checkbox-button__inner {
  /* 同上面的样式 */
}
.file-active {
  background-color: rgba(241, 5, 46, 0.32); /* 选中项的背景颜色 */
}
.fileTitle.selected {
  /* 选中时的样式 */
  background-color: #c8c8c8;
}
.fileTitle:hover {
  background-color: #c8c8c8; /* 鼠标悬停时的背景颜色 */
}
</style>
