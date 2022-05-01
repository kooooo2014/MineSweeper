<template>
    <div class="bomb-count">
        <img src="../../assets/bomb.svg" alt="bomb">
        <p>{{bomb}}</p>
    </div>
</template>

<script>
export default {
    name: "BombCount",
    props: [
      'bomb'
    ]   
}
</script>

<style scoped>
.bomb-count {
    width: 100px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    background-color: #FBF8F1;
    display: flex;
}

img {
    line-height: 40px;
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