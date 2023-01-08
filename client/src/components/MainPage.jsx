import React, { Component, useEffect, useState } from 'react'
import styles from '../style.css'
import Content from './Content'
import Footer from './Footer'
import LeftAdd from './LeftAdd'
import RightAdd from './RightAdd'
import citiesData from '../config/config'

export default function MainPage() {
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
        const next = (city.id + 1) % citiesLength
        setCity(citiesData[next], next)
        window.location.pathname = citiesData[next].route
    }

    const prevPage = () => {
        const prev = (city.id - 1) % citiesLength
        setCity(citiesData[prev])
        window.location.pathname = citiesData[prev].route
    }
    return (
        <>
            <div className='row'>
                <LeftAdd></LeftAdd>
                <Content city={city} prevPage={prevPage} nextPage={nextPage} citiesLength={citiesLength}></Content>
                <RightAdd></RightAdd>
            </div>
            <div className='row_footer'>
                <Footer></Footer>
            </div>
        </>
    )
}