
import { useState } from 'react'
import { authController } from '../../../controller/AuthController';

import { useNavigate } from "react-router-dom";
import { authAxios } from '../../../http';
import IndexLeft from '../../home/indexleft/IndexLeft';
import './Login.css'
export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        authController.login(email, password).then(res => {
            console.log(res.status);
            localStorage.setItem('jwt', res)
            authAxios.defaults.headers.common['authorization'] = res;
            window.location.href = '/'

        }
        )
    }
    function handleSubmit(e: any) {
        e.preventDefault();
    }

    return (
        <div>
            {/* <IndexLeft propx= "thien"/> */}

            <div className="container1">
                <div className="container11">
                    <h1 className='login'>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input type="text" id="username" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-control">
                            <input type="text" id="email" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button className='btnLogin' onClick={login}>Login</button>
                        <div className="signup_link">Not a member? <a >Signup</a></div>
                    </form>
                </div>
            </div>

        </div>
    )
}
