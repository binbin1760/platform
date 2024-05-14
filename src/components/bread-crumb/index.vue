<template>
  <div class="bread-crumb-box">
    <div class="bread-crumb">
      <div
        class="bread-crumb-item"
        @click="clickItem(item)"
        v-for="(item, index) in props.data"
      >
        {{ item.label }}
      </div>
    </div>
    <div
      class="back"
      @click="backTo"
    >
      返回
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Array
    },
    padding: {
      type: String,
      default: '12px 24px'
    }
  })

  const emit = defineEmits(['back', 'select'])
  function backTo() {
    emit('back')
  }

  function clickItem(val) {
    emit('select', val)
  }
</script>
<style scoped lang="scss">
  .bread-crumb-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #333333;
    background-color: white;
    padding: v-bind('props.padding');
  }
  .bread-crumb {
    display: flex;
    align-items: center;
  }
  .bread-crumb-item {
    padding: 0 6px;
    border-right: 1px solid #333333;
    padding-bottom: 2px;
    cursor: pointer;
  }
  .bread-crumb-item:last-child {
    border-right: none;
  }
  .bread-crumb-item:first-child {
    padding-left: 0;
  }
  .back {
    border: 1px solid #eeeeee;
    background-color: white;
    white-space: nowrap;
    padding: 4px 8px;
    border-radius: 2px;
    cursor: pointer;
  }
</style>
