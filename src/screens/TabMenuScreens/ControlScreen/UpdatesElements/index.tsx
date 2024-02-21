import { AdvicesHorizontalContainer } from "@/Componets/Advices/AdvicesHorizontalContainer"
import { listAdvicesmock } from "@/mocks/advices/advicesMocks"
import { VStack } from "@gluestack-ui/themed"
import React from "react"
import { NewCollabs } from "./NewCollabs"
import { NewSponsors } from "./NewSponsors"

export function UpdateElements(){
    const listAdvices = listAdvicesmock
    return(
        <VStack>
            <NewCollabs/>
            <NewSponsors/>
            <AdvicesHorizontalContainer listAdvices={listAdvices}/>
        </VStack>
    )
}
