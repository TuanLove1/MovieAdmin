import React, { Fragment } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './grid.css'
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import '@tsamantanis/react-glassmorphism/dist/index.css'
export default function AdminTemplate() {
    if (!localStorage.getItem('user'))
        return <Navigate replace to="/" />
    return (
        <>
            <div className='grid'>
                <div style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/00/21/30/82/360_F_21308207_cD6dd5pnvC3NP3DtzGxHzvaKfQ5ItlXL.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100%'}} className='row'>
                    <div className='col l-3 m-3 c-2'>
                        <Navbar />
                    </div>
                    <div  className='col l-9 l-o-3 m-9 m-o-3 c-12'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
