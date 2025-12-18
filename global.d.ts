// GlobalComponents for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    VButton: typeof import("@bdp/v-ui-plus")["VButton"]
  }
}

export {}
