<template lang="pug">
    div
        Ol
            li
                h2 {{title}}
                h3 {{subtitle}}
                h4 {{tableName}}
        div
            el-table(:data='tableData', style='width: 100%',)
                el-table-column(prop='item', label='Item', width='120')
                el-table-column(prop='quantity', label='Título', width='80')
                el-table-column(prop='description', label='Descrição')
</template>

<script>
export default {
    data () {
        return {
            title: 'DESCRIÇÃO DO PROJETO',
            subtitle: 'DETALHES DOS ITENS DO PROJETO',
            tableName: 'MATERIAIS ENTREGAVEIS',
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