import React, { useEffect, useState } from 'react'
import citiesData from '../config/config'
import Page from './Page';
import MainPage from './MainPage';
import { v1 as uuidv1 } from 'uuid';

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);

}
function createPixel() {
    const pixel = JSON.parse(localStorage.getItem("pixel")) || [];
    const pixelSize = pixel.length
    let id = ""
    const currentDate = new Date().toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).replace(/\D/g, '/')
    if (pixelSize == 0) {
        id = uuidv1()
    }
    else if (currentDate != pixel[pixelSize - 1]["date"]) {
        id = pixel[pixelSize - 1]["id"]
    }
    else {
        return
    }
    let newPixel = { "id": id, "date": currentDate }
    pixel.push(newPixel)
    setLocalStorage("pixel", JSON.stringify(pixel));
}
export default function Controller() {

    useEffect(() => {
        createPixel()
    }, [])


    return (
        <>
        </>
    )
}