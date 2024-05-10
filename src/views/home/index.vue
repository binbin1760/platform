<template>
  <div class="homePage fs12">
    <div class="topBox clearfix">
      <div class="topLeftBox">
        <div class="topLeftTitle clearfix title">
          <span class="img"></span>
          <span>动态</span>
        </div>
        <div class="echartsBox techBg1300"></div>
      </div>
      <div class="topRightBox">
        <div class="topRightTitle clearfix title">
          <span class="img noticeIcon"></span>
          <span>通知</span>
          <span class="img editIcon"></span>
        </div>
        <div class="content topRightContent">
          <div class="noMsg color9">暂时没有公司通知</div>
          <div class="noticeController">
            <div class="currentC"></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomBox clearfix">
      <div class="bottomLeftBox">
        <div class="dealt itemBox">
          <div class="title clearfix">
            <span class="img"></span>
            <span class="todos">待办</span>
            <span class="dones">已办</span>
          </div>
          <div id="tasks" class="contentBox">
            <div v-for="item in todos" :class="item.type">
              <div class="contentTitle">
                <div class="img"></div>
                <div>{{item.name}}：  {{item.num}}个</div>
                <div class="img expand"></div>
              </div>
              <div class="list">{{item.txt}}</div>
            </div>
          </div>
        </div>
        <div class="bottomLeftRight itemBox">
          <div class="title">
            <div v-for="item in types" :class="[item.clas, item.current ? 'current' : '']">{{item.name}}</div>
          </div>
          <div class="content contentBox">
            <div v-for="item in stars" class="itemBox">
              <div class="left">
                <div class="img"></div>
                <div class="txt">{{item.name}}</div>
              </div>
              <div class="color9">虚位以待</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottomRightBox">
        <div class="title clearfix">
          <span class="img"></span>
          <span>快捷入口</span>
        </div>
        <div class="content contentBox">
          <div v-for="item in quickEntrys" class="itemBox" :class="item.type">
            <div class="img"></div>
            <div class="txt">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  const todos = ref([
    {
      name: "待处理",
      num: 0,
      type: "treated",
      txt: "无待处理信息",
    },
    {
      name: "待回复",
      num: 0,
      type: "reply",
      txt: "无待回复信息",
    },
    {
      name: "待审核",
      num: 0,
      type: "audited",
      txt: "无待审核信息",
    },
    {
      name: "预警",
      num: 0,
      type: "warning",
      txt: "无告警信息",
    }
  ])
  const stars = ref([
    {
      name: "绩效明星",
      num: [],
    },
    {
      name: "成长明星",
      num: [],
    },
    {
      name: "获赞达人",
      num: [],
    },
    {
      name: "帮助达人",
      num: [],
    },
  ])
  const types = ref([
    {
      name: "明星",
      clas: "star",
      current: true,
    },
    {
      name: "提醒",
      clas: "remind",
      current: false,
    },
    {
      name: "帮助",
      clas: "help",
      current: false,
    },
    {
      name: "评价",
      clas: "evaluate",
      current: false,
    },
  ])
  const quickEntrys = ref([
    {
      name: "我的绩效",
      type: "mine",
    },
    {
      name: "绩效公示",
      type: "public",
    },
    {
      name: "绩效沟通",
      type: "connect",
    },
    {
      name: "绩效结果",
      type: "result",
    },
  ])
</script>
<style scoped lang="scss">
  .homePage {
    padding: 16px 26px 20px 22px;
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
  .title {
    padding-left: 20px;
    span {
      float: left;
    }
  }
  .topBox {
    min-height: 260px;
    height: 40%;
  }
  .bottomBox {
    height: 60%;
    padding-top: 28px;
    padding-bottom: 50px;
  }
  .topLeftBox, .bottomLeftBox {
    width: 70%;
    margin-right: 12px;
    float: left;
    height: 100%;
  }
  .topRightBox, .bottomRightBox {
    width: calc(30% - 12px);
    float: left;
    height: 100%;
  }
  .topRightBox {
    box-shadow: 0px 6px 6px rgba(210, 210, 210,0.2);
  }
  .img {
    display: inline-block;
    background-image: url("@/assets/images/ehrSpirit.png");
    width: 18px;
    height: 18px;
  }
  .topLeftTitle .img {
    background-position: -388px -54px;
    margin-top: 2px;
    margin-right: 8px;
  }
  .topRightTitle .img,
  .contentTitle .img {
    margin-right: 8px;
  }
  .topRightTitle .noticeIcon {
      background-position: -376px -195px;
  }
  .topRightTitle .editIcon {
    background-position: -240px -112px;
    margin: 0;
    float: right;
  }
  .echartsBox {
    height: calc(100% - 30px);
    width: 100%;
    border-radius: 3px;
    margin-top: 10px;
    box-shadow: 0px 6px 6px rgba(5, 58, 108,0.2);
    background-image: url("@/assets/images/techBg1300.png");
    background-size: cover;
  }
  @media screen and (min-width: 1600px) {
    .echartsBox {
      background-image: url("@/assets/images/techBg1250.png");
    }
  }
  .content {
    padding: 15px 10px 16px 14px;
    margin-top: 10px;
    border: 1px solid #d2d2d2;
    border-radius: 3px;
    height: calc(100% - 30px);
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .noticeController {
    display: flex;
    justify-content: center;
    column-gap: 4px;
    div {
      width: 24px;
      height: 4px;
      background-color: #D2D2D2;
      cursor: pointer;
    }
    .currentC {
      background-color: #5185E6;
    }
  }
  .bottomBox .dealt .title {
      padding-bottom: 18px;
  }
  .bottomBox .dealt {
    margin-right: 12px;
    width: 47%;
    .title .img {
      background-position: -332px -5px;
    }
    .title span ~ span {
      margin-left: 8px;
    }
  }
  .bottomLeftRight {
    width: calc(53% - 12px);
  }
  .bottomLeftBox .itemBox {
    float: left;
    height: 100%;
  }
  .contentTitle {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  #tasks, .bottomRightBox .content {
    height: calc(100% - 38px);
    border: 1px solid #d2d2d2;
    border-radius: 3px;
  }
  #tasks > div {
    padding-bottom: 30px;
  }
  #tasks .list {
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    color: #999999;
    padding-left: 10px;
  }
  #tasks .contentTitle .img {
    width: 22px;
    height: 22px;
  }
  #tasks .contentTitle .expand {
    background-position: -267px -81px;
    width: 14px;
    height: 14px;
    margin-left: auto;
  }
  .treated .contentTitle .img {
    background-position: -478px -23px;
  }
  .reply .contentTitle .img {
    background-position: -456px -47px;
  }
  .audited .contentTitle .img {
    background-position: -478px 0px;
  }
  .warning .contentTitle .img {
    background-position: -478px -48px;
  }
  .bottomLeftRight .title {
    display: flex;
    column-gap: 40px;
    div {
      color: #999999;
      padding-bottom: 8px;
    }
    .current {
      border-bottom: 2px solid #5185E6;
      color: #333333;
    }
  }
  .bottomLeftRight .content {
    height: calc(100% - 37px);
  }
  .bottomRightBox .title {
    padding-bottom: 8px;
  }
  .bottomRightBox .title .img {
    background-position: -357px -194px;
  }
  .contentBox {
    padding: 20px 14px 0 14px;
  }
  .bottomLeftRight .content {
    justify-content: flex-start;
  }
  .bottomLeftRight .itemBox {
    display: flex;
    align-items: center;
    column-gap: 40px;
    height: auto;
    padding-bottom: 40px;
  }
  .bottomLeftRight .img {
    background-position: -265px -164px;
    width: 24px;
    height: 24px;
  }
  .bottomLeftRight .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 6px;
  }
  .bottomRightBox .content {
    justify-content: flex-start;
    row-gap: 10px;
  }
  .bottomRightBox .itemBox {
    border: 1px solid #e9eae9;
    display: flex;
    gap: 10px 12px;
    align-items: center;
    cursor: pointer;
    height: auto;
    padding: 22px 15px;
    border-radius: 4px;
    font-size: 14px;
  }
  .bottomRightBox .content .img {
    width: 30px;
    height: 30px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .bottomRightBox .mine .img {
    background-image: url("@/assets/images/quick_mine.png");
  }
  .bottomRightBox .public .img {
    background-image: url("@/assets/images/quick_public.png");
  }
  .bottomRightBox .connect .img {
    background-image: url("@/assets/images/quick_connect.png");
  }
  .bottomRightBox .result .img {
    background-image: url("@/assets/images/quick_result.png");
  }
</style>
