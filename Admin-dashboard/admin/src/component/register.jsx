import { useRef, useState } from "react"
import webMethod from "../services/webmethod";
import apis from "../services/apis";

export default function Register() {
    let nameBox = useRef();
    let phoneBox = useRef();
    let emailBox = useRef();
    let passwordBox = useRef();
    let genderBox = useRef();
    const [msg,setmsg] = useState("");
    let isregister = async(event) => {
        event.preventDefault()
        let obj = {
            email:emailBox.current.value,
            password:passwordBox.current.value
        }
        let response = await webMethod.postapi(apis.SIGNUPAPI,obj);
        console.log(response)
        
    }
    return <>
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url("./public/image.jpeg")`, height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

            <div className="container p-4 w-50" style={{ height: "fit-content", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "10px", backgroundColor: `rgba(255,255,255,0.5)` }}>
                <h3 className='text-center'>Register or Signup</h3>
                <form onSubmit={isregister}>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={emailBox} className="form-control" placeholder="Enter Email here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <input type="text" ref={passwordBox} className="form-control" placeholder="Enter Password here" style={{ backgroundColor: `rgba(255,255,255,0.7)` }}></input>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <button className="btn btn-danger w-100" >Register or Signup</button> &nbsp;&nbsp;&nbsp;
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}