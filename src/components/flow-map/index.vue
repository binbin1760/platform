<template>
  <div
    class="flowmap"
    ref="flowmap"
  ></div>
</template>

<script setup>
  import LogicFlow from '@logicflow/core'
  import '@logicflow/core/dist/style/index.css'
  import { DndPanel, SelectionSelect } from '@logicflow/extension'
  import { nodeMenu } from './config/dndPanel.js'

  const nodes = defineModel('nodes', { type: Object, required: true })
  const flowmap = ref(null)

  const emit = defineEmits(['selectNode'])
  // 注册流程图
  function initaFlowMap() {
    LogicFlow.use(DndPanel)
    LogicFlow.use(SelectionSelect)
    // 注册LogicFlow
    const lf = new LogicFlow({
      container: document.querySelector('.flowmap'),
      grid: false,
      height: props.flowMapH || defaultH,
      plugins: [DndPanel, SelectionSelect]
    })
    //渲染
    lf.render({
      nodes: nodes.value,
      edges: [
        {
          sourceNodeId: '1',
          targetNodeId: '2',
          type: 'polyline'
        }
      ]
    })
    // 渲染拖拽菜单
    lf.extension.dndPanel.setPatternItems(nodeMenu)

    lf.on('node:click', (data) => {
      emit('selectNode', data)
    })
  }
  onMounted(() => {
    initaFlowMap()
  })
  const props = defineProps(["flowMapH"]);
  const defaultH = 500;
</script>
<style scoped lang="scss">
  .flowmap:deep(.lf-dndpanel) {
    background-color: #ffffff;
    width: 80px;
    height: 100%;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;
    border-right: 3px solid #808080;
    padding: 10px;
  }
  .flowmap:deep(.lf-dndpanel .lf-dnd-item) {
    width: 100%;
    text-align: center;
    color: inherit;
  }
</style>
