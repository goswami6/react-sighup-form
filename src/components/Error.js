import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const history = useNavigate();
  return (
    <>
    <div className='container'>
        <div className='error d-flex flex-colimn justify-content-lg-center align-items-center'>
            <h4>Error! Page Not Found</h4>
            <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Login Page</button>
        </div>
    </div>
    </>
  )
}

export default Error
