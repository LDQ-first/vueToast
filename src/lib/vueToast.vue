<template>
     <section class="toast-container">
        <div class="toast" :class="[visible ? 'fade-in': 'fade-out' ]">
            <p>{{message}}</p>
        </div>
    </section>
</template>

<style lang="scss">
    $fontSize: 10px;
    @function pxToRem($px) {
        @return $px / $fontSize * 1rem;
    }
    @function pxToEm($px) {
        @return $px / $fontSize * 1em;
    }
     @keyframes fade-in {
         0% {
             opacity: 0;
             transform: scale(0.7);
         }
         100% {
             opacity: 1;
             transform: scale(1);
         }
     }
     @keyframes fade-out {
         0% {
             opacity: 1;
             transform: scale(1);
         }
         100% {
             opacity: 0;
             transform: scale(0.7);
         }
     }
     .toast-container {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: 2000;
            display: flex;
            justify-content: center;
            align-items: center;
            .toast {
                width: pxToRem(180px);
                height: pxToRem(60px);
                line-height: pxToRem(60px);
                text-align: center;
                border-radius: 10px;
                color: #FFF;
                background: rgba(0, 0, 0, 0.5);
            }
            p {
                font-size: pxToRem(14px);
                color: #FFF;
            }
            .fade-in {
                animation: both fade-in 0.3s 
            }
            .fade-out {
                animation: both fade-out 0.3s 
            }
        }
</style>

<script>
    export default {
        data() {
            return {
               message: 'Hello, Vue',
               visible: false
            }
        }
    }
</script>