import { VerticalPaddingContainer } from "@/Componets/VerticalPaddingContainer";
import { Avatar, AvatarFallbackText, AvatarGroup, AvatarImage, Box, HStack, Pressable, Text, VStack, styled } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function  teamsAgent(){
    return(
        <ScrollView>

        <VStack bg="white" flex={1}>

                <VerticalPaddingContainer  >
                    <VStack alignItems="center">
                        <Text bold textAlign="center" size="2xl" alignItems="center" paddingVertical={8}> Organização </Text>
                        <GroupsPeople  description=" 35 usarios ativos"/>
                        <Text color="$gray400" size="xs">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores, magni eligendi placeat blanditiis delectus officia veritatis pariatur veniam! 
                        </Text>
                    </VStack>
                    <Tasks/>
                    <Advices/>
                </VerticalPaddingContainer>
            
        </VStack>
        </ScrollView>
    )
}

function Tasks(){
    const description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, iusto! Numquam voluptates cumque eveniet voluptatibus ratione. Eius ipsam exercitationem placeat "
    return(
        <VStack borderBottomColor="$gray200" borderBottomWidth={1} paddingVertical={12}>
            <Text bold>
                Avisos 
            </Text>
            <VStack   bg="$red100" alignItems="center"width={240} height={120} borderRadius={'$md'} borderColor="$gray200" p={8} borderWidth={1}>
                <Text fontWeight="$medium"> Tempo prazo de inscrição </Text>
                <Text size="sm" color="$gray400">{description.slice(0,80)}</Text>
                <HStack  borderTopColor="$gray300" borderTopWidth={0.7} justifyContent="space-between" width={'$full'} p={4}>
                    <Text size="2xs" color="$gray500">@baseoutside</Text>
                    <Text size="2xs" color="$gray500">seg 12 jan  08:25</Text>
                </HStack>
            </VStack>
            
        </VStack>
    )
}
function Advices(){
    return(
        <VStack flex={1}>
            <Text bold>
                Tarefas 
            </Text>
            <TasksMission/>
            
        </VStack>
    )
}
function GroupsPeople({name,description}:{name?:string,description:string}){
  
    const avatars = [
        { src: 'https://example.com.jpg', alt: 'Sandeep Srivastva' , color:'$emerald600' },
        { src: 'https://example.com.jpg', alt: 'Arjun Kapoor', color:'$cyan600' },
        { src: 'https://example.com.jpg', alt: 'Ritik Sharma ', color:'$indigo600' },
        { src: 'https://example.com.jpg', alt: 'Akhil Sharma', color:'$gray600' },
        { src: 'https://example.com.jpg', alt: 'Rahul Sharma ', color:'$red400' },
    ];
    const extraAvatars = avatars.slice(3);
    const remainingCount = extraAvatars.length;
    return (
      <AvatarGroup alignItems="center"   >
        <RenderAvatar/>
  
        <Avatar size="xs" borderColor="$white" borderWidth="$2" bg="$gray600" 
        $dark-borderColor="$black">
            <AvatarFallbackText >{"+ " + remainingCount + ""}</AvatarFallbackText>
        </Avatar>
        <Text size="2xs" color="$gray400" >{description} {name}</Text>
      </AvatarGroup>
    );
  }
  
  function RenderAvatar(){
    const avatars = [
      { src: 'https://example.com.jpg', alt: 'Sandeep Srivastva' , color:'$emerald600' },
      { src: 'https://example.com.jpg', alt: 'Arjun Kapoor', color:'$cyan600' },
      { src: 'https://example.com.jpg', alt: 'Ritik Sharma ', color:'$indigo600' },
      { src: 'https://example.com.jpg', alt: 'Akhil Sharma', color:'$gray600' },
      { src: 'https://example.com.jpg', alt: 'Rahul Sharma ', color:'$red400' },
  ];
  const extraAvatars = avatars.slice(3);
  const remainingCount = extraAvatars.length;
    return(
        <>
          {
          avatars.slice(0, 3).map((avatar, index)=>(
            <Avatar   size="xs" borderColor="$white" borderWidth="$2" key={index} bgColor={avatar.color} $dark-borderColor="$black">
            <AvatarFallbackText>{avatar.alt}</AvatarFallbackText>
            <AvatarImage  source={{uri:avatar.src}}/>
          </Avatar>
          ))
        }
        </>
    )
  }

export  function TasksMission(){
    const menu = []
    const [menuSelected,setSelectedMenu] = useState('Em andamento')
    const tasks = ['Desenvolvimento Social', 'Cadastro de moradores', 'Visita Solidaria', 'Impactto Vila','Dia da Criança', 'Cafe Da manhã com mebros']
    return(

        <VStack flex={1}>
            <HStack  justifyContent="space-around">
                <Pressable onPress={()=>{setSelectedMenu('Em andamento')}} p={8} borderBottomColor={menuSelected==='Em andamento'? "$green400":'$white'} borderBottomWidth={1}> 
                    <Text  size="sm" textAlign="center" color={menuSelected==='Em andamento'? "$green400":'$gray400'} fontWeight= {menuSelected==='Em andamento'? "$medium":'$normal'}>
                        Em andamento
                    </Text>
                </Pressable> 
                <Pressable onPress={()=>{setSelectedMenu('Concluidas')}}  p={8} borderBottomColor={menuSelected==='Concluidas'? "$green400":'$white'}  borderBottomWidth={1}> 
                    <Text  size="sm"  textAlign="center" color={menuSelected==='Concluidas'? "$green400":'$gray400'} fontWeight= {menuSelected==='Concluidas'? "$medium":'$normal'}>
                        Concluidas
                    </Text>
                </Pressable>           
                <Pressable  onPress={()=>{setSelectedMenu('Proximas')}}  p={8} borderBottomColor={menuSelected==='Proximas'? "$green400":'$white'}  borderBottomWidth={1}> 
                    <Text  size="sm" textAlign="center" color={menuSelected==='Proximas'? "$green400":'$gray400'} fontWeight= {menuSelected==='Proximas'? "$medium":'$normal'}>
                        Proximas
                    </Text>
                </Pressable>                          
            </HStack>
            {
                tasks.map((item)=>(
                <CarTask name={item} key={item.toString()}/>

                ))
            }
            
        </VStack>
    )
}


function CarTask({name}:{name:string}){
    return(
        <>
         <HStack  borderBottomWidth={1} borderColor="$gray100" marginHorizontal={8} space="md" paddingVertical={12}>
                
                <VStack display="flex" flex={1} justifyContent="space-between" p={4}  >
                    <Text fontWeight="$bold">{name}</Text>
                    <Box >
                        <Text size="sm" flexWrap="wrap" >
                        Realização de  tarefas 
                        para o desenvolvimento da ação
                        </Text>
                    </Box>
                    <Text color="$green400" fontSize={'$xs'} fontWeight="$medium">
                    Dia 15/09/23  as 15hrs, 8 vagas disponiveis
                    </Text>
                 
                </VStack>
            </HStack>
        </>
    )
}