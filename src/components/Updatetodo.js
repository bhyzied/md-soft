import React, { useState, useEffect } from 'react'


export default function Updatetodo(props) {
    const[inputNameUpdate, setInputNameUpdate] = useState(props.name)
    const[inputDescUpdate, setInputDescpdate] = useState(props.description)
    const[inputIsCompleteUpdate, setInputIsCompletepdate] = useState(props.isCompleted)

    
    return (
        <div className="updateForm" id="updateFrom" >
            <div className="form">
                <div className="mb-3">
                    <label for="tacheNameUpdate" className="form-label">Nom de la tâche</label>
                    <input type="text" onChange={e => setInputNameUpdate(e.target.value)} className="form-control" value={inputNameUpdate} id="tacheNameUpdate" />
                </div>
                <div className="mb-3">
                    <label for="tacheDescUpdate" className="form-label">Description de la tâche en une ligne</label>
                    <input type="text" onChange={e => setInputDescpdate(e.target.value)} className="form-control" value={inputDescUpdate} id="tacheDescUpdate" />
                </div>

                <select class="form-select" aria-label="Default select example" value={inputIsCompleteUpdate} onChange={e => setInputIsCompletepdate(e.target.value)}>
                    <option value={false}>Non complétée</option>
                    <option value={true}>Complétée</option>
                </select>
                <div className="btn btn-primary" onClick={() => props.hundleclick(props.rowNbr, inputNameUpdate, inputDescUpdate, inputIsCompleteUpdate)} style={{backgroundColor:"#3AA8FF", borderColor:"#3AA8FF"}}>Ajouter la tâche</div>
            </div>
        </div>
    )
}
