<template lang="pug">
    div
        h1 {{title}}
        div
            router-view

</template>

<script>
export default {
    data () {
        return {
            title: 'Meu Template 2',
        }
    },
}
</script>

<style lang="scss">
</style>