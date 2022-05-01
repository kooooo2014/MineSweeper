<template>
    <div class="timer">
        <img src="../../assets/clock.svg" alt="clock">
        <p>{{ min }}:{{ sec }}</p>
        </div>
</template>

<script>
export default {
    name: "Timer",
    props: [
        "state",
    ],
    data() {
        return {
            min: "00",
            sec: "00",
            timerObj: null,
        }
    },
    watch: {
        state: function(){
            if(this.state == 0) {
                this.timerStop()
                this.timerInit()
            }else if(this.state == 1){
                this.timerStart()
            }else if(this.state == 3){
                this.timerStop()
            }
        }
    },
    computed: {
        displaySecond: function() {
            if(this.sec < 10) {
                return "0" + this.displaySecond
            }else {
                return this.sec
            }
        },
        displayMinute: function(){
            if(this.min < 10) {
                return "0" + this.displayMinute
            }else {
                return this.min
            }
        }
    },
    methods: {
        count: function() {
            if(this.sec >= 59) {
                this.sec = 0
                this.min ++
            } else {
                this.sec ++
            }//99m59s超えたら表示バグる

            this.min = ('0' + this.min).slice(-2)
            this.sec = ('0' + this.sec).slice(-2)

        },
        timerInit: function() {
            this.min = "00"
            this.sec = "00"
        },
        timerStart: function() {        
            this.timerObj = setInterval(()=>{
                this.count()
            }, 1000)
        },
        timerStop: function() {
            clearInterval(this.timerObj)
        }
    }

}
</script>

<style scoped>
.timer {
    width: 100px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    background-color: #FBF8F1;
    display: flex;
}

img {
    line-height: 20px;
    width: 20px;
}

p {
    margin: auto;
    line-height: 40px;
    font-size: 24px;
    font-weight: bold;
    color:#3f3f3f;
}
</style>