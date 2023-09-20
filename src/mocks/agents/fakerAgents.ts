import { faker } from '@faker-js/faker';

export interface AgentDTO {
    
    id: string,
    email: string,
    password?: string,
    name:string,
    user_name: string,
    description: string,
    balance: string,
    is_active: boolean,
    level: number,
    image_profile?:string,
    vocation: string,
    created_at: Date,
    state:number


}



export function createRandomUser():AgentDTO {
  return {
    id: faker.string.uuid(),
    user_name: faker.internet.userName(),
    email: faker.internet.email(),
    image_profile: faker.image.avatar(),
    password: faker.internet.password(),
    created_at: faker.date.past(),
    balance: faker.finance.amount(),
    description:faker.lorem.text(),
    is_active:true,
    level: faker.number.int(3),
    name:faker.person.fullName(),
    state:faker.number.int(3),
    vocation: faker.lorem.word()
  };
}

export const AgentsFake: AgentDTO[] = faker.helpers.multiple(createRandomUser, {
  count: 5,
});