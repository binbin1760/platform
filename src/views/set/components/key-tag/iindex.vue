<template>
  <span class="tag-box">
    <div class="content">
      <slot></slot>
    </div>
    <el-icon
      v-if="props.tagType"
      :style="{ marginLeft: props.gap }"
      @click="clickCion"
    >
      <Plus
        color="#5284E7"
        v-if="props.tagType === 'add'"
      />
      <Close v-if="props.tagType === 'close'" />
    </el-icon>
  </span>
</template>

<script setup>
  import { Plus, Close } from '@element-plus/icons-vue'
  const props = defineProps({
    tagType: {
      type: String
    },
    color: {
      type: String,
      default: '#333333'
    },
    outline: {
      type: String,
      default: 'solid'
    },
    gap: {
      type: String,
      default: '8px'
    }
  })
  const emit = defineEmits(['clickIcon'])
  function clickCion() {
    emit('clickIcon')
  }
</script>
<style scoped lang="scss">
  .tag-box {
    display: flex;
    align-items: center;
    color: v-bind('props.color');
    font-size: 12px;
    padding: 10px;
    border-color: #d9d9d9;
    border-width: 1px;
    border-style: v-bind('props.outline');
    border-radius: 2px;
    cursor: pointer;
  }
</style>
