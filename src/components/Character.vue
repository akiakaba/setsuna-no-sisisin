<template>
  <div v-if="shows">
    <img class="character left" :class="leftClass" :src="this.left" />
    <img class="character right" :class="rightClass" :src="this.right" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
const states = ["none", "init", "left-win", "right-win"] as const;
export type CharacterState = typeof states[number];

export default Vue.extend({
  name: "Character",
  computed: {
    shows: function () {
      return this.state !== "none";
    },
    leftClass: function () {
      return {
        "left-win": this.state === "left-win",
      };
    },
    rightClass: function () {
      return {
        "right-win": this.state === "right-win",
      };
    },
  },
  props: ["state", "left", "right"],
});
</script>

<style scoped>
.character {
  width: 5rem;
}
.left {
  position: absolute;
  left: 25vw;
}
.left-win {
  left: 80vw;
}
.right {
  position: absolute;
  right: 25vw;
  transform: scale(-1, 1);
}
.right-win {
  right: 80vw;
}
.message {
  font-size: 3rem;
  font-style: italic;
}
</style>
