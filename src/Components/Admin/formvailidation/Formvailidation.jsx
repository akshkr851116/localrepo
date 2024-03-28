export default function formvailidation(e){
    let{name,value}=e.target
    switch(name){
        case "name":
            if(value.length===0)
            return name +" field is Mandatory"
        else 
            if(value.length<3 || value.length>30)
            return name +" field length must be greater than the 3 and les than the 30"
        else
        return ""
      default:
        return ""
    }
}