<template>
  <div class="game">
    <info :bomb="bomb" 
          :state="game_status" 
          @reset="reset"
          @changeDiff="initStage">
    </info>
    <game-stage   :bomb="bomb"
                  :mapWidth="mapWidth"
                  :mapHeight="mapHeight" 
                  :state="game_status" 
                  @start="game_status=$event"
                  @bombCount="bombCount"
                  @gameover="gameOver"
                  @gameclear="gameClear" 
                  :key="i">
    </game-stage>
  </div>
</template>



<script>
import Info from '@/components/Info.vue'
import GameStage from '@/components/GameStage.vue'

export default {
  name: 'Game',
  components: {
    Info,
    GameStage
  },
  data() {
    return {
      game_status: 0, //0: 開始前、1: 開始、2: ゲーム中、3: 終了
      i: 0,    
      selectDiff: "normal",
      bomb: 10,
      mapWidth: 9,
      mapHeight: 9
    }
  },
  methods: {
      reset: function() {
          this.game_status = 0
          this.initStage(this.selectDiff)
          console.log(this.game_status, this.selectDiff)
          this.i ++ //コンポーネントを再描画 .onceをkillするため
      },
      bombCount: function(val) {
          this.bomb += val
      },
      initStage: function(val) {
          this.selectDiff = val
          if(this.selectDiff == "easy"){
              this.bomb = 5
              this.mapWidth = 7
              this.mapHeight = 7
          }else if(this.selectDiff == "hard"){
              this.bomb = 15
              this.mapWidth = 12
              this.mapHeight = 10
          }else if(this.selectDiff == "expert"){
              this.bomb = 20
              this.mapWidth = 15
              this.mapHeight = 10
          }else{                      //normal
              this.bomb = 10
              this.mapWidth = 9
              this.mapHeight = 9
          }
      },
      gameOver: function(val) {
          this.game_status = val
      },
      gameClear: function(val) {
          this.game_status = val
      }
  }
}
</script>

<style scoped>
.game-stage {
  background-color: #F1CA89;
  padding: 30px 0;
  height: calc(100vh - 80px - 60px); 
  /* calc(100vh - infoHeight - gamestagePadding) */
}
</style>
