import React, { Component } from 'react'
import styles from '../style.css'

export default function Header() {
    return (
        <>
            <div className="column middle">
                <h2>Main Content</h2>
                <img style={{ width: '40vw', height: '40vh' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXmDh4QozqFUd60sl8bVxRGhOsLXA25VCKAS7JqYhPyPSZGUvq0hYF_0U8wnqcdpAxTY&usqp=CAU' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                <div className='grid_btn'>
                    <button className="btn_next"></button>
                    <button className="btn_next"></button>
                </div>

            </div>
        </>
    ) 
} 