import React, { useEffect, useState } from 'react'
import Card from './Card'
import citiesData from '../config/config'
import styles from '../style.css'
import LeftAdd from './LeftAdd'
import RightAdd from './RightAdd'

export default function MainPage() {

    return (
        <div>
            <div class="header_main_page">
                <h1>Trek WoW</h1>
                <p>The best tourist site in the world</p>
            </div>
            <div className='row'>

                <LeftAdd></LeftAdd>

                <div className='card_list column middle'>
                    {
                        citiesData.map((city) => (
                            <Card
                                city={city}
                            />
                        ))
                    }
                </div>
                <RightAdd></RightAdd>

            </div>

        </div>
    )
}