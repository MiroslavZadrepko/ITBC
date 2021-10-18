const Todo = ({todo, setTodos}) => {
    return ( 
        <div>
            <p style={todo.done?{textDecoration:'line-through'}:{}} onClick={()=>{
                setTodos((prev)=>{
                    let kopija = [...prev] // pravimo kopiju niza todos (prev == todos stari)
                    let findTodo = {...todo} // pravimo novi objekat findTodo i u njega kopiramo sadrzaj od todo
                    findTodo.done = !findTodo.done // u tom novom objektu menjamo done na suprotno od trenutnog
                    let indeks = kopija.findIndex(el => el.id === todo.id) // trazim indeks elementa todo u nizu kopija/todos
                    kopija[indeks] = findTodo // vezujem kopiju za novi objekat findTodo
                    console.log(kopija);
                    return kopija // setujem state todos na kopiju
                })
            }}>{todo.text}</p>
            <button onClick={()=>{
                setTodos((prev)=>{
                    let kopija = [...prev]
                    //let indeks = kopija.findIndex(el => el.id === todo.id)
                    let indeks = kopija.indexOf(todo)
                    kopija.splice(indeks,1)
                    return kopija
                })
            }}>X</button>
        </div>
     );
}
 
export default Todo;