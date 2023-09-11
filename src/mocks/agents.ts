interface TypeAgentDTO{
    
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
    created_at: string,
    state:number


}

const agent:TypeAgentDTO = {
    
    id: '01',
    email: 'leonardobelilo@email',
    password: '123',
    name:'Leonardo Belilo',
    user_name: 'leobelilo',
    description: 'Desenvolvedor de software e inpulsionador social',
    balance: '1800',
    is_active: true,
    level: 2,
    image_profile:'string',
    vocation: 'Liderança',
    created_at: String(new Date()),
    state:3,

}