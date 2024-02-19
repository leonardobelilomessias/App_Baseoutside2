import { MenuTypeBoxProps } from "@/types/ComponetsTypes/menuTypes"
import { HStack , Pressable, Text} from "@gluestack-ui/themed"

export function MenuTypeBox({selectContent, setSelectContent,optionsMenu}:MenuTypeBoxProps){
    return(
        <HStack  justifyContent="space-around" marginVertical={2} > 
                {
                    optionsMenu.map((item)=>(
                        <Pressable key={item.name} onPress={()=>{setSelectContent(item.name)}} bg= {selectContent=== item.name?"$green400":'$white'} flex={1} p={8} borderTopStartRadius={4} borderTopEndRadius={4} borderColor="$gray100" borderWidth={1}>
                            <Text size="sm" textAlign="center" color={selectContent===item.name?"$white":'$gray400'} bold={selectContent===item.name} >
                                {item.name}
                            </Text>
                        </Pressable>
                    ))
                }
        </HStack>
    )
}