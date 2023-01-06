import React, { Component, useEffect, useState } from 'react'
import styles from '../style.css'
import citiesData from '../config/config'

export default function Content() {
    debugger
    const citiesLength = citiesData?.length;
    const [city, setCity] = useState([])
    useEffect(() => {
        debugger
        citiesData.map(cityData => {
            if (window.location.pathname === cityData.route) {
                setCity(cityData)
            }
        })
    }, [])

    const nextPage = () => {
        debugger
        const next = (city.id + 1) % citiesLength
        window.location.pathname = citiesData[next].route
        setCity(citiesData[next])
    }

    const prevPage = () => {
        debugger
        const prev = (city.id - 1) % citiesLength
        window.location.pathname = citiesData[prev].route
        setCity(citiesData[prev])
    }

    return (
        <>
            <div className="column middle">
                <h2>{city?.title}</h2>
                {/* <img style={{ width: '40vw', height: '40vh' }} src={city?.images[0]} /> */}
                <p>{city?.content}</p>
                <div className='grid_btn'>
                    <button onClick={nextPage} className="btn_next"></button>
                    <button onClick={prevPage} className="btn_next"></button>
                </div>

            </div>
        </>
    )
} 