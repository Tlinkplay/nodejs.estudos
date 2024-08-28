try{
    const listaDeProdutosDisponiveis = [
        'Pão',
        'Leite',
        'Cafe',
        'Laranja',
        'Macarrão',
        'Sabonete',
        'Detergente',
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos = ${produto}`))
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento =>{
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos não temos = ${argumento}`));
    
    listaDeProdutosDisponiveis.sort;
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel = ${produto}`));
}catch(e){
    console.log('Não foi possivel executar esse pedido de compra');
}

