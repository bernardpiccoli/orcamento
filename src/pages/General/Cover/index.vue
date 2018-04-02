<template lang="pug">
section.height-80
    .content
        h1.fontnova Viewport Units s&atilde;o demais!
        p Essa div foi setada para ter 80vh, ocupando 80% da tela =)
</template>

<script>
export default {
    data () {
        return {
        }
    },
}
</script>

<style lang="scss">

    @import '~@/assets/sass/collors';
    a {
        color: $primaryColor1;
        text-decoration: none;
    }

    .height-80 {
        height: 80vh;
        background: linear-gradient(45deg, #e77817 0%,#602b57 100%);
    }

    @import '~@/assets/sass/fonts';

    .fontnova {
        font-family: Eesti Ultra Bold Italic, Arial, Helvetica, sans-serif;
        color: red;
    }
</style>