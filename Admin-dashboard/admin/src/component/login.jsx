import { useRef } from "react"
import {Link} from "react-router-dom"
import webmethods from "../services/webmethod"
import apis from "../services/apis"
export default function Login() {
    let emailBox = useRef()
    let passwordBox = useRef()
    let islogin = async(event) =>{
        event.preventDefault()
        let obj = {
            username:emailBox.current.value,
            password:passwordBox.current.value
        }
        let response = await webmethods.postapi(apis.LOGINAPI,obj)
        console.log(response)
    }
    return <>
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("./public/image.jpeg")`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className="container p-4 w-50" style={{ height: "fit-content", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "10px", backgroundColor: `rgba(255,255,255,0.5)` }}>
                <h3 className='text-center'>Login page</h3>
                <form onSubmit={islogin}>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={emailBox} required className="form-control" placeholder="Enter email here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={passwordBox} required className="form-control" placeholder="Enter Password here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-danger w-100" >Login</button> &nbsp;&nbsp;&nbsp;
                            {/* {msg} */}
                            <Link to='/Signup' className="text-center w-100 text-danger d-block fw-bold" style={{textDecoration:"none"}}>Sign Up or Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}