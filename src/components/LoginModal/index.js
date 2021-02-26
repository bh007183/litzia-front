import React, { useEffect, useState } from "react";
import "./style.css";
import M, { Modal } from "materialize-css";
import API from "../../api/admin-routes"

function LoginModal() {


    const [login, setLogin] = useState ({
        username: '',
        password: ''
    })
      
    const handleInputChange = event => {
        const name = event.target.name
        const value = event.target.value
        setLogin({...login, [name]: value})

    }

    const hanldeFormSubmit = event => {
        event.preventDefault()
        console.log("inside submit")
        API.adminLogin(login.username, login.password)
        .then(res => localStorage.setItem("Auth", res.data))
        .catch(err => console.log(err))
        setLogin({username: "", password: ""})
    }
    





    useEffect(() => {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    }, [])
    return (
        <div className="loginModal">
            <div className="container center" id='modalLog'>
                <a href="#login" className="btn btn-large transparent modal-trigger" id="loginBtn">Login</a>
            </div>

            <div id="login" className="modal ">
                <h5 className="modal-close">&#10005;</h5>
                <div className="modal-content center">
                    <h4>Login Form</h4>
                    <br></br>

                    <form action="#">

                        <div className="input-field">
                            <i className="material-icons prefix">person</i>
                            <input placeholder="username" name="username" value={login.username} onChange={handleInputChange} type="text" id="name"></input>
                            
                        </div>
                        <br></br>

                        <div className="input-field">
                            <i className="material-icons prefix">lock</i>
                            <input placeholder="password" type="password"  name="password" value={login.password} onChange={handleInputChange} id="pass"></input>
                            
                        </div>
                        <br></br>

                        <input onClick={hanldeFormSubmit} value="Login" className="btn btn-large"></input>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default LoginModal;
