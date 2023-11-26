import { Link } from "react-router-dom";
import React from "react";
import {MdFormatColorText} from 'react-icons/md'
import {CiDiscount1} from 'react-icons/ci'
import {CiGlobe} from 'react-icons/ci'
import {CiTrophy} from 'react-icons/ci'
import { HiCurrencyDollar } from "react-icons/hi2";
<link rel="stylesheet" href="" />


const Footer = () => {
    return (

          <form action=""class="footer has-background-info-dark is-medium container"  > 
            <div class="content has-text-centered ">
                <div class="columns">
                    <div class="column">
                        <MdFormatColorText />
                    </div>
                    <div class="column">
                    <CiDiscount1 />
                    </div>
                    <div class="column">
                    <CiGlobe />
                    </div>
                    <div class="column">
                        <CiTrophy/>
                    </div>
                    <div class="column">
                    <HiCurrencyDollar />

                    </div>
                </div>
            </div>
            </form>

    )
}
export default Footer;