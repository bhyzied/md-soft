import React from 'react'

export default function Tache(props) {
    
    return (
        <div className="ToDo">
            <span className="todoName">{props.name}</span> : <span>{props.description}</span>
            <span className="toDoDelete" rowNbr={props.rowNbr} onClick={props.delFn.bind(this)} >Supprimer</span> 
            <span className="toDoDelete" rowNbr={props.rowNbr} onClick={props.updateFn.bind(this)} >Modifier</span>
            {props.isCompleted === 'true' || props.isCompleted === true ? 
                <span className="todoCompleted">
                    Complétée
                </span>
            :
                <span className="todoNoCompleted">
                    Non complétée
                </span>
            }
        </div>
    )
}
