import { Box, Text } from "@gluestack-ui/themed"

export function BadgeNotification({amount}:{amount:number}){
    if (amount <= 0) return 
    return(
        <Box minHeight={26} alignItems="center" justifyContent="center" alignContent="center"  minWidth={26}  bg="$red600" borderRadius="$full"  >
            <Text p={2} textAlign="center" color="$white" bold fontSize={12} >{amount}</Text>
        </Box>
    )
}