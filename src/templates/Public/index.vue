<template lang="pug">
    div
        h1 {{title}}
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

<style>
</style>