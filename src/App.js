import { useState } from "react"

function App(){
  let [searchText,setSearchtext] = useState('')
  let [todolist,setTodolist] = useState([{
    id:1,todo:"learn React"
  },{
    id:2,todo:"Learn Angular"
  }])


  return (
    <div className="container">
      <h2>Todo List using React </h2>
      <div className="input-field">
        <input  placeholder="Enter a todo..." value={searchText} onChange={(e)=>{
          setSearchtext(e.target.value)
        }} id='input'/> 
        <button className="btn" onClick={()=>{
          if (searchText===''){
            alert('ADD Some task!')
          }else{
            setTodolist([...todolist,{id:todolist.length+1,todo:searchText}])
            setSearchtext('')
          }
        }}>Add</button>
      </div>
      <div className="todos">
        <ul>
          {
            todolist.map((ele)=>{
                       return <li key={ele.id} className="list-items">
                          <p>{ele.todo}</p><button onClick={()=>{
                           let filteredTodos =  todolist.filter((e)=>{
                              return e.id!==ele.id
                            })
                            setTodolist(filteredTodos)
                          }}>X</button>
                        </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
export default App