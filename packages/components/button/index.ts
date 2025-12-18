// src/components/button/index.ts
import Button from "./src/index.vue"
import { withInstall } from "../utils/install"

export const VButton = withInstall(Button)
export default VButton
// 导出类型
export * from "./src/type"
