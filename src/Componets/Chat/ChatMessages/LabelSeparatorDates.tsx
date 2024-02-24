import { formatDataExtensive } from "@/utils/functions/functionTimes"
import { HStack, Text } from "@gluestack-ui/themed"
import { isToday, isYesterday } from "date-fns"

export function LabelSeparatorDates({title}:{title:Date}){
    const fullTitleTime =new Date(title+"T00:00")
    return(
        <HStack  alignItems="center"  alignContent="center" justifyContent="center">
            <Text textAlign="center" size="2xs" bold marginVertical={8}  paddingHorizontal={8} color="$gray500" bg="$gray100"   >
            { (!isToday(fullTitleTime) && !isYesterday(fullTitleTime))&&formatDataExtensive(fullTitleTime).extensive}
            {isToday(fullTitleTime)&&<>Hoje</>}
            {isYesterday(fullTitleTime)&&<>Ontem</>}
            </Text>
        </HStack>
    )
}