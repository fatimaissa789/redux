import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodos,removeTodos, updateTodos, } from "../redux/reducer";

const mapStateToProps = (state) =>{
  return {
    todo:state
  }
};
const mapDispatchToProps = (dispatch) => {
  return{
    addTodo : (obj) => dispatch(addTodos (obj)),
    removeTodo : (id) => dispatch(removeTodos (id)),
    updateTodo : (obj) => dispatch (updateTodos(obj))
  }
}
const ListTask = (props) => {
  const [todo, setTodo]= useState("");
  const inputRef= useRef (true);  
  const changeTerms = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();


  };
  const update =(id, value, e) =>{
     if(e.which === 13){
      props.updateTodo({id, description: value});
      inputRef.current.disabled = true
     }
    

  };

  const handleChange = (e) =>{
    setTodo(e.target.value);
  };
  console.log("props store",props)
  return (
    <div className="addList">
      <input type="text" onChange = {(e) => handleChange(e)}className="list-input" />
      <button className="add-btn" onClick={() => props.addTodo({
        id: 1,
        description: todo,
        isDone:false

      })}>Ajouter</button>
      <br />
      <ul>

        {
          props.todo.map ((description) => {
            return <li key = {description.id}>
              <textarea ref={inputRef} disabled={inputRef} defaultValue={description.description} onKeyPress={(e)=> update(description.id, inputRef.current.value, e)}></textarea>
            <button onClick={()=>changeTerms()}>Modifier</button>
            <button onClick={() => props.removeTodo(description.id)}>Supprimer</button></li>
          })
        }
      </ul>
    </div>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(ListTask);
