<template>
  <div class="info">
      <bomb-count :bomb="bomb"></bomb-count>
      <button @click="reset">Reset</button>
      <timer :state="state"></timer>
  </div>
</template>

<script>
import BombCount from './Information/BombCount.vue'
import Timer from './Information/Timer.vue'
export default {
    name: "Info",
    components: {
        BombCount,
        Timer
    },
    props: [
        "bomb",
        "state"
    ],
    data() {
        return {
            resetState: 0
        }
    },
    methods: {
        reset: function() {
            this.$emit("reset", this.resetState)
        }
    }
}
</script>

<style scoped>
.info{
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #B7CADB;
}

button {
    background-color: #EAE7C6;
    border-radius: 5px;
    border: none;
    width: 90px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color:#3f3f3f;
}

button:hover {
    background-color: #d3d0b2;
}
</style>