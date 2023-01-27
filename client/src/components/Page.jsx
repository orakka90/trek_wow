import React, { useEffect, useState } from 'react'
import Content from './Content'
import Footer from './Footer'
import LeftAdd from './LeftAdd'
import RightAdd from './RightAdd'
import { citiesData } from '../config/config'
import { useLocation } from "react-router-dom";


export default function Page() {
    const [city, setCity] = useState({})
    const citiesLength = citiesData?.length;
    const location = useLocation();

    useEffect(() => {
        citiesData.map(cityData => {
            if (location.pathname === "/" + cityData.route) {
                setCity(cityData)
                return
            }
        })

    }, []);

    const nextPage = () => {
        const next = (city.id + 1) % citiesLength
        setCity(citiesData[next], next)
        window.history.replaceState(null, '', `/${citiesData[next].route}`)
    }

    const prevPage = () => {
        const prev = (city.id - 1) % citiesLength
        setCity(citiesData[prev])
        window.history.replaceState(null, '', `/${citiesData[prev].route}`)
    }

    const homePageClick = () => {
        window.location.pathname = "/"
    }

    return (
        <div>
            <div className='row'>
                <LeftAdd></LeftAdd>
                <Content city={city} prevPage={prevPage} nextPage={nextPage} homePage={homePageClick} citiesLength={citiesLength}></Content>
                <RightAdd></RightAdd>
            </div>
            <Footer></Footer>
        </div>
    )
}