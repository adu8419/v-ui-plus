<script setup lang="ts">
import { computed, useAttrs } from "vue"
import { BUTTON_TYPES, BUTTON_SIZES, type ButtonType, type ButtonSize } from "./type"
// import VLoading from "../../loading"

const attrs = useAttrs()
const emit = defineEmits<{
  click: [e: MouseEvent]
}>()

// 使用圆括号 () 而不是花括号 {}
const props = withDefaults(
  defineProps<{
    disabled?: boolean
    loading?: boolean
    allowLoading?: boolean
    type?: ButtonType
    size?: ButtonSize
    text?: boolean
    btnSvgName?: string
    loadingText?: string
  }>(),
  {
    disabled: false,
    loading: false,
    allowLoading: true,
    type: "primary",
    size: "default",
    text: false,
    btnSvgName: "",
    loadingText: "loading..."
  }
)

// 计算属性
const btnDisabled = computed(() => props.disabled || (props.loading && props.allowLoading))

const typeVal = computed(() => {
  if (!BUTTON_TYPES.includes(props.type as any)) {
    console.warn(`Invalid button type: ${props.type}. Allowed values: ${BUTTON_TYPES.join(", ")}`)
    return "primary"
  }
  return props.type === "text" ? "" : props.type
})
const textVal = computed(() => props.type === "text" || props.text)
const sizeVal = computed(() => {
  if (!BUTTON_SIZES.includes(props.size as any)) {
    console.warn(`Invalid button size: ${props.size}. Allowed values: ${BUTTON_SIZES.join(", ")}`)
    return "default"
  }
  return props.size
})
// 合并 attrs
const buttonAttrs = computed(() => ({
  ...attrs,
  // 过滤掉已定义的 props
  disabled: undefined,
  loading: undefined,
  allowLoading: undefined,
  btnSvgName: undefined,
  loadingText: undefined
}))

function onClick(e: MouseEvent) {
  if (props.loading) return
  emit("click", e)
}
</script>
<template>
  <el-button
    v-bind="buttonAttrs"
    :disabled="btnDisabled"
    :type="typeVal"
    :text="textVal"
    :size="sizeVal"
    class="ui-button"
    @click="onClick"
  >
    <!-- <v-svg v-if="props.btnSvgName && !props.loading" :svg="props.btnSvgName" class="btn-icon" /> -->
    <slot v-if="!props.loading" />
    <span v-if="props.loading">
      <!-- <v-loading :icon="'loadingWhite'" :text="props.loadingText" /> -->
    </span>
  </el-button>
</template>
