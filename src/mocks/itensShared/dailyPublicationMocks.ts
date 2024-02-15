 import { faker } from "@faker-js/faker"
const dailyPublicationMocks={
    id: faker.string.uuid(),
    userName: faker.internet.userName(),
    userAvatar:faker.internet.avatar(),
    title:faker.lorem.words({min:4,max:7}),
    text:faker.lorem.text(),
    date:{
        day:faker.date.anytime().getDate(), 
        month:faker.date.month({abbreviated:true})
    },
    amountComents:faker.number.int({min:50,max:100000}), 
    isLike:faker.datatype.boolean(),
    isSaved:faker.datatype.boolean()

}
export {dailyPublicationMocks}