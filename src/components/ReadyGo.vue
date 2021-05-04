<template>
  <div class="message">{{ message }}</div>
</template>

<script lang="ts">
import Vue from "vue";
const states = ["none", "ready", "go"] as const;
export type ReadyGoState = typeof states[number];

export default Vue.extend({
  name: "ReadyGo",
  computed: {
    message: function () {
      switch (this.$props.state) {
        case "none":
          return "";
        case "ready":
          return "Ready?";
        case "go":
          return "Go!!!";
        default:
          throw Error;
      }
    },
  },
  props: ["state"],
});
</script>

<style scoped>
.message {
  font-size: 3rem;
  font-style: italic;
}
</style>
