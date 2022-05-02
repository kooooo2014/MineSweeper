<template>
    <div class="game-stage">
        <div class="panels" v-for="(m, i) in map" :key="i">
            <panel v-for="(n, j) in m" :key="j" 
                   @click.right.native.prevent="flag(i, j)"
                   @click.left.native.once="open(i, j)"
                   :panel="n"
                   :isopen="isOpen[i][j]">
            </panel>
        </div>
        <modal v-show="modalOpen" :modalState="modalState" @modalDelete="modalState = $event"></modal>
    </div>
</template>

<script>
import Panel from './Panel.vue'
import Modal from './Modal.vue'
import MapGenerate from '../core/MapGenerate'
import MapSet from '../core/MapSet'

export default {
    name: "GameStage",
    components: {
        Panel,
        Modal
    },
    props: [
        "bomb",
        "mapWidth",
        "mapHeight",
        "state", //0: 開始前、1: 開始、2: ゲーム中、3: 終了
    ],
    data() {
        return {
            map: [],
            isOpen: [],
            openCount: 0,
            modalState: "",
            maxBomb: this.bomb
        }
    },
    watch: {
        mapWidth: {
            handler(){
                this.map = []
                this.map = MapSet(this.mapHeight, this.mapWidth)
                this.isOpen = []
                this.isOpen = MapSet(this.mapHeight, this.mapWidth)
                this.maxBomb = this.bomb
            },
            immediate: true
        },
        state: {
            handler(){
                if(this.state == 0){             
                    this.map = []
                    this.map = MapSet(this.mapHeight, this.mapWidth)
                    this.isOpen = []
                    this.isOpen = MapSet(this.mapHeight, this.mapWidth)
                    this.$forceUpdate()
                    this.openCount = 0
                }
            },
            immediate: true            
        }
    },
    computed: {
        modalOpen: function() {
            if(this.modalState == "gameover" || this.modalState == "gameclear"){
                return true
            }else {
                return false
            }
        }
    },
    methods: {
        open: function(i, j) {
            if(this.state == 0) {
                this.$emit("start", 1)
                this.map = MapGenerate(this.map, this.mapHeight, this.mapWidth, this.maxBomb, i, j)
            }
            
            if(this.map[i][j] < 0) {
                this.isOpen[i].splice(j, 1, 1)
                this.game_over()
            }

            this.open_neighbor(i, j)

            if(this.openCount == (this.mapWidth * this.mapHeight) - this.maxBomb){
                this.game_clear()
            }
        },
        flag: function(i, j) {
            if(this.isOpen[i][j] == -1){ //-1: フラッグ付き、0: 開いていない状態、1: 開いている状態
                this.isOpen[i].splice(j, 1, 0)
                this.$emit("bombCount", 1)
            }else if(this.isOpen[i][j] == 0) {
                this.isOpen[i].splice(j, 1, -1)
                this.$emit("bombCount", -1)
            }           
        },
        open_neighbor: function(i, j) {
            if(i<0 || j<0 || i>=this.mapHeight || j>=this.mapWidth){ return }

            if(this.isOpen[i][j] == 1){ return }

            if(this.map[i][j] < 0){ return }

            this.isOpen[i].splice(j, 1, 1)
            this.openCount ++

            if(this.map[i][j] == 0) {
                this.open_neighbor(i-1, j-1)
                this.open_neighbor(i-1, j)
                this.open_neighbor(i-1, j+1)
                this.open_neighbor(i, j-1)
                this.open_neighbor(i, j+1)
                this.open_neighbor(i+1, j-1)
                this.open_neighbor(i+1, j)
                this.open_neighbor(i+1, j+1)
            }
        },
        game_over: function() {
            this.modalState = "gameover"
            this.$emit("gameover", 3)
        },
        game_clear: function() {
            this.modalState = "gameclear"
            this.$emit("gameclear", 3)
        }
    },
}
</script>

<style scoped>
.panels{
    display: flex;
    justify-content: center;
}
</style>