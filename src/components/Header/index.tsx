import * as React from 'react';
import {useState} from "react";
import s from './Header.module.scss'
import logo from '../../assets/logo.svg';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {Link} from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


import User from "./User";
import Signing from "../Signing";
import IconButton from "@mui/material/IconButton";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";
import Navbar from "../../pages/Home/Navbar";
import AppContext from "../../context";
import useAppContext from "../../utils/hooks/useAppContext";


function Header() {

    const {setSigningOpen} = useAppContext();


    const [isMenuVisible, setIsMenuVisible] = useState(false)


    const {width} = useWindowDimensions()

    return (
        <header>
            <div className={s.top}>
                <ul>
                    <li>
                        <LocalPhoneOutlinedIcon/>
                        <a href="tel:+380 99 835 2736">+380 99 835 2736</a>
                    </li>
                    <li>
                        <EmailOutlinedIcon/>
                        <a href="mailto:contact.beego@gmail.com">contact.beego@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div className={s.bottom}>
                <div className={s.inner}>

                    <Link to="/">
                        <img src={logo} alt="logoWithName" className={s.logo}/>
                    </Link>
                    {
                        width < 767 ? (
                            <IconButton onClick={() => setIsMenuVisible(prev => !prev)} sx={{marginLeft: '20px'}}>
                                <MenuRoundedIcon fontSize={'large'}/>
                            </IconButton>
                        ) : (<Navbar isMenuVisible={isMenuVisible} onClickCloseMenu={() => setIsMenuVisible(false)}/>)
                    }
                    <User
                        onClockModalOpen={() => setSigningOpen(true)}/>

                </div>

            </div>
            {width < 767 && <Navbar isMenuVisible={isMenuVisible} onClickCloseMenu={() => setIsMenuVisible(false)}/>}
            <Signing/>
        </header>
    );
}

export default Header;
