import { BottonItemFeed } from "@/Componets/BottonItemFeed";
import { Badge, BadgeIcon, BadgeText, Box, Button, ButtonText, GlobeIcon, HStack, Image, InfoIcon, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { FlatList, ImageBackground } from "react-native";
import ImageVideo from '@/assets/develop.jpg'
import { FontAwesome5 } from '@expo/vector-icons';
import { extendedConfig } from "@/theme/config";
import { useState } from "react";
import { ExclusiveArea } from "./ExclusiveArea";
import { FontAwesome } from '@expo/vector-icons';
import ImageTeaser from '@/assets/develop.jpg'

export function ContentProfile(){
    const [selectContent,setSelectContent] = useState('info')

    return(
        <>
        <HStack  justifyContent="space-around" marginVertical={2} > 
        <Pressable onPress={()=>{setSelectContent('info')}} bg= {selectContent==='info'?"$green400":'$white'} flex={1} p={8} borderTopStartRadius={8} borderTopEndRadius={8} borderColor="$gray100" borderWidth={1}>
            <Text size="sm" textAlign="center" color={selectContent==='info'?"$white":'$gray400'} bold={selectContent==='info'} >
                Info
            </Text>
        </Pressable>
        <Pressable onPress={()=>{setSelectContent('exclusive')}} bg={selectContent==='exclusive'?"$green400":'$white'} borderWidth={1} borderColor="$gray100" flex={1} p={8} borderTopStartRadius={8} borderTopEndRadius={8}>
            <Text size="sm"  textAlign="center" color={selectContent==='exclusive'?"$white":'$gray400'} bold={selectContent==='exclusive'} >
                Area exclusiva
            </Text>
        </Pressable>
        </HStack>
        {
            selectContent==='info'&&<ContentInfo/>        
        }
        {
            selectContent==='exclusive'&&<ExclusiveArea/>
        }
        </>
    )
}
function ContentInfo(){
    return(
        <>
         <VStack borderRadius={"$lg"} bgColor="$white" space="xl" p={8}>
                <VStack>
                    <Text fontWeight="$bold">Sobre</Text>
                    <Text fontSize={'$sm'}>
                    Empreendedor social  a 5 anos na 
                    área de desenvolvimento social. Com 2 
                    projetos em curso e mais de 2 mil jovens 
                    alcançados.
                    </Text>

                </VStack>
                <Quote/>
                <DailyPost/>
                <VidePublication/>
            </VStack>
        </>
    )
}
 function Teasers(){
    const itens = ['item1','item2', 'item3', 'item4', 'item5']
    return(
        <>
        <Text fontWeight="$bold" marginVertical={8}>
            Campanhas
        </Text>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={itens}
        renderItem={(itens)=>(
            <VStack alignContent="center" justifyContent="center" alignItems="center" width={100}marginRight={8}  >
            <Pressable key={itens.item} width={100}  borderRadius={'$lg'} height={100} bgColor="$green200" >
                <Image source={ImageTeaser} size="full" borderRadius={10}    />
            </Pressable>
                <Text size="xs" lineHeight={'$2xs'} flexWrap="wrap" textAlign="center" >Criação de nova sede </Text>
            </VStack>
        )}
        >
        
        </FlatList>
        </>
    )
 }
function Skills(){
    return(
        <>
                 <VStack space="md" >
                    <Text fontWeight="$bold">Interesses</Text>
                    <Box>
                        <HStack flexWrap="wrap">

                    {
                        skillsProfile.map((skill)=>(
                            <Badge sx={{borderRadius:8}} m={4} size="sm" variant="solid" key={skill} borderRadius="$none" action="success">
                            <BadgeText>{skill}</BadgeText>
                            </Badge>
                        ))
                    }

                    </HStack>
                    </Box>
                </VStack>
        </>
    )
}
function Interests(){
    return(
        <>
                 <VStack space="md" >
                    <Text fontWeight="$bold">Habilidades</Text>
                    <Box>
                        <HStack flexWrap="wrap">

                    {
                        skillsProfile.map((skill)=>(
                            <Badge sx={{borderRadius:8}} m={4} size="sm" variant="solid" key={skill} borderRadius="$none" action="success">
                            <BadgeText>{skill}</BadgeText>
                            </Badge>
                        ))
                    }
                    </HStack>
                    </Box>
                </VStack>
        </>
    )
}

function Transparance(){
    return(
        <>
            <VStack>
                <Text marginVertical={12} fontWeight="$bold">Transparencia</Text>
                <HStack justifyContent="space-between">
                    <Text fontSize={'$sm'} color="$gray400">Subexistenica</Text>
                    <Text fontSize={'$sm'} color="$green400" fontWeight="$bold">75%</Text>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text fontSize={'$sm'} color="$gray400">Estrutura</Text>
                    <Text fontSize={'$sm'} color="$green400" fontWeight="$bold">13%</Text>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text fontSize={'$sm'} color="$gray400">outros</Text>
                    <Text fontSize={'$sm'} color="$green400" fontWeight="$bold">12%</Text>
                </HStack>
                <Pressable>

                    <Text textAlign="center" paddingVertical={12} color="$green400" fontWeight="$bold">Ver relatorio completo</Text>
                </Pressable>
            </VStack>
        </>
    )
}

function Depoiments(){
    const depoiments = [{id:1,name:'julia neds', content:'Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens!'},
    {id:2,name:'julia neds', content:'Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens!'},
    {id:3,name:'julia neds', content:'Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens!'},
    {id:4,name:'julia neds', content:'Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens!'}

]
    return(
        <>
        <Text marginBottom={12} fontWeight="$bold">Depoimentos</Text>
        <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal
        data={depoiments}
        renderItem={(depoiment)=>(
            <VStack borderColor="$gray200" borderRadius={8} width={260} borderWidth={1} key={depoiment.item.id} marginRight={8} p={12}>
            <HStack alignItems="center">
                <Box width={'$8'} borderRadius={'$full'} height={'$8'} bg="$green300" marginRight={8}></Box>
                <Text fontWeight="$bold">{depoiment.item.name}</Text>
            </HStack>
            <Text size="sm">
                {depoiment.item.content}
            </Text>
            </VStack>
        )}
        />
        </>
    )
}
function Quote(){
 return(
    <>
    <VStack space="xl" borderBottomColor={extendedConfig.tokens.colors.gray100} borderBottomWidth={1} paddingBottom={'$10'}>
    <HStack alignItems="center">
            <Box width={'$8'} borderRadius={'$full'} height={'$8'} bg="$green300" marginRight={8}></Box>
            <Text fontWeight="$medium">Mike JHerry</Text>
        </HStack>
        <Text textAlign="center" fontSize={'$xl'} fontWeight="$normal">
        Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens!
        </Text>
        <BottonItemFeed/>
    </VStack>
</>
 )
}
function DailyPost(){
    return(
        <VStack space="xl" paddingVertical={18}  borderBottomColor="$gray100" borderBottomWidth={1}>
            <HStack  space="xl" p={8} alignContent="center" alignItems="center">
                <VStack >
                    <Text color="$gray400" fontWeight="$bold" fontSize={'$lg'} >
                        25
                    </Text>
                    <Text color="$gray400" fontWeight="$bold" size="xs" lineHeight={12} >out</Text>
                </VStack>
            <Text  fontWeight="$bold" color="$green400" textAlign="center" >Dias de lutas dias de gloria</Text>
            </HStack>
            <Text>
            Muito bom colaborar com pessoas que tem um visão ampla de uma missão.Parabens...
            </Text>
            <Pressable>
                <Text textAlign="center" fontWeight="bold" color="$green400">Ver Completo</Text>
            </Pressable>
            <BottonItemFeed/>
        </VStack>
    )
}
function VidePublication(){
    return(
        <VStack space="md">
        <ImageBackground source={ImageVideo}
        width={300}
        height={600}
        borderRadius={8}
        >
            <Box height={400} alignContent="center" justifyContent="center" alignItems="center">
            <FontAwesome5 name="play-circle" size={94} color={extendedConfig.tokens.colors.green400} />
            </Box>
        </ImageBackground>
        <BottonItemFeed/>
        </VStack>
    )
}

const skillsProfile = ['tecnologia','liderança','gestão','desenvolvimento de projetos']