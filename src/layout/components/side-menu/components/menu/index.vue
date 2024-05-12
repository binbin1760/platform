<template>
  <template
    v-for="item in menu"
    :key="item.path"
  >
    <el-sub-menu
      :index="item.path"
      v-if="item.children && !item.meta.hidden"
    >
      <template #title>
        <i
          class="iconfont sideicon"
          :class="item.meta.icon"
        ></i>
        <span>{{ item.meta.name }}</span>
      </template>
      <recursion-menu :routes="item.children" />
    </el-sub-menu>
    <el-menu-item
      class="bg"
      v-else-if="!item.meta.hidden"
      :index="item.path"
      @click="toTargetPage(item.path)"
    >
      <span
        class="iconfont sideicon"
        :class="item.meta.icon"
      ></span>
      <template #title>
        {{ item.meta.name }}
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'recursion-menu',
    props: {
      routes: {
        type: Object
      }
    },
    setup(props) {
      const { routes } = toRefs(props)
      const router = useRouter()
      const menu = routes.value.map((item) => {
        if (item.children && item.children.length === 1) {
          item = item.children[0]
        }
        return item
      })
      function toTargetPage(path) {
        router.push(path)
      }
      return {
        menu,
        toTargetPage
      }
    }
  })
</script>

<style scoped lang="scss">
  .el-menu-item.is-active {
    background-color: #6391e9 !important;
  }
  .el-menu-item:hover {
    background-color: #6391e9 !important;
  }
  .el-sub-menu:deep(.el-sub-menu__title:hover) {
    background-color: #6391e9 !important;
  }

  .icon-img {
    width: 20px;
    margin-right: 10px;
  }
  .sideicon {
    color: #ffffff;
    font-size: 18px;
    margin-right: 4px;
  }
</style>
