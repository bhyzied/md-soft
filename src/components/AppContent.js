import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Nav from './Nav'
import TodoList from './ListTodo'

export default class AppContent extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav deconnexion={this.props.deconnexion} />
                <Route exact path="/" component={TodoList} />
            </BrowserRouter>
        )
    }
}
