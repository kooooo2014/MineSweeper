<template>
  <div class="game">
    <info :bomb="bomb" :state="game_status" @reset="reset"></info>
    <game-stage   :bomb="bomb" 
                  :state="game_status" 
                  @start="game_status=$event"
                  @bombCount="bombCount"
                  @gameover="gameOver"
                  @gameclear="gameClear" 
                  :key="i">
    </game-stage>
  </div>
  <!-- memo レベル変更、モーダルに結果表示、デプロイ -->
</template>



<script>
// @ is an alias to /src
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
      bomb: 15,
      game_status: 0, //0: 開始前、1: 開始、2: ゲーム中、3: 終了
      i: 0
    }
  },
  methods: {
      reset: function(val) {
          this.game_status = val
          this.bomb = 15
          this.i ++ //コンポーネントを再描画 .onceをkillするため
      },
      bombCount: function(val) {
        this.bomb += val
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
