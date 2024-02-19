import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

function formatDataExtensive(date:Date){
    const arrayDateFormated =  format(date,"dd MMMM yyyy EEEE k mm" ,{locale:ptBR}).split(" ")
    const dateFormated ={
        day:arrayDateFormated[0],
        month:arrayDateFormated[1].replace(arrayDateFormated[1][0],arrayDateFormated[1][0].toUpperCase()),
        year:arrayDateFormated[2],
        weekDay:arrayDateFormated[3].replace(arrayDateFormated[3][0],arrayDateFormated[3][0].toUpperCase()),
        hours:arrayDateFormated[4],
        minutes:arrayDateFormated[5]
    }
    return dateFormated
}
export{formatDataExtensive}