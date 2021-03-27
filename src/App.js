import React, { Component} from 'react';
// import Authentification from './components/Authentication'
import Auth from './components/Auth'
import AppContecnt from './components/AppContent'

class App extends Component {

  state  = {
    isAuth : false
  }

  constructor(props){
    super(props)
    
    if(!localStorage.getItem("todolist")){
      localStorage.setItem("todolist",JSON.stringify([]))
    }
    if(localStorage.getItem("isAuth")){
      this.state.isAuth = localStorage.getItem("isAuth")
    }
    if(!localStorage.getItem("todolist")){
      localStorage.getItem("todolist",JSON.stringify([]))       
    }
    this.checkAuth = this.checkAuth.bind(this)
    this.deconnexion = this.deconnexion.bind(this)

    
  }

  handler(){
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
  }

  checkAuth(){
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    if(email === ""){
        alert("saisir votre email")
    }else if(pass === ""){
        alert("saisir votre mot de passe")
    }else if(!email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)){
        alert("saisir un e-mail avec un format valide")
    }else if(email === "test@test.com" && pass === "test"){
        localStorage.setItem("isAuth", true);
        localStorage.setItem("email", email);
        localStorage.setItem("pass", pass);
        this.setState({
          isAuth : true
        })
    }else{
        alert("email ou mot de passe incorrect")
    }
  }

  deconnexion(){
    localStorage.removeItem("isAuth");
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    this.setState({
      isAuth : false
    })
  }


  render() {
    if(this.state.isAuth){
      return(
        <AppContecnt deconnexion={this.deconnexion} />
        // <div onClick={this.deconnection.bind(this)} style={{cursor: 'pointer'}} className="btn btn-outline-primary">déconnexion</div>
      )
    }else{
      return (

        <Auth checkAuth={this.checkAuth} />
  
      );
    }

    
  }
 
  
}

export default App;
