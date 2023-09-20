interface MissionDTO{
    
    id: string,
    crreator: string,
    name:string,
    user_name: string,
    description: string,
    balance: string,
    is_active: boolean,
    level: number,
    image_profile?:string,
    created_at: string,
    state:number


}

const mission01:MissionDTO = {
    
    id: '844454',
    name:'Leonardo Belilo',
    crreator:'@leonardo',
    user_name: 'leobelilo',
    description: 'Desenvolvedor de software e inpulsionador social',
    balance: '1800',
    is_active: true,
    level: 2,
    image_profile:'string',
    created_at: String(new Date()),
    state:3,

}