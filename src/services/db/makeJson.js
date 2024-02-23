
const messagesMock  = [
    {id:"021",send_to_id:"02",send_by_id: "7f658a92-d699-4a43-83d9-8359d7f3725d", userName:'eu',text:"oi tudo bem1?", time:new Date(),viewed:true},
    {id:"0254561", send_to_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",send_by_id:"02",userName:'ele',text:"Bem sim e vc??", time:new Date(),viewed:true},
    {id:"02451",send_to_id:"02",send_by_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",userName:'eu',text:"Tudo bem tambem,Graças a Deus", time:new Date(),viewed:true},
    {id:"02654541", send_to_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",send_by_id:"02",userName:'ele',text:"Que bom!", time:new Date(),viewed:true},
    {id:"028471", send_to_id:"02",send_by_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",userName:'eu',text:"Aqui... não sei se você esta sabendo. amanha é uma data especial para a nossa missão. Então gostaria de te convidar para participar da nossa reunião especial de comemoração", time:new Date(),viewed:true},
    {id:"0251",send_to_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",send_by_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",userName:'eu',text:"oi tudo bem?", time:new Date(),viewed:true},
    {id:"02951", send_to_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",send_by_id:"02",userName:'ele',text:"oi tudo bem?(mensagem enviada em  '2024-01-22')", time:new Date('2024-01-22'),viewed:true},
    {id:"0258451",send_to_id:"02",send_by_id:"7f658a92-d699-4a43-83d9-8359d7f3725d",userName:'ele',text:"oi tudo bem? (mensagem enviada em  '2024-01-22)", time:new Date('2024-01-22'),viewed:false},
    {id:"0264541",send_to_id:"02",send_by_id:"7f658a92-d699-4a43-83d9-8359d7f3725d", userName:'ele',text:"oi tudo bem?(ultima da pilha)", time:new Date(),viewed:false}

]
console.log(JSON.stringify(messagesMock))