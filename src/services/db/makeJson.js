
const messagesMock  = [
    {id:"021",send_to_id:"02",send_by_id: "7f658a92-d699-4a43-83d9-8359d7f3725d", userName:'eu',text:"testando hoje?", time:new Date(),viewed:true},
    {id:"0254561", send_to_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",send_by_id:"02",userName:'ele',text:"vi que a data é de hoje??", time:new Date(),viewed:true},
    {id:"02451",send_to_id:"02",send_by_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",userName:'eu',text:"deu certinho", time:new Date(),viewed:true},
]

const updates = [
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Joana Kolen",
        dispatch_to_name: "john west",
        text_body: "Achei incrivel a iniciativa estou na espectativa da proxima ação",
        image: null,
        type: "comment",
        target: "photo"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Joana Kolen",
        dispatch_to_name: "john west",
        text_body: null,
        image: null,
        type: "liked",
        target: "photo"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Lucas Ferrari",
        dispatch_to_name: "john west",
        text_body: null,
        image: null,
        type: "liked",
        target: "depoiment"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Joana Kolen",
        dispatch_to_name: "john west",
        text_body: "Achei incrivel a iniciativa estou na espectativa da proxima ação",
        image: null,
        type: "response_comment",
        target: "daily_post"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Gean Silva",
        dispatch_to_name: "john west",
        text_body: "Achei incrivel a iniciativa estou na espectativa da proxima ação",
        image: null,
        type: "liked",
        target: "daily_post"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Fred Tompson",
        dispatch_to_name: "john west",
        text_body: "Achei incrivel a iniciativa estou na espectativa da proxima ação",
        image: null,
        type: "response_comment",
        target: "comment"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Fred Tompson",
        dispatch_to_name: "john west",
        text_body: "Achei incrivel a iniciativa estou na espectativa da proxima ação",
        image: null,
        type: "new_depoiment",
        target: "depoiment"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Lucas Amaral",
        dispatch_to_name: "john west",
        text_body: "Achei incrivel a iniciativa estou na espectativa da proxima ação",
        image: null,
        type: "new_colab",
        target: "colab"
    },
    {
        id: new String(Math.random()).toString(),
        created_at: new Date(),
        dispatch_from_id: "01",
        dispatch_to_id: '02',
        dispatch_from_name: "Anderson Gomes",
        dispatch_to_name: "john west",
        text_body: "Achei incrivel a iniciativa estou na espectativa da proxima ação",
        image: null,
        type: "new_sponsor",
        target: "sponsor"
    },
]
console.log(JSON.stringify(updates))