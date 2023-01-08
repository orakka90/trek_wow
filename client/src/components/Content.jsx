import React, { Component } from 'react'
import styles from '../style.css'

export default function Content(props) {
    const city = props.city
    const citiesLength = props.citiesLength
    let img1 = props.city.images ? props.city.images[0] : ""
    let img2 = props.city.images ? props.city.images[1] : ""

    return (
        <>
            <div className="column middle">
                <h2>{city?.title}</h2>
                <hr />
                <h4>{city?.title}</h4>
                <hr />
                <div className="display: inline-block;">
                    <img style={{ width: '20vw', height: '40vh' }} src={(img1)} />
                    <img style={{ width: '20vw', height: '40vh' }} src={(img2)} />
                </div>
                <p>{city?.content}</p>
                <div className='grid_btn'>
                    {
                        city.id !== citiesLength - 1 ?

                            <button onClick={() => props.nextPage()} className="btn_next">Next</button> : <></>
                    }
                    {
                        city.id !== 0 ?
                            <button onClick={() => props.prevPage()} className="btn_next"> Prev</button>
                            : <></>
                    }
                </div>

            </div>
        </>
    )
} 