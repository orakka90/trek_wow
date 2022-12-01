import React, { Component } from 'react'
import styles from '../style.css'
import Content from './Content'
import Footer from './Footer'
import LeftAdd from './LeftAdd'
import RightAdd from './RightAdd'

export default function MainPage() {
    return (
        <>
            <div className='row'>
                <LeftAdd></LeftAdd>
                <Content></Content>
                <RightAdd></RightAdd>
            </div>
            <div className='row_footer'>
                <Footer></Footer>
            </div>
        </>
    )
}