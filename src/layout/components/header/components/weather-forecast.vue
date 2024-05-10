<template>
  <div class="weather">
    <div class="weather-show">
      <div class="img-title">
        <div class="title">天气预报</div>
        <div class="img"></div>
      </div>
      <div class="y-xdivider"></div>
      <div class="weather-info">
        <div class="address-time">
          <div class="address">成都</div>
          <div class="ft16 time">2018年5月14日</div>
        </div>
        <div class="data">18°C</div>
      </div>
    </div>
    <div class="weather-message">阴雨天 空气质量69(良)</div>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
  .weather-show {
    display: flex;
    justify-content: space-between;
  }
  .y-xdivider {
    width: 2px;
    height: 160px;
    margin-top: 20px;
    background: linear-gradient(to bottom, #ffffff, #efefef);
  }
  .title {
    color: #333333;
    font-family: Microsoft YaHei !important;
    font-size: 24px;
  }
  .img-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img {
    width: 96px;
    height: 80px;
    background-color: aqua;
    margin-top: 25px;
  }
  .address-time {
    color: var(--primary-color);
    margin-top: 20px;
  }
  .address {
    font-size: 22px;
    text-align: right;
  }
  .time {
    color: #777777;
    text-align: right;
  }
  .data {
    font-size: 64px;
    color: var(--primary-color);
    margin-top: 50px;
  }
  .weather-message {
    text-align: center;
  }
</style>
