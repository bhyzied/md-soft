import React from 'react'

export default function ToDo(props) {
    return (
        <div>
            {this.props.name} : {this.props.description} 
            <span>Supprimer</span> 
            <span>Modifier</span>
            {this.props.isCompleted ? 
                <span className="Completed">
                    Complétée
                </span>
            :
                <span className="noCompleted">
                    Non complétée
                </span>
            }
        </div>
    )
}
