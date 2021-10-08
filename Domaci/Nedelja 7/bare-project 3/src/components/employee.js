export default class Employee{
    constructor(id,employee_name,employee_salary,employee_age,profil_image){
        this.id = id
        this.employee_name = employee_name
        this.employee_salary = employee_salary
        this.employee_age = employee_age
        this.profil_image = profil_image

        console.log(`Init employee - ${this.employee_name}`);
    }

    getEmployee(){
        return `<li> ${this.employee_name} , ${this.employee_age} </li>`
    }
}