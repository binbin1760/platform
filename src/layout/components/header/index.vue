<template>
  <div class="fb header">
    <div class="logo-company">
      <img :src="logo" />
      <div class="y-divider"></div>
      <div class="company">{{ companyName }}</div>
    </div>
    <div class="icon-list">
      <el-popover
        class="hover"
        trigger="hover"
        v-for="(item, index) in iconListItem"
        :popper-style="{ minWidth: '36px !important' }"
        :key="index"
        :show-arrow="false"
        :offset="0"
        :width="item.width"
      >
        <template #reference>
          <div
            class="iconfont icon"
            :class="item.icon"
            :style="item.style"
            @click="item.select"
          ></div>
        </template>
        <div
          v-if="item.title"
          class="tx-center"
        >
          {{ item.title }}
        </div>
        <component :is="item.component"></component>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
  import UserInfo from './components/user-info.vue'
  import WeatherForecast from './components/weather-forecast.vue'
  import logo from '@/assets/pageLogo.svg'

  const router = useRouter()
  const companyName = ref('阳光电源股份有限公司')
  const iconListItem = [
    {
      icon: 'icon-home',
      title: '主页',
      width: 60,
      style: {
        color: ''
      },
      select: () => {
        router.push('/home/dashbord')
      }
    },
    {
      icon: 'icon-tongxunlu',
      title: '通讯录',
      width: 80,
      style: {
        color: '#F29C5F'
      },
      select: () => {
        console.log(1)
      }
    },
    {
      icon: 'icon-rili',
      title: '日历',
      width: 60,
      style: {
        color: ''
      },
      select: () => {
        console.log(1)
      }
    },
    {
      icon: 'icon-tianqi',
      component: WeatherForecast,
      width: 300,
      style: {
        color: '#F29C5F'
      },
      select: () => {}
    },
    {
      icon: 'icon-bangzhu_o',
      title: '帮助',
      width: 60,
      style: {
        color: ''
      },
      select: () => {
        console.log(1)
      }
    },
    {
      icon: 'icon-shezhi',
      title: '设置',
      width: 60,
      style: {
        color: '#F29C5F'
      },
      select: () => {
        router.push('/setting/company')
      }
    },
    {
      icon: 'icon-user',
      component: UserInfo,
      width: 200,
      style: {
        marginLeft: '2px'
      },
      select: () => {
        console.log(1)
      }
    }
  ]
</script>
<style scoped lang="scss">
  .header {
    height: 100%;
  }
  .y-divider {
    height: 22px;
    width: 2px;
    background-color: #d2d2d2;
    margin: 0 8px;
    margin-top: 8px;
  }
  .logo-company {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .company {
    font-size: 16px;
    font-family: Microsoft YaHei !important;
    margin-top: 8px;
  }
  .icon-list {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .hover:deep(.el-popover.el-popper) {
    min-width: 36px;
  }
  .icon {
    cursor: pointer;
    font-size: 22px;
  }
</style>
