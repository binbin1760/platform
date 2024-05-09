<template>
  <div class="homePage">
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
          <div class="noMsg">暂时没有公司通知</div>
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
            <div class="treated">
              <div class="contentTitle">
                <span class="img"></span>
                <span>待处理: 0个</span>
                <span class="img expand"></span>
              </div>
            </div>
            <div class="reply">
              <div class="contentTitle">
                <span class="img"></span>
                <span>待回复: 0个</span>
                <span class="img expand"></span>
              </div>
            </div>
            <div class="audited">
              <div class="contentTitle">
                <span class="img"></span>
                <span>待审核: 0个</span>
                <span class="img expand"></span>
              </div>
            </div>
            <div class="warning">
              <div class="contentTitle">
                <span class="img"></span>
                <span>预警: 0个</span>
                <span class="img expand"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomLeftRight itemBox">
          <div class="title">
            <div class="star current">明星</div>
            <div class="remind">提醒</div>
            <div class="help">帮助</div>
            <div class="evaluate">评价</div>
          </div>
          <div class="content contentBox">

          </div>
        </div>
      </div>
      <div class="bottomRightBox">
        <div class="title clearfix">
          <span class="img"></span>
          <span>快捷入口</span>
        </div>
        <div class="content contentBox">

        </div>
      </div>
    </div>
  </div>
</template>


<script setup></script>
<style scoped lang="scss">
  * {
    font-size: 12px;
  }
  .homePage {
    padding: 10px 26px 20px 22px;
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
  .title .img,
  .contentTitle .img {
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
    margin-top: 2px;
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
  .techBg1300 {
    height: calc(100% - 30px);
    width: 100%;
    border-radius: 3px;
    margin-top: 10px;
    box-shadow: 0px 6px 6px rgba(5, 58, 108,0.2);
    background-image: url("@/assets/images/techBg1300.png");
    background-size: cover;
  }
  .content {
    padding: 15px 10px 16px 14px;
    margin-top: 10px;
    border: 1px solid #d2d2d2;
    border-radius: 3px;
    height: calc(100% - 30px);
    font-size: 12px;
    color: #999999;
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
    .img.expand {
      width: 14px;
      height: 14px;
      background-position: -267px -81px;
      margin-left: auto;
    }
  }
  #tasks, .bottomRightBox .content {
    height: calc(100% - 38px);
    border: 1px solid #d2d2d2;
    border-radius: 3px;
  }
  #tasks > div {
    padding-bottom: 30px;
  }
  #tasks .contentTitle .img {
    width: 22px;
    height: 22px;
  }
  #tasks .contentTitle .expand {
    background-position: -267px -81px;
  }
  .treated .contentTitle .img {
    background-position: -478px -23px;
  }
  .reply .contentTitle .img {
    background-position: -478px -23px;
  }
  .audited .contentTitle .img {
    background-position: -478px -23px;
  }
  .warning .contentTitle .img {
    background-position: -478px -23px;
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
  .bottomRightBox .img {
    background-position: -357px -194px;
  }
  .contentBox {
    padding: 20px 14px 0 14px;
  }
</style>
