import React, { useEffect, useState } from 'react'
import citiesData from '../config/config'
import Page from './Page';
import MainPage from './MainPage';
import { v1 as uuidv1 } from 'uuid';

function setLocalStorage(key, value) {
    localStorage.setItem(key, value);

}
const closedTab = () => {
    const pixel = JSON.parse(localStorage.getItem("pixel")) || [];
    const pixelSize = pixel.length
    let pixel_times = pixel[pixelSize - 1]["times"] || 0;
    const startTime = JSON.parse(localStorage.getItem("startTime"));
    const endTime = new Date().getTime();
    let timeDiff = (endTime - startTime)
    timeDiff = Math.floor(timeDiff / 1000 % 60);
    pixel_times += (timeDiff)
    pixel[pixelSize - 1]["times"] = pixel_times
    localStorage.removeItem("startTime")
    setLocalStorage("pixel", JSON.stringify(pixel));

}
function createPixel() {
    const startTime = new Date().getTime();
    setLocalStorage("startTime", (startTime));

    const pixel = JSON.parse(localStorage.getItem("pixel")) || [];
    const pixelSize = pixel.length
    let id = ""
    const currentDate = new Date().toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).replace(/\D/g, '/')
    if (pixelSize == 0) {
        id = uuidv1()
        addPixelToLocalStorage(pixel, id, currentDate)
    }
    else if (currentDate != pixel[pixelSize - 1]["date"]) {
        id = pixel[pixelSize - 1]["id"]
        addPixelToLocalStorage(pixel, id, currentDate)
    }

}

const addPixelToLocalStorage = function (pixel, id, currentDate) {
    let newPixel = { "id": id, "date": currentDate }
    pixel.push(newPixel)
    setLocalStorage("pixel", JSON.stringify(pixel));
}
// when user is about to close tab invoke function that will count closing tabs
window.onbeforeunload = function () {
    closedTab();
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