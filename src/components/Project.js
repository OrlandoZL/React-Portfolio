import React, { useState } from 'react';
import '../styles/styles.css'

const EmployeeImage = require('../images/Tracker.png')
const legenesisImage = require('../images/logo.png')
const EcommerceImage = require('../images/E-commerce.png')
const CalendarImage = require('../images/Calendar.png')

export default function Project() {


    return (
        <div className='page projects'>
            <div className='project' style={{ background: `url(${EmployeeImage})` }}>
                <div>
                    <a href='https://github.com/OrlandoZL/Employee-Tracker'>
                        <h3>
                            Employee Tracker
                        </h3>
                    </a>
                </div>
            </div>
            <div className='project' style={{ background: `url(${legenesisImage})` }}>
                <div>
                    <a href='https://legenesis.herokuapp.com/'>
                        <h3>
                            LeGenesis
                        </h3>
                    </a>
                    <a href='https://github.com/Darxmarx/character-creator'>
                        <h4>
                            Repo
                        </h4>
                    </a>
                </div>
                <div className='project' style={{ background: `url(${EcommerceImage})` }}>
                    <div>
                        <h3>
                            E-commerce
                        </h3>
                        <a href='https://github.com/OrlandoZL/E-Commerce-Back-End'>
                            <h4>
                                Repo
                            </h4>
                        </a>
                    </div>
                </div>
                <div className='project' style={{ background: `url(${CalendarImage})` }}>
                    <div>
                        <a href='https://orlandozl.github.io/Calendar-App/'>
                            <h3>
                                Calendar
                            </h3>
                        </a>
                        <a href='https://github.com/OrlandoZL/Calendar-App'>
                            <h4>
                                Repo
                            </h4>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )

}