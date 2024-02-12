import { MenuTypeBoxProps } from "@/types/ComponetsTypes/menuTypes"
import { HStack , Pressable, Text} from "@gluestack-ui/themed"

export function MenuTypeBox({selectContent, setSelectContent,itensMenu}:MenuTypeBoxProps){
    return(
        <HStack  justifyContent="space-around" marginVertical={2} > 
                {
                    itensMenu.map((item)=>(
                        <Pressable key={item} onPress={()=>{setSelectContent(item)}} bg= {selectContent=== item?"$green400":'$white'} flex={1} p={8} borderTopStartRadius={4} borderTopEndRadius={4} borderColor="$gray100" borderWidth={1}>
                            <Text size="sm" textAlign="center" color={selectContent===item?"$white":'$gray400'} bold={selectContent===item} >
                                {item}
                            </Text>
                        </Pressable>
                    ))
                }
        </HStack>
    )
}