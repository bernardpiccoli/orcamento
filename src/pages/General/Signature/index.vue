<template lang="pug">
    div
        form
            el-row
                el-col(:sm="4")
                    p Quantidade:
                    el-input(type='number', name='quantity', min='1', max='99')
                el-col(:sm="4")
                    p Descrição:
                    el-textarea(type='text', name='description', cols='25', rows='5')
                el-col(:sm="4")
                    p Valor:
                    el-input(type='text', name='cost')
                el-col(:sm="4")
                    p Prazo:
                    el-input(type='number', name='deadline', min='1', max='99')
                el-col(:sm="4")
                    p Total:
                    el-input(type='text', name='total')
            hr
            div
                table
                    tr
                        th Item
                        th Quantidade
                        th Descrição
                        th Valor
                        th Prazo
                        th Total
                        th Ação
                    tr
                        td 1
                        td 10
                        td teste teste teste teste
                        td R$100,00
                        td 10 dias
                        td R$1.000,00
                        td Deletar
                        el-table(:data='tableData', style='width: 100%')
                        el-table-column(prop='date', label='Date', width='180')
                        el-table-column(prop='name', label='Name', width='180')
                        el-table-column(prop='address', label='Address')

</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }, {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }, {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }, {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            }, ],
        }
    },
    methods: {
        nomeFuncao () {
            alert('mais uma linha')
        },
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