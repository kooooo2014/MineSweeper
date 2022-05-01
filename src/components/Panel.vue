<template>
    <div>
        <transition>
            <div class="panel" :class="panelcss" v-show="open"></div>
        </transition>
        <div class="panel unopen" :class="flag" v-show="!open"></div>
    </div>
    
</template>

<script>
export default {
    name: "Panel",
    props: [
        "panel",
        "isopen",
    ],
    computed: {
        open: function() {
            if(this.isopen == 0 || this.isopen == -1){
                return false
            }else {
                return true
            }
        },
        flag: function() {
            if(this.isopen == -1){
                return "flag"
            }else{
                return null
            }
        },
        panelcss: function() {
            if(this.panel < 0) {
                return "bomb"
            }else if(this.panel == 0) {
                return "zero"
            }else if(this.panel == 1) {
                return "one"
            }else if(this.panel == 2) {
                return "two"
            }else if(this.panel == 3) {
                return "three"
            }else if(this.panel == 4) {
                return "four"
            }else if(this.panel == 5) {
                return "five"
            }else if(this.panel == 6) {
                return "six"
            }else if(this.panel == 7) {
                return "seven"
            }else{
                return "eight"
            }
        }
    }
    
}
</script>

<style scoped>
.panel {
    margin: 1px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    user-select: none;
    background-color: #EAE7C6;
}
.panel:hover{
    cursor: pointer;
}
.bomb {
    background-image: url("../assets/bomb.svg");
    background-size: 60%;
}
.one {
    background-image: url("../assets/one.png");
}
.two {
    background-image: url("../assets/two.png");
}
.three {
    background-image: url("../assets/three.png");
}
.four {
    background-image: url("../assets/four.png");
}
.five {
    background-image: url("../assets/five.png");
}
.six {
    background-image: url("../assets/six.png");
}
.seven {
    background-image: url("../assets/seven.png");
}
.eight {
    background-image: url("../assets/eight.png");
}

.unopen {
    background-color: #FBF8F1;
}

.flag {
    background-color: #FBF8F1;
    background-image: url("../assets/flag.svg");
}

/* animation */
/* 表示アニメーションをする前のスタイル */
.v-enter {
  opacity: 0;
}

/* 表示アニメーション後のスタイル */
.v-enter-to {
  opacity: 1;
}

/* 表示アニメーション動作中のスタイル */
.v-enter-active {
  transition: all 500ms;
}

/* 非表示アニメーション動作前のスタイル */
.v-leave {
  opacity: 1;
}

/* 非表示アニメーション動作後のスタイル */
.v-leave-to {
  opacity: 0;
  transform: scale(2, 2);
}

/* 非表示アニメーション動作中のスタイル */
.v-leave-active {
  transition: all 500ms;
}
</style>