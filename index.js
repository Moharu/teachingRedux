/*
    Vamos ver um pouco mais dos conceitos:
    AÇOES:

    Como dito anteriormente, as ações são objetos plenos que vão descrever como
    o estado será alterado. Elas sempre vão ter uma propriedade 'TYPE', que ensina
    ao redutor como resolver uma ação daquele tipo. Todas as demais propriedades são
    escolhidas à critério do programador.

    {
        type: 'ADD_TODO',
        text: 'Criar açoes legais'
    }

    Para que as ações tenham um formato padrão e sempre sejam entendidas pelo nosso redutor,
    criamos funções chamadas de ACTION CREATORS.

*/

const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
})

/*
    Gostaria também de ter uma ação para marcar um TODO como
    completo/incompleto, como seria o action creator dela?
*/