const listaArgumentos = process.argv.slice(2);

console.log('------------------------ Executando um FOR ------------------');
for(let controladorFor = 0; controladorFor < listaArgumentos.length; controladorFor++){
    console.log(`Posicao ${controladorFor} valor lido = ${listaArgumentos[controladorFor]}`);
}

console.log('------------------------ Executando um WHILE------------------');
    let controladorWhile = 0;
while(controladorWhile < listaArgumentos.length){
    console.log(`Posição ${controladorWhile} valor lido = ${listaArgumentos[controladorWhile]}`);
    controladorWhile++;
}

console.log('------------------------ Executando um Do WHILE------------------');
let controladorDo = 0;
do{
    console.log(`Posição ${controladorDo} valor lido = ${listaArgumentos[controladorDo]}`);
    controladorDo++;
}while(controladorDo < listaArgumentos.length)

console.log('------------------------ Executando um FOR OF------------------');
let controladorForOf =0;
for(const argumento of listaArgumentos){
    console.log(`Posição ${controladorForOf} Valor lido = ${argumento}`);
    controladorForOf++;
}