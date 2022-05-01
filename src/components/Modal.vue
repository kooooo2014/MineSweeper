<template>
    <div class="modal-wrapper">
        <a href="#!" class="modal-overlay"></a>
        <div class="modal-window">
            <div class="modal-content">
                <p>{{ message }}</p>
            </div>
            <img src="../assets/batu.svg" alt="" @click="modalDelete" class="modal-close">
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: [
        "modalState"
    ],
    computed: {
        message: function() {
            if(this.modalState == "gameover") {
                return "Game Over..."
            }else if(this.modalState == "gameclear") {
                return "Game Clear!!"
            }else {
                return ""
            }
        }
    },
    methods: {
        modalDelete: function() {
            this.$emit("modalDelete", "")
        }
    }

}
</script>

<style>
.modal-wrapper {
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 40px 10px;
  text-align: center;
}

.modal-wrapper:target {
  opacity: 1;
  visibility: visible;
  transition: opacity .4s, visibility .4s;
}

.modal-wrapper::after {
  display: inline-block;
  height: 100%;
  margin-left: -.05em;
  vertical-align: middle;
  content: ""
}

.modal-wrapper .modal-window {
  box-sizing: border-box;
  display: inline-block;
  z-index: 20;
  position: relative;
  width: 70%;
  max-width: 600px;
  padding: 30px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, .6);
  vertical-align: middle
}

.modal-overlay {
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5)
}
.modal-close {
    cursor: pointer;
}

.modal-wrapper .modal-close {
  z-index: 20;
  position: absolute;
  top: 8px;
  right: 10px;
  width: 20px;
}

.modal-wrapper .modal-close:hover {
  color: #2b2e38 !important
}

p {
    font-weight: bold;
    font-size: 30px;
}
</style>