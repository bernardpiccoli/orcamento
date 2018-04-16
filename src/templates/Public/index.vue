<template lang="pug">
    div
        el-row(:gutter='24')
            el-col(:span='20')
                .grid-content.meio
            el-col(:span='4')
                .grid-content.logo
        div
            router-view
        div.rodape {{number}}

</template>

<script>
export default {
    data () {
        return {
            number: '1',
        }
    },
}
</script>

<style lang="scss">

@import '~@/assets/sass/fonts.scss';
@import '~@/assets/sass/typography.scss';

</style>