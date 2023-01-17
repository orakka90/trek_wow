import React, { useEffect, useState } from 'react'
import citiesData from '../config/config'
import Page from './Page';
import MainPage from './MainPage';
import Blog from './Blog';


export default function Controller() {
    const [homeRoute, setRoute] = useState(true)

    useEffect(() => {
        if (window.location.pathname === "/") {
            setRoute(true)
            return
        }
        citiesData.map(cityData => {
            if (window.location.pathname === "/" + cityData.route) {
                setRoute(false)
                return
            }
        })

    }, [])


    return (
        <>
            {
                homeRoute === false ?
                    <Page></Page>
                    :
                    <Blog></Blog>
            }
        </>
    )
}