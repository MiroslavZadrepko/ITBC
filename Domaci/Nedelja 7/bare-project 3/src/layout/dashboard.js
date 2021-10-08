import { Employees } from "../components";


export class Dashboard{
    constructor(){
        const app = document.querySelector('#app')
        app.innerHTML = `<div id="dashboard"><h1>Dashboard</h1></div>`

        const employees = new Employees()
        console.log(employees)

        console.log(`Init dashboard`)
    }
}