import Employee from "./employee.js"
import axios from "axios"

export class Employees{
    constructor(){
        this.setDiv()
        this.getEmployees()
        this.initInputValues()
    }

    initInputValues(){
        this.inputValues = {
            name: '',
            salary: '',
            age: ''
        }
    }

    setDiv(){
        const dashboard = document.querySelector('#dashboard')

        dashboard.innerHTML += `<div id="employees"></div>`

        dashboard.innerHTML += `
        <div id="add-employee">
            <input type = "text" id= "name" placeholder="name" /> </br>
            <input type = "text" id= "salary" placeholder="salary" /> </br>
            <input type = "text" id= "age" placeholder="age" /> </br>
            <button id="add">Add</button>
        </div>`

        this.eventHandlers()
    }

    eventHandlers(){
        document.querySelector('#name').addEventListener('input',(event)=>{
            this.inputValues.name = event.target.value
        })
        document.querySelector('#salary').addEventListener('input',(event)=>{
            this.inputValues.salary = event.target.value
        })
        document.querySelector('#age').addEventListener('input',(event)=>{
            this.inputValues.age = event.target.value
        })
        document.querySelector('#add').addEventListener('click',()=>{
            console.log('klik');
            this.addEmployee()
        })
    }

    addEmployee(){
        axios.post('http://dummy.restapiexample.com/api/v1/create', JSON.stringify(this.inputValues))
        .then(res =>{
            console.log(res)
        })

        // fetch('http://dummy.restapiexample.com/api/v1/create',{
        //     method: 'POST',
        //     body: JSON.stringify(this.inputValues)
        // }).then(response => response.json())
        // .then(json => {
        //     console.log(json.data.id);
        //    // this.getEmployees() //imalo bi smisla da server stvarno upisuje novog u bazu
        // })
        
    }

    getEmployees(){
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(json => {
                console.log(json.data);
                this.setEmplyees(json.data.slice(-10))
            })
    }

    setEmplyees(employees){
        let ul = `<ul>`
        employees.forEach(employee => {
            let item = new Employee(employee.id,employee.employee_name,employee.employee_salary,employee.employee_age,employee.profil_image)
            ul += item.getEmployee()
        })
        ul += `</ul>`

        const divEmplyees = document.querySelector('#employees')
        divEmplyees.innerHTML = '' //mozda ne treba
        divEmplyees.innerHTML = ul
    }

}