import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";

export function DailyPostScreen(){
    const {idPublication} = useLocalSearchParams();
    console.log(idPublication)
    return(
        <VStack bg="$white" p={12}  paddingBottom={'$24'}>

            <Text fontWeight="$extrabold" color="$gray400" textAlign="center" >
                24
            </Text>
            <Text fontWeight="$medium" textAlign="center" color="$gray400" marginBottom={12}>Novembro</Text>
        <Heading color="$green400"  marginBottom={12} textAlign="center">
              Dia de Desafios, dia de Vitorias
        </Heading>
        <Text marginBottom={24}>
            {textDaily}
        </Text>
        <Text marginBottom={20} size="sm" color="$green400" fontWeight="$bold" italic>@leonardobelilo</Text>
        <BottonItemFeed/>
        </VStack>
    )
}


const textDaily=`Hoje vi como é desafiador você seguir  o seu proporsito e sua missão. Todos os dias existem inumeras barreiras quando vocÊ se dispoẽ a viver aquilo que queima em seu coração. Seria muito mais facil viver em uma zona de conforto. Mas isso me faria eternamente infeliz

portanto o desafio se torna tambem a nossa vitoria. Aonde vemos cada situação adversa como um sinal que estamos vencendo o medo, a preguiça e tudo que nós coloca a abaixo do que fomaos chamados para ser`