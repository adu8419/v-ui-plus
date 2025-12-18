// src/components/button/types.ts
import type { ButtonProps } from "element-plus"

// 1. 基础类型
export type ButtonType = "default" | "primary" | "success" | "warning" | "danger" | "info" | "text"
export type ButtonSize = "large" | "default" | "small"

// 2. 你的自定义 Props 接口
export interface VButtonSelfProps {
  /** 是否禁用 */
  disabled?: boolean
  /** 加载状态 */
  loading?: boolean
  /** 加载时是否允许点击 */
  allowLoading?: boolean
  /** 按钮类型 */
  type?: ButtonType
  /** 按钮尺寸 */
  size?: ButtonSize
  /** 是否为文本按钮 */
  text?: boolean
  /** SVG 图标名称 */
  btnSvgName?: string
  /** 加载文本 */
  loadingText?: string
}

// 3. 完整的 VButtonProps
export type VButtonProps = VButtonSelfProps &
  Omit<ButtonProps, "type" | "size" | "disabled" | "loading" | "text">

// 4. 常量（用于 validator）
export const BUTTON_TYPES = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
  "info",
  "text"
] as const
export const BUTTON_SIZES = ["large", "default", "small"] as const
