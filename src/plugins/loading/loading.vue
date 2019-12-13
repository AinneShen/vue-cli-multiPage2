<template>
    <div class='mask' v-show='show'>
        <div class='loading_content'>
        <img class='loadingImg' :src='loadingImg' />
        <div class='loadingText'>加载中</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loading',
    data() {
        return {
            loadingImg: require('@/static/img/loading.png'),
            show: false
        }
    }
}
</script>
<style lang='less' scoped>
.mask {
    position: fixed;
    width: 100%;
    height: 100%;
    min-height: 500px;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 9999;
    .loading_content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .loadingImg {
            width: 130px;
            height: 130px;
            animation: loading 1s linear infinite;
        }
        .loadingText {
            margin-top: 10px;
            color: #333;
        }
    }
}
@keyframes loading{
    from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
  }
</style>