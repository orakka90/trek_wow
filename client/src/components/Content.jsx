import React, { Component } from 'react'
import styles from '../style.css'
import logo from './images/icon-modified.png'; // with import


export default function Content(props) {
    const city = props.city
    const citiesLength = props.citiesLength
    let img1 = props.city.images ? props.city.images[0] : ""
    let img2 = props.city.images ? props.city.images[1] : ""
    return (
        <>
            <div className="column middle">
                <img className='logo' style={{ width: '3vw', height: '6vh', alignItems: 'normal' }} src={logo} />
                <hr />
                <h4>{city?.sub_title}</h4>
                <hr />
                <div className="display: inline-block;">
                    <img style={{ width: '20vw', height: '40vh' }} src={(img1)} />
                    <img style={{ width: '20vw', height: '40vh' }} src={(img2)} />
                </div>
                <div className='grid_btn'>
                    {
                        city.id !== 0 ?
                            <button onClick={() => props.prevPage()} className="btn_prev"> Prev</button>
                            : <></>
                    }
                    {
                        city.id !== citiesLength - 1 ?
                            <button onClick={() => props.nextPage()} className="btn_next">Next</button> : <></>
                    }

                </div>
                <p className="content">{city?.content}</p>
                <div className='grid_btn'>
                    {
                        city.id !== 0 ?
                            <button onClick={() => props.prevPage()} className="btn_prev"> Prev</button>
                            : <></>
                    }
                    {
                        city.id !== citiesLength - 1 ?
                            <button onClick={() => props.nextPage()} className="btn_next">Next</button> : <></>
                    }

                </div>
            </div>
        </>
    )
} 