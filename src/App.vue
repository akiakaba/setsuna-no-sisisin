<template>
  <div id="app">
    <div>
      Click the button or push <code class="keyname">space</code> key ASAP.
    </div>
    <button v-show="displayStart" @click="start">Start</button>
    <button v-show="displayStrike" @click="strike">Strike!!!</button>
    <div v-show="!!message">{{ message }}</div>
    <input
      class="keyBindInput"
      ref="keyBindInput"
      type="text"
      @keydown.space="keydown"
      @keyup.space="keyup"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const states = ["initial", "ready", "contest", "victory", "defeat"] as const;
type State = typeof states[number];

export default Vue.extend({
  name: "App",
  data() {
    return {
      state: "initial" as State,
      message: "",
      keyready: true,
      timer: {
        begin: 0,
        opponentHandle: 0,
      },
    };
  },
  computed: {
    displayStart(): boolean {
      return ["initial", "victory", "defeat"].includes(this.state);
    },
    displayStrike(): boolean {
      return ["ready", "contest"].includes(this.state);
    },
    opponentSkillTime(): number {
      return 300;
    },
  },
  methods: {
    start: function () {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.$refs.keyBindInput as any).focus();
      this.state = "ready";
      this.message = "Ready?";
      const delayMs = Math.random() * 5000 + 2000;
      const go = () => {
        this.state = "contest";
        this.message = "Go!!!";
        this.timer.begin = new Date().getTime();
        this.timer.opponentHandle = setTimeout(() => {
          this.stricken();
        }, this.opponentSkillTime);
      };
      setTimeout(go, delayMs);
    },
    strike: function () {
      if (this.state === "contest") {
        this.state = "victory";
        const score = new Date().getTime() - this.timer.begin;
        this.message = `WIN: ${score} ms`;
      }
    },
    stricken: function () {
      if (this.state === "contest") {
        this.state = "defeat";
        const score = new Date().getTime() - this.timer.begin;
        this.message = `LOSE: ${score} ms`;
      }
    },
    keydown: function () {
      if (this.keyready) {
        this.keyready = false;
        this.strike();
      }
    },
    keyup: function () {
      this.keyready = true;
    },
  },
});
</script>

<style>
#app {
  font-size: 2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button {
  font-size: 2rem;
}

.keyname {
  background-color: lightgray;
  border: solid 1px gray;
}
.keyBindInput {
  position: absolute;
  top: -10000px;
}
</style>
