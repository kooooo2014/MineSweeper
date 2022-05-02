<template>
  <div class="info">
      <bomb-count :bomb="bomb"></bomb-count>
      <button @click="reset">Reset</button>
      <timer :state="state"></timer>
      <div class="difficulty">
        <select required @change="changediff">
            <option value="normal" selected>normal</option>
            <option value="easy">easy</option>
            <option value="hard">hard</option>
            <option value="expert">expert</option>
        </select>
    </div>
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
    methods: {
        reset: function() {
            this.$emit("reset")
        },
        changediff: function(e) {
            this.$emit("changeDiff", e.target.value)
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

.difficulty {
	overflow: hidden;
	margin: 2em 0;
	text-align: center;

    position: relative;
	border-radius: 5px;
	background: #FBF8F1;
}
.difficulty select {
	width: 100%;
	padding-right: 1em;
	cursor: pointer;
	text-indent: 0.01px;
	text-overflow: ellipsis;
	border: none;
	outline: none;
	background: transparent;
	background-image: none;
	box-shadow: none;
	-webkit-appearance: none;
	appearance: none;

    padding: 8px 38px 8px 8px;
	color: #3f3f3f;
}
.difficulty select::-ms-expand {
    display: none;
}

.difficulty::before {
	position: absolute;
	top: 0.8em;
	right: 0.8em;
	width: 0;
	height: 0;
	padding: 0;
	content: '';
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid #3f3f3f;
	pointer-events: none;
}
option {
    background-color: #FBF8F1;
    padding: 8px 38px 8px 8px;
	color: #3f3f3f;
    border: none;
}
</style>