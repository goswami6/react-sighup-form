
import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Signin_img from './Signin_img'
import { NavLink } from 'react-router-dom'



const Home = () => {
  const [inpval,setInpval] = useState({
    name:"",
    email:"",
    Date:"",
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
        [name]: value
      }

    })

  }
  const adddata = (e)=>{
    e.preventDefault();

    const {name,email,date,password} = inpval;

    if(name === ""){
      alert("name field id requred")
    }else if(email === ""){
      alert("email field is requred")
    }else if(!email.includes("@")){
      alert("plz enter valid email address")
    }else if(date=== ""){
      alert("date field is requred")
    }else if(password === ""){
      alert("password field is requred")
    }else if(password.length < 5){
      alert("password lenght greater than five")
    }else{
      console.log("data added succesfully ");

      localStorage.setItem("useryoutube",JSON.stringify(...data,inpval));




    }
  }

  return (
    <>
       
       <div className='container mt-3'>
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{width:"100%"}}>
            <h3 className='text-center col-lg-6'>Sign Up</h3>
            <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
       
        <Form.Control type="text"name='name' onChange={getdata} placeholder="Enter Your Name" />
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
       
        <Form.Control type="email"name='email' onChange={getdata} placeholder="Enter email" />
       
      </Form.Group>
      
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
       
        <Form.Control name='date' onChange={getdata} type="date" />
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        
        <Form.Control type="password"name='password' onChange={getdata} placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={adddata} className='col-lg-6' style={{background:"rgb(67, 185,127)"}}>Submit</Button>
    
      
    </Form>

    <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span></p>
          </div>
          <Signin_img/>
      
         
        </section>
       </div>

    
    </>
  )
}

export default Home
