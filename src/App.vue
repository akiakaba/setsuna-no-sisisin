<template>
  <div id="app" :class="{ shakin: shakesView }">
    <div class="visual-area">
      <div class="title-area" v-if="state === 'initial'">
        <img class="title" src="setsuna_title.png" />
      </div>
      <Finish v-if="state === 'finish'" />
      <template v-else>
        <div v-show="!!(currentStage + 1)">Stage: {{ currentStage + 1 }}</div>
        <div v-show="showResult">{{ result }}</div>
        <ReadyGo class="ready-go" :state="readyGo" />
      </template>
    </div>
    <div class="control-area">
      <button v-show="showStart" @click="next">Click to start</button>
      <button v-show="showNext" @click="next">Click to next</button>
      <button v-show="showReturnTitle" @click="next">
        Click to return to the title
      </button>
      <button v-show="showStrike" @click="strike">Strike!</button>
    </div>
    <div class="description">
      Click the button or push <code class="keyname">space</code> key ASAP.
    </div>
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
import { opponents, Opponent } from "./data";
import ReadyGo, { ReadyGoState } from "./components/ReadyGo.vue";
import Finish from "./components/Finish.vue";

const states = [
  "initial",
  "ready",
  "contest",
  "victory",
  "defeat",
  "finish",
] as const;
type State = typeof states[number];

export default Vue.extend({
  name: "App",
  data() {
    return {
      state: "initial" as State,
      result: "",
      readyGo: "none" as ReadyGoState,
      keyready: true,
      currentStage: -1,
      timer: {
        begin: 0,
        opponentHandle: 0,
      },
    };
  },
  computed: {
    showStart(): boolean {
      return ["initial", "defeat", "finish"].includes(this.state);
    },
    showNext(): boolean {
      return this.state === "victory";
    },
    showResult(): boolean {
      return ["victory", "defeat"].includes(this.state);
    },
    showMessage(): boolean {
      return this.state === "finish";
    },
    hasNextStage(): boolean {
      return opponents.length > this.currentStage + 1;
    },
    showStrike(): boolean {
      return ["ready", "contest"].includes(this.state);
    },
    shakesView(): boolean {
      return this.state === "defeat";
    },
    currentOpponent(): Opponent {
      return opponents[this.currentStage];
    },
  },
  methods: {
    next: function () {
      (this.$refs.keyBindInput as HTMLElement).focus();
      if (this.state === "finish") {
        this.currentStage = -1;
        this.state = "initial";
        this.readyGo = "none";
      } else if (this.hasNextStage) {
        this.currentStage++;
        this.state = "ready";
        this.readyGo = "ready";
        const delayMs = Math.random() * 5000 + 2000;
        const go = () => {
          this.state = "contest";
          this.readyGo = "go";
          this.timer.begin = new Date().getTime();
          this.timer.opponentHandle = setTimeout(() => {
            this.stricken();
          }, this.currentOpponent.time);
        };
        setTimeout(go, delayMs);
      } else {
        this.state = "finish";
      }
    },
    strike: function () {
      if (this.state === "contest") {
        this.state = "victory";
        const score = new Date().getTime() - this.timer.begin;
        clearTimeout(this.timer.opponentHandle);
        this.result = `WIN: ${score} ms`;
      }
    },
    stricken: function () {
      if (this.state === "contest") {
        this.state = "defeat";
        const score = new Date().getTime() - this.timer.begin;
        this.result = `LOSE: ${score} ms`;
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
  components: {
    ReadyGo,
    Finish,
  },
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body {
  background-color: rgb(40, 40, 40);
  color: #b5b5b5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.shakin {
  animation: 0.1s 3 shake;
}
.visual-area {
  width: 100vw;
  height: 80vh;
}
.title-area {
  width: 100%;
  background-color: #343434;
}
.title {
  width: 80vw;
}
.ready-go {
  position: relative;
  top: 50%;
}
.control-area {
  width: 100vw;
  height: 10vh;
}
button {
  font-size: 2rem;
  background-color: darkgrey;
  padding: 0.2em 1em;
}
.description {
  width: 100vw;
  height: 10vh;
  padding: 0.5rem;
}
.keyname {
  background-color: rgb(75, 75, 75);
  border: solid 1px lightgray;
  padding: 0.2em 0.5em;
}
.keyBindInput {
  position: absolute;
  top: -10000px;
}
@keyframes shake {
  0% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
  25% {
    transform: translate(2px, 2px) rotateZ(1deg);
  }
  50% {
    transform: translate(0px, 2px) rotateZ(0deg);
  }
  75% {
    transform: translate(2px, 0px) rotateZ(-1deg);
  }
  100% {
    transform: translate(0px, 0px) rotateZ(0deg);
  }
}
</style>
