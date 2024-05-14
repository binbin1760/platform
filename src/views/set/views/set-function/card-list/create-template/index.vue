<template>
  <div class="flex fd-column template">
    <BreadCrumb
      :data="tags"
      @select="selectTagViews"
      @back="backTo"
    />
    <div class="create-template mt12">
      <div class="top-form">
        <div class="flex gap36 flex-wrap ai-center">
          <div class="tips">
            <span>绩效模板名称：</span>
            <el-input
              class="el-input"
              v-model="templateData.name"
              placeholder="请输入绩效模板名称"
            ></el-input>
          </div>
          <div class="tips">
            <span>绩效模板名称：</span>
            <el-input
              class="el-input"
              v-model="templateData.explain"
              placeholder="请输入备注说明"
            ></el-input>
          </div>
        </div>
        <div class="flex gap36 flex-wrap ai-center mt16">
          <div class="tips">
            <span>绩效模板类型：</span>
            <el-select
              class="el-select"
              v-model="templateData.type"
              placeholder="请选择模板类型"
            >
              <el-option
                v-for="item in templateType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="tips">
            <span>引用现有模板：</span>
            <el-select
              class="el-select"
              v-model="templateData.preset"
              placeholder="请选择现有模板"
            >
              <el-option
                v-for="item in templatePreset"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </div>
      <div class="flex ai-center mt20 apply-range">
        <div>绩效应用范围：</div>
        <div class="flex ai-center select-list">
          <el-checkbox
            v-for="(item, index) in rangeCheckoutList"
            :key="index"
            v-model="item.value"
            :label="item.label"
            size="small"
            :style="{ marginRight: '24px' }"
            @change="rangeCheckoutBoxChange(index, $event)"
          />
        </div>
      </div>
      <div class="flex ai-start mt20 template-set">
        <div class="template-set-title">模板绩效设置：</div>
        <div class="template-set-type">
          <el-checkbox
            v-for="(item, index) in templateCheckType"
            :key="index"
            v-model="item.value"
            :label="item.label"
            size="small"
            :style="{ marginRight: '24px' }"
            @change="getTemplateSetType(index, $event)"
          />
        </div>
        <div>
          <el-checkbox
            :disabled="!templateCheckType[0].value"
            v-for="(item, index) in mergeSetCheckList"
            :key="index"
            v-model="item.value"
            :label="item.label"
            size="small"
            :style="{ marginRight: '24px' }"
            @change="mergeCheckBoxChange(index, $event)"
          />

          <div>
            <el-checkbox
              :disabled="!templateCheckType[1].value"
              v-for="(item, index) in separateSetCheckList"
              :key="index"
              v-model="item.value"
              :label="item.label"
              size="small"
              :style="{ marginRight: '24px' }"
              @change="separateCheckBoxChange(index, $event)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="key-words mt12 flex1">
      <SetIfrem
        v-if="templateCheckType[0].value"
        title="绩效指标分类"
      >
        <div>
          <div class="permance-type">
            <div class="add">
              <el-icon>
                <Plus />
              </el-icon>
              添加
            </div>
            <KeyTag
              v-for="(item, index) in performanceTag1"
              ::key="index"
              tagType="close"
              @clickIcon="closeTag"
            >
              <div>{{ item.label }}</div>
            </KeyTag>
          </div>
          <div class="permance-type2">
            <KeyTag
              v-for="(item, index) in performanceTag2"
              :key="index"
              :tagType="item.type"
              @clickIcon="closeTag"
            >
              <div>{{ item.label }}</div>
            </KeyTag>
          </div>
        </div>
      </SetIfrem>
      <SetIfrem title="选用模板关键字段">
        <div class="permance-type">
          <KeyTag
            v-for="(item, index) in selectKeyList"
            ::key="index"
            tagType="close"
          >
            {{ item.label }}
          </KeyTag>
          <!-- del -->
          <KeyTag
            v-for="(item, index) in selectKeyList"
            ::key="index"
            tagType="close"
          >
            {{ item.label }}
          </KeyTag>
          <KeyTag
            v-for="(item, index) in selectKeyList"
            ::key="index"
            tagType="close"
          >
            {{ item.label }}
          </KeyTag>
        </div>
      </SetIfrem>
      <SetIfrem title="备用模板关键字段">
        <div class="permance-type">
          <div class="add">
            <el-icon>
              <Plus />
            </el-icon>
            添加
          </div>
          <KeyTag
            v-for="(item, index) in spareKeyList"
            :key="index"
            :tagType="item.type"
            @clickIcon="closeTag"
          >
            <div>{{ item.label }}</div>
          </KeyTag>
        </div>
      </SetIfrem>
      <div class="btns">
        <div class="create">生成模板</div>
        <div class="init">初始化</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { KeyTag, SetIfrem } from '../../../../components'
  import { Plus, Close } from '@element-plus/icons-vue'
  const router = useRouter()
  const tags = ref([
    { label: '功能设置', value: '1' },
    { label: '绩效管理', value: '2' },
    { label: '创建绩效模板', value: '3' }
  ])
  const templateData = reactive({
    name: '',
    explain: '',
    type: null,
    preset: null
  })

  const templateType = ref([
    { label: '百分比权重', value: 0 },
    { label: '权重分值', value: 1 }
  ])

  const templatePreset = ref([
    { label: '模板1', value: 1 },
    { label: '模板2', value: 2 },
    { label: '模板3', value: 3 }
  ])

  const rangeCheckoutList = ref([
    { label: '组织绩效方案', value: false },
    { label: '部门绩效方案', value: false },
    { label: '高/中层绩效方案', value: false },
    { label: '员工绩效方案', value: false },
    { label: '项目绩效方案', value: false },
    { label: '组织指标库模板', value: false },
    { label: '部门指标库模板', value: false },
    { label: '360评价', value: false }
  ])

  const templateCheckType = ref([
    { label: '并表式模板', value: true },
    { label: '分项式模板', value: false }
  ])

  const mergeSetCheckList = ref([
    { label: '定量指标考核', value: false },
    { label: '非定量指标考核', value: false },
    { label: '加减分项考核', value: false }
  ])

  const separateSetCheckList = ref([
    { label: '定量指标考核', value: false },
    { label: '非定量指标考核', value: false },
    { label: '加减分项考核', value: false },
    { label: '其他考核', value: false }
  ])

  const performanceTag1 = ref([
    { label: '评价人设置', value: 1 },
    { label: '序号', value: 2 },
    { label: '单位', value: 3 },
    { label: '考核标准/计算公式', value: 4 }
  ])

  const performanceTag2 = ref([
    { label: '定量指标考核', type: 'add' },
    { label: '评价人设置', type: 'close' },
    { label: '非定量指标考核', value: 'add' },
    { label: '加减分项考核', value: 'add' }
  ])

  const selectKeyList = ref([
    { label: '序号', value: 1 },
    { label: '单位', value: 2 },
    { label: '考评标准/计算公式', value: 3 },
    { label: '指标说明', value: 4 },
    { label: '评价人设置', value: 5 }
  ])

  const spareKeyList = ref([
    { label: '序号', value: 1, type: null },
    { label: '单位', value: 2, type: null },
    { label: '考评标准/计算公式', value: 3, type: 'close' },
    { label: '指标说明', value: 4, type: 'close' },
    { label: '评价人设置', value: 5, type: 'close' }
  ])

  function backTo() {
    router.push('/setting/function')
  }

  function selectTagViews(val) {
    console.log(val)
  }

  function rangeCheckoutBoxChange(index, val) {
    console.log(index, val)
  }

  function getTemplateSetType(index, val) {
    templateCheckType.value.forEach((item, i) => {
      if (i === index) {
        item.value = val
      } else {
        item.value = !val
      }
    })
  }

  function mergeCheckBoxChange(index, val) {
    console.log(index, val)
  }

  function separateCheckBoxChange(index, val) {
    console.log(index, val)
  }

  function closeTag() {
    console.log(1)
  }
</script>
<style scoped lang="scss">
  .template {
    height: 100%;
    padding-bottom: 12px;
  }
  .create-template {
    background-color: #ffffff;
    border-radius: 2px;
    padding: 24px;
    font-size: 12px;
  }
  .tips {
    font-size: 12px;
    white-space: nowrap;
  }
  .el-input {
    width: 240px;
    font-size: 12px;
  }
  .el-select {
    width: 240px;
  }
  .el-select :deep(.el-select__placeholder) {
    font-size: 12px;
  }
  .apply-range {
    padding: 20px 0;
    border-top: 1px dashed #e9e9e9;
    border-bottom: 1px dashed #e9e9e9;
    white-space: nowrap;
  }
  .select-list {
    flex-wrap: wrap;
  }
  .template-set-title {
    line-height: 23px;
  }
  .template-set-type {
    display: flex;
    flex-direction: column;
  }

  .key-words {
    background-color: #ffffff;
    border-radius: 2px;
    padding: 12px 24px;
    font-size: 12px;
  }
  .add {
    color: #5284e7;
    display: inline-block;
    font-size: 12px;
    padding: 10px;
    border: 1px dashed #5284e7;
    border-radius: 2px;
    cursor: pointer;
  }
  .permance-type {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .permance-type2 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .btns {
    margin-top: 24px;
    display: flex;
    align-items: center;
  }
  .btns .create {
    border-radius: 2px;
    padding: 8px 16px;
    background: #5284e7;
    color: #ffffff;
    cursor: pointer;
    margin-right: 8px;
  }
  .btns .init {
    border-radius: 2px;
    padding: 7px 15px;
    background: #ffffff;
    color: #333333;
    cursor: pointer;
    border: 1px solid #d9d9d9;
  }
  /* css 原子 */
  .flex {
    display: flex;
  }
  .flex1 {
    flex: 1;
  }
  .fd-column {
    flex-direction: column;
  }
  .gap36 {
    gap: 36px;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .ai-center {
    align-items: center;
  }
  .ai-start {
    align-items: start;
  }
  .mt16 {
    margin-top: 16px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mt12 {
    margin-top: 12px;
  }
</style>
