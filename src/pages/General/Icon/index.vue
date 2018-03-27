<template lang="pug">
    div
        h2 Uso de Ícones
        AwesomeIcon(name="bars" scale="2")
        hr
        i.el-icon-edit(style="font-size: 2rem;")
        hr
        el-button(type="primary" icon="el-icon-search" style="font-size: 2rem;") Search
</template>

<script>
import AwesomeIcon from 'vue-awesome/dist/vue-awesome'

export default {
    data () {
        return {
        }
    },
    components: {
        AwesomeIcon,
    },
}
</script>

<style lang="scss">
</style>