export class User{
    title:string
    firstName:string
    lastName:string
    email:string
    profile?:string
    
    constructor(title:string, firstName:string, lastName:string,email:string){
        this.title = title
        this.firstName = firstName
        this.lastName = lastName
        this.email =email
    }
}