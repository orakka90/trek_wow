import React, { Component, useEffect, useState } from 'react'
import styles from '../style.css'
import citiesData from '../config/config'

export default function Content() {
    console.log(citiesData);
    const citiesLength = citiesData?.length;
    const [city, setCity] = useState({})
    useEffect(() => {
        if (window.location.pathname === "/") {
            setCity(citiesData[0])
            return
        }
        citiesData.map(cityData => {
            if (window.location.pathname == "/" + cityData.route) {
                setCity(cityData)
                return
            }
        })

    }, [])

    const nextPage = () => {
        const next = (city.id) % citiesLength
        setCity(citiesData[next], next)
        window.location.pathname = citiesData[next].route
    }

    const prevPage = () => {
        const prev = (city.id) % citiesLength
        setCity(citiesData[prev])
        window.location.pathname = citiesData[prev].route

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