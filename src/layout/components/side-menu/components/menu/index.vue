<template>
  <template
    v-for="item in routes"
    :key="item.path"
  >
    <el-sub-menu
      :index="item.path"
      v-if="item.children"
    >
      <template #title>
        {{ item.meta.name }}
      </template>
      <recursion-menu :routes="item.children" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="item.path"
      @click="toTargetPage(item.path)"
    >
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
      function toTargetPage(path) {
        router.push(path)
      }
      return {
        routes,
        toTargetPage
      }
    }
  })
</script>

<style scoped lang="scss"></style>
