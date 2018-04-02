<template lang="pug">
    div
        form
            el-row
                el-col(:sm="4")
                    p Quantidade:
                    el-input(type='number', name='quantity', min='1', max='99')
                el-col(:sm="4")
                    p Descrição:
                    el-input(type="textarea", cols="25")
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
                el-table(:data='tableData', style='width: 100%',)
                    el-table-column(prop='id', label='ID', width='80')
                    el-table-column(prop='item', label='Item', width='120')
                    el-table-column(prop='quantity', label='Quantidade', width='80')
                    el-table-column(prop='description', label='Descrição')
                    el-table-column(prop='cost', label='Valor', width='80')
                    el-table-column(prop='deadline', label='Prazo', width='80')
                    el-table-column(prop='total', label='Total', width='80')
                    el-table-column(prop='action', label='Ação', width='80')
            div
                el-col(:sm="8")
                    el-button(type='primary', round='', icon='el-icon-circle-plus') Add Item
                    el-button(type='success', round='', icon='el-icon-circle-check') Avançar
                    el-button(type='danger', round='', icon='el-icon-error') Cancelar

</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                id: '1',
                item: 'Flyer',
                quantity: '5',
                description: 'No. 189, Grove St, Los Angeles',
                cost: 'R$300,00',
                deadline: '10 dias',
                total: 'R$1500',
                action: 'deletar',

            }, {
                id: '2',
                item: 'Flyer',
                quantity: '5',
                description: 'No. 189, Grove St, Los Angeles',
                cost: 'R$300,00',
                deadline: '10 dias',
                total: 'R$1500',
                action: 'deletar',
            }, {
                id: '3',
                item: 'Flyer',
                quantity: '5',
                description: 'No. 189, Grove St, Los Angeles',
                cost: 'R$300,00',
                deadline: '10 dias',
                total: 'R$1500',
                action: 'deletar',
            }, {
                id: '4',
                item: 'Flyer',
                quantity: '5',
                description: 'No. 189, Grove St, Los Angeles',
                cost: 'R$300,00',
                deadline: '10 dias',
                total: 'R$1500',
                action: 'deletar',
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