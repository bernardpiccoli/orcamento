<template lang="pug">
    div
        h2 Menu
        ul
            li
                router-link(:to="{ name: 'Usr.Register.List'}") Lista de registros para o usuário
            li
                router-link(:to="{ name: 'Adm.Register.List'}") Lista de registros para o adm
            li
                router-link(:to="{ name: 'General.Icon'}") Uso de Ícones
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
</style>