import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'


const UseAuth=()=>{
    const name=localStorage.getItem('name')
    console.log('protected',name)
    if(name){
        return true
    }else{

        return false
    }
}
const protectedroutes = (props:any) => {
 const auth=UseAuth();
 return auth?<Outlet/>:<Navigate to="/login"/>
}

export default protectedroutes