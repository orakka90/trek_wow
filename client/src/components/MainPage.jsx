import React, { useEffect, useState } from 'react'
import Content from './Content'
import Footer from './Footer'
import LeftAdd from './LeftAdd'
import RightAdd from './RightAdd'
import citiesData from '../config/config'

export default function MainPage() {
    const citiesLength = citiesData?.length;
    const [city, setCity] = useState({})
    const [homeRoute, setRoute] = useState(true)

    useEffect(() => {
        if (window.location.pathname === "/") {
            setCity(citiesData[0])
            setRoute(true)
            return
        }
        citiesData.map(cityData => {
            if (window.location.pathname === "/" + cityData.route) {
                setCity(cityData)
                setRoute(false)
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
            {
                homeRoute === false ?
                    <div>
                        <div className='row'>
                            <LeftAdd></LeftAdd>
                            <Content city={city} prevPage={prevPage} nextPage={nextPage} citiesLength={citiesLength}></Content>
                            <RightAdd></RightAdd>
                        </div>
                        <div className='row_footer'>
                            <Footer></Footer>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>
    )
}