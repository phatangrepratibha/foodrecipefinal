import React, { Component } from 'react'
import { Route } from 'react-router'
import { redirect } from 'react-router'


const ProtectedRoute = ({auth,component:component,...rest}) => {
  return (
<>

<div>
    <Route{...rest} render={(props)=>{
        if(auth) return <Component{...props}/>
        if(!auth) return <redirect to={{path:'/',state:{from:props.location}}}/>
    }}/>
</div>
</>
  )
}

export default ProtectedRoute;
