import React, { useState, useEffect } from 'react'
import Tache from './Tache'
import Updatetodo from './Updatetodo'
export default function ListTodo() {
    
    const[listTache, setListTache] = useState(localStorage.getItem("todolist"))
    const[auxTache, setAuxTache] = useState(JSON.parse(listTache))
    const[inputNameAdd, setInputNameAdd] = useState("")
    const[inputdescAdd, setInputdescAdd] = useState("")
    const[rowSelected, setRowSelected] = useState("")
    const[loaded,setLoaded] = useState("")






    useEffect(() => {
        console.log("effect", rowSelected)
        if(!loaded || loaded === ""){
            setLoaded(true)
        }else if(listTache !== localStorage.getItem("todolist")){
            console.log("effectUpdate")
            localStorage.setItem("todolist", listTache)
        }
    })

    const addToDo = (evt) => {
        var newTodo = {
            name:inputNameAdd,
            description:inputdescAdd,
            isCompleted:false
        }
        if(inputNameAdd === ""){
            alert("Saisir le nom de la tâche")
        }else if(inputdescAdd === ""){
            alert("Saisir la desciption de la tâche")
        }else{
            auxTache.unshift(newTodo)
            setListTache(JSON.stringify(auxTache))
        }
    }

    const deleteIiem = (evt) => {
        auxTache.splice(evt.target.getAttribute('rownbr'), 1)
        setListTache(JSON.stringify(auxTache))
    }


    const ShowUpdateForm = (e) =>{
        console.log(e.target.getAttribute('rownbr'))
        setRowSelected (e.target.getAttribute('rownbr'))
    }


    const updateIiem = (row, name, desc, ic) => {
        var modifyItiem = {
            name:name,
            description:desc,
            isCompleted:ic
        }

        auxTache[row] = modifyItiem
        setListTache(JSON.stringify(auxTache))
        console.log("row", row)
        console.log("name", name)
        console.log("desc", desc)
        console.log("ic", ic)
        console.log(auxTache)
        console.log(listTache)
        setRowSelected("")
    }
    
    return (
        <div value={listTache} style={{ display:"inline-block", width:"80%", textAlign:"left"}}>
            <h1>Liste des tâches</h1>
            
            <div className="ToDoList">
                {auxTache.length == 0 ?
                    <div style={{textAlign:"center"}}>
                        Aucune tâche dans la liste
                    </div>
                    :
                    auxTache.map((UneTache,acc) =>
                        <Tache updateFn={ShowUpdateForm} delFn={deleteIiem} rowNbr={acc} name={UneTache.name} description={UneTache.description} isCompleted={UneTache.isCompleted} />
                    )
                }
            </div>
            

            <h1 style={{marginTop:"50px"}}>Créer une nouvelle tâche</h1>

            <form className="addToDo">
                <div className="mb-3">
                    <label for="tacheName" className="form-label">Nom de la tâche</label>
                    <input type="text" onChange={e => setInputNameAdd(e.target.value)} className="form-control" value={inputNameAdd} id="tacheName" />
                </div>
                <div className="mb-3">
                    <label for="tacheName" className="form-label">Description de la tâche en une ligne</label>
                    <input type="text" onChange={e => setInputdescAdd(e.target.value)} className="form-control" value={inputdescAdd} id="tacheDesc" />
                </div>
                <div>
                    <div className="btn btn-primary" onClick={addToDo} style={{backgroundColor:"#3AA8FF", borderColor:"#3AA8FF"}}>Ajouter la tâche</div>
                </div>
            </form>
            
            {
                rowSelected != "" ? 
                    <Updatetodo hundleclick={updateIiem} rowNbr={rowSelected} name={auxTache[rowSelected].name} description={auxTache[rowSelected].description} isCompleted={auxTache[rowSelected].isCompleted} />
                :
                    <div></div>
            }

        </div>
    )
}
