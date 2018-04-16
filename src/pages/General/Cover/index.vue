<template lang="pug">
section.cover
        el-row
            el-col(:span='24')
                div.grid-content
                    img.logoCover
        el-row
            el-col(:span='24')
                div.grid-content
                    el-card.box-card
                        b.text-upper.text-italic Cliente:
                        p {{cliente}}
                        p {{descricao}}
</template>

<script>
export default {
    data () {
        return {
            cliente: 'Bernard',
            descricao: 'Proposta de criação de branding',
        }
    },
}
</script>

<style lang="scss">

    @import '~@/assets/sass/collors.scss';

    a {
        color: $primaryColor1;
        text-decoration: none;
    }
    .cover {
        height: 100vh;
        background: $gradient-transparency, url('~@/assets/img/cover.png');
        background-size: cover;
        background-repeat: no-repeat;
        color: white;
    }
    .logoCover{
        background: url('~@/assets/img/logo-cover.png') no-repeat;
       /* Width of new image */
        height: 50vh; /* Height of new image */
        padding-left: 100vh; /* Equal to width of new image */
        opacity: 0.4;
    }
</style>