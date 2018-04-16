<template lang="pug">
    div
        ol
            li
                h2 {{title}}
                h3 {{subtitle}}
                h4 {{tableName}}
        div
            el-table(:data='tableData', style='width: 100%',)
                el-table-column(prop='item', label='Item', width='120')
                el-table-column(prop='quantity', label='Título', width='80')
                el-table-column(prop='description', label='Descrição')
            .content
            h1 Ai Vamo Nós!
        div.text-bottom.text-has-line
            span.text-upper.text-italic Bigger Media
            p {{texto}}
</template>

<script>
export default {
    data () {
        return {
            title: 'DESCRIÇÃO DO PROJETO',
            subtitle: 'DETALHES DOS ITENS DO PROJETO',
            tableName: 'MATERIAIS ENTREGAVEIS',
            texto: 'É uma empresa jovem e atual, focada no resultado e visibilidade da sua marca. Cuidamos e assessoramos a imagem sua empresa em todos os meios digitais. Descubra um mundo de possibilidades que podemos te oferecer.',
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