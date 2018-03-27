<template lang="pug">
    div
        form
            p Quantidade:
            input(type='number', name='quantity', min='1', max='99')
            p Descrição:
            textarea(type='text', name='description', cols='40', rows='5')  
            p Valor:
            input(type='text', name='cost')
            p Prazo:
            input(type='number', name='deadline', min='1', max='99')
            p Total:
            input(type='text', name='total')
            br
            input(type='button', onclick="alert('mais uma linha')", value='Mais um Item')
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