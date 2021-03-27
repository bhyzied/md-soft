import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav" >
                <span className="nav-link todo" >Todo List</span>
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                {/* <NavLink className="nav-link" to="/taches">Tâches</NavLink> */}
                <span className="nav-link description" onClick={this.props.deconnexion.bind(this)} >Déconnexion</span>  
            </nav>
        )
    }
}
