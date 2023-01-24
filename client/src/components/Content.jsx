import React, { Component } from 'react'
import styles from '../style.css'
import { websiteConfig } from '../config/config'


export default function Content(props) {
    const city = props.city
    const citiesLength = props.citiesLength
    const mystyle = {
        fontFamily: "'Montserrat', sans-serif; "
    };
    let img1 = props.city.images ? props.city.images[0] : ""
    let img2 = props.city.images ? props.city.images[1] : ""
    return (
        <>
            <div className="column middle">
                <h2>{city?.title}</h2>
                <hr />
                <h4>{city?.sub_title}</h4>
                <hr />
                <div className="display: inline-block;">
                    <img style={{ width: '20vw', height: '40vh' }} src={(img1)} />
                    <img style={{ width: '20vw', height: '40vh' }} src={(img2)} />
                </div>
                <p style={mystyle}>{city?.content}</p>
                <div className='grid_btn'>
                    {
                        city.id !== 0 ?
                            <button onClick={() => props.prevPage()} className="btn_next"> Prev</button>
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