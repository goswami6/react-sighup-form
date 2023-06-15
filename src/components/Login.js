import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Signin_img from './Signin_img'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const history  = useNavigate();


    const [inpval,setInpval] = useState({
        email:"",
        password:""
    
      })
      const [data,setData] = useState([]);
    
    
      console.log(inpval);
      const getdata = (e)=>{
        //console.log(e.target.value);
    
        const {value,name} = e.target;
        //console.log(value,name);
    
        setInpval(()=>{
          return {
            ...inpval,
            [name]:value
          }
    
        })
    
      }
      const adddata = (e)=>{
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);
    
        const {email,password} = inpval;
    
        if(email === ""){
          alert("email field is requred")
        }else if(!email.includes("@")){
          alert("plz enter valid email address")
        }else if(password === ""){
          alert("password field is requred")
        }else if(password.length < 5){
          alert("password lenght greater than five")
        }else{
          if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
            console.log(userdata);
            const userlogin = userdata.filter((el,k)=>{
              return el.email === email && el.password === password
          });

          if(userlogin.length === 0){
            alert("invalid details")
          }else{
            console.log("user login succesfuly");

            localStorage.setItem("user_login",JSON.stringify(userlogin))
            history("/detail")
          }


          }
    
    
    
    
        }
      }
    
  return (
    <>
    <div className='container mt-3'>
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{width:"100%"}}>
            <h3 className='text-center col-lg-6'>Sign In</h3>
            <Form>
      
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
       
        <Form.Control type="email"name='email' onChange={getdata} placeholder="Enter email" />
       
      </Form.Group>
      
     
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password"name='password' onChange={getdata} placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={adddata} className='col-lg-6' style={{background:"rgb(67, 185,127)"}}>Submit</Button>
    
      
    </Form>

    <p className='mt-3'>Already Have an Account <span>SignIn</span></p>
          </div>
          <Signin_img/>
        
      
         
        </section>
       </div>

    
    </>

  )
}

export default Login
