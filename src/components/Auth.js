import React, { Component } from 'react'
// import bg from '../../public/bg_auth.jpg'
import bg from '../img/bg_auth.jpg'
import iconpass from '../img/lock-fill.svg'


export default class Auth extends Component {
    state = {
        email: "",
        pass: ""
    }

    emailChange(e){
        this.setState({
            email : e.target.value
        })
    }

    passChange(e){
        this.setState({
            pass : e.target.value
        })
    }

    

    render() {
        return (
                <div className="login-container" style={{backgroundImage: 'url("'+bg+'")'}}>
                    <div>

                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">@</span>
                            <input type="email" 
                            value={this.state.email} 
                            onChange={this.emailChange.bind(this)}  
                            id="email"
                            className="form-control" style={{width: "40px"}} placeholder="E-Mail" aria-label="E-Mail" aria-describedby="basic-addon1" />

                        </div>


                        <div className="input-group mb-3">
                          <span className="input-group-text" style={{backgroundImage: 'url("'+iconpass+'")', backgroundRepeat: "no-repeat", backgroundPosition: 'center center', width: "40px"}} id="basic-addon1"> </span>
                            
                            <input type="password" 
                            value={this.state.pass} 
                            onChange={this.passChange.bind(this)}  
                            id="pass"
                            className="form-control" placeholder="Mot de passe" aria-label="Mot de passe" aria-describedby="basic-addon1" />

                        </div>
                        <div onClick={this.props.checkAuth.bind(this)} style={{cursor: 'pointer', color: "#FFFFFF", borderColor: "#FFF"}} className="btn btn-outline-primary">Connexion</div>
                    </div>
                </div>
        )
    }
}
