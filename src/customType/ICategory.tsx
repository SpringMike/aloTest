export default function convert(timeStamp:string) {
    if (timeStamp !== null){
        const date = new Date(timeStamp)
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds()
    }else {
        return "-----"
    }
}
export interface Category {
    id: number;
    code: string;
    name: string;
    description: string;
    createdDate: string;
    modifiedDate:string;
}

export type TypeCategory = {
    code: string;
    name: string;
    description: string;
}
