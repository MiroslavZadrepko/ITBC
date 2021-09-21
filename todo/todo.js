const inputTxt = document.querySelector('#input-text')
const forma = document.querySelector('#forma')
const divLista = document.querySelector('#lista')

let todos = []
let count = 0

forma.addEventListener('submit',(event)=>{
    event.preventDefault()

    let item =  {id:count++ ,text:inputTxt.value}
    todos.push(item)
    console.log(todos);

    const divItem = document.createElement('div')
    divItem.classList.add('item')

    const pText = document.createElement('p')
    pText.textContent = inputTxt.value

    const btnDel = document.createElement('button')
    btnDel.textContent = 'X'
    
    btnDel.addEventListener('click',()=>{
        divItem.remove()

        let index = todos.findIndex(todo=>todo.id == item.id )
        todos.splice(index,1)

        console.log(todos);
    })

    divItem.append(pText,btnDel)  
    divLista.append(divItem)
    
    inputTxt.value = ''
})


