import { MissionCardProps } from "@/types/ComponetsTypes/cardTypes";
import { faker } from "@faker-js/faker";

const missionCardMock={
    id: faker.string.uuid(),
    name:faker.company.name(),
    field:faker.internet.domainWord(),
    image:faker.image.avatar(),
    local:faker.location.streetAddress({ useFullAddress: true }) ,
    numberActions: faker.number.int({min:1, max:100}),
    numberColabs:faker.number.int({min:1, max:1000}),
    numberTasks:faker.number.int({min:1, max:200}),
}

const listMissionMock =[] as MissionCardProps[]
for(let i=0; i<10 ; i++){
    listMissionMock.push(
        {
            id: faker.string.uuid(),
            name:faker.company.name(),
            field:faker.person.jobArea(),
            image:faker.internet.avatar(),
            local:faker.location.streetAddress({ useFullAddress: true }) ,
            numberActions: faker.number.int({min:1, max:100}),
            numberColabs:faker.number.int({min:1, max:1000}),
            numberTasks:faker.number.int({min:1, max:200}),
        }
    )
}
export {missionCardMock, listMissionMock}