
const dailyPostMock ={
    id:'01',
    id_agent:'01',
    title:'Criando espectativas',
    content:'Criando mais espectativas sobre novos começos',
    PhotoDaily:'',
    created_at:String(new Date())
}

const textDaily=`1Hoje vi como é desafiador você seguir  o seu proporsito e sua missão. Todos os dias existem inumeras barreiras quando vocÊ se dispoẽ a viver aquilo que queima em seu coração. Seria muito mais facil viver em uma zona de conforto.
 Mas isso me faria eternamente infeliz portanto o desafio se torna tambem a nossa vitoria. Aonde vemos cada situação adversa como um sinal que estamos vencendo o medo, a preguiça e tudo que nós coloca a abaixo do que fomaos chamados para ser`

const dailyPostExampleMock = {
    id:'01',
    id_agent:'01',
    title:" Dia de Desafios, dia de Vitoria",
    text:`Hoje vi como é desafiador você seguir  o seu proporsito e sua missão. Todos os dias existem inumeras barreiras quando vocÊ se dispoẽ a viver aquilo que queima em seu coração. Seria muito mais facil viver em uma zona de conforto. Mas isso me faria eternamente infeliz${textDaily}
\n portanto o desafio se torna tambem a nossa vitoria. Aonde vemos cada situação adversa como um sinal que estamos vencendo o medo, a preguiça e tudo que nós coloca a abaixo do que fomaos chamados para ser`,
    user:"jounDoe",
    date:new Date(),
    isLiked:false,
    isSaved:false, 
    amountComments:9856
}


export{dailyPostExampleMock}