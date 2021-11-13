import React from 'react'
import {Route , Routes as Switch,Navigate } from 'react-router-dom'
import Results from './Results'

export const Routes = () => {
    return (
        <div className='p-4'>
           <Switch>
                <Route  path="/images" exact element={<Results/>} />
                <Route  path="/videos" exact element={<Results/>} />
                <Route  path="/news" exact element={<Results/>} />
                <Route  path="/search" exact element={<Results/>} />
                <Route path="/" element={<Navigate replace to="/search" />} />
                    
               
           </Switch>
           routes
        </div>
    )
}
