import React from 'react';
import s from './Home.module.scss'
import googlePlayDownload from '../../assets/googlePlayDownload.svg'
import appleDownload from '../../assets/Apple-download.svg'
import sliderImageTemp1 from '../../assets/chart.webp'
import sliderImageTemp2 from '../../assets/apiary.webp'
import sliderImageTemp3 from '../../assets/queen.webp'
import {Splide, SplideSlide} from "@splidejs/react-splide";
import CoolBee from '../../assets/noun-certify-4482692.svg'
import '@splidejs/splide/dist/css/splide.min.css';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import useWindowDimensions from "../../utils/hooks/useWindowDimensions";

import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import Link from "@mui/material/Link";
import EqComponents from "../../assets/eq_components.jpg";
import dht from "../../assets/dht11.jpg";

interface HomeProps {

}


const Home: React.FC<HomeProps> = () => {
    const {t} = useTranslation();

    const navigate = useNavigate();
    const onClickCartHandler = () => {
        navigate("/shop");
    }

    const {width} = useWindowDimensions()


    return (
        <div className={s.container}>
            <div className={s.start}>
                <div className={s.left}>
                    <div className={s.quickInfo}>
                        <h1>
                            <span>BeeGo</span> - {t('HomePage.Tagline')}
                        </h1>
                        <p>
                            {t('HomePage.MainDescription')}
                        </p>

                        <div className={s.buttons}>
                            <button onClick={onClickCartHandler}>
                                {t('Order')}
                            </button>
                            <div className={s.download}>
                                <Link
                                    href='/'>
                                    <img src={googlePlayDownload} alt="google play"/>
                                </Link>
                                <Link
                                    href='/'>
                                    <img src={appleDownload} alt="apple store"/>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.slider}>
                        <img src={CoolBee} alt={'bee'}/>

                        {/*<Splide options={{*/}
                        {/*    type: 'loop',*/}
                        {/*    perPage: width < 500 ? 1 : 2,*/}
                        {/*    drag: false,*/}
                        {/*    autoplay: true,*/}
                        {/*    interval: 2000,*/}
                        {/*    wheel: true,*/}
                        {/*    width: '500px',*/}
                        {/*    // height: '350px',*/}
                        {/*    gap: '10px'*/}
                        {/*}}>*/}
                        {/*    <SplideSlide>*/}
                        {/*        <div className={s.imageBlock}>*/}
                        {/*            <img src={sliderImageTemp1} alt="sliderImageTemp" width='170px'/>*/}
                        {/*        </div>*/}

                        {/*    </SplideSlide>*/}
                        {/*    <SplideSlide>*/}
                        {/*        <div className={s.imageBlock}>*/}
                        {/*            <img src={sliderImageTemp2} alt="sliderImageTemp" width='170px'/>*/}
                        {/*        </div>*/}

                        {/*    </SplideSlide>*/}
                        {/*    <SplideSlide>*/}
                        {/*        <div className={s.imageBlock}>*/}
                        {/*            <img src={sliderImageTemp3} alt="sliderImageTemp" width='170px'/>*/}
                        {/*        </div>*/}

                        {/*    </SplideSlide>*/}

                        {/*</Splide>*/}
                    </div>
                </div>
            </div>
            <div className={s.benefits} id="benefits">
                <div className={s.inner}>

                    <h2>{t('HomePage.Benefits')}</h2>
                    <div className={s.grid}>
                        <div className={s.card}>
                            <NotificationsActiveOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Cards.1')}</p>
                        </div>
                        <div className={s.card}>
                            <TaskOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Cards.2')}</p>
                        </div>
                        <div className={s.card}>
                            <TrendingDownOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Cards.3')}</p>
                        </div>
                        <div className={s.card}>
                            <GppGoodOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Cards.4')}</p>
                        </div>
                        <div className={s.card}>
                            <HandymanOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Cards.5')}</p>
                        </div>
                        <div className={s.card}>
                            <CloudDownloadOutlinedIcon fontSize="large"/>
                            <p>{t('HomePage.Cards.6')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.howItWorks} id="howItWorks">
                <h2>{t('HowItWorks')}</h2>
                <div className={s.description}>
                    <p>
                        {t('HomePage.HowItWorksDescription.1')}
                    </p>
                    <p>
                        {t('HomePage.HowItWorksDescription.2')}
                    </p>
                    <p>
                        {t('HomePage.HowItWorksDescription.3')}
                    </p>
                </div>
            </div>
            <div className={s.materials} id="equipment">
                <h1>{t('EquipmentPage.Materials')}</h1>
                <p>{t('EquipmentPage.Text1')}</p>
                <img src={EqComponents} alt="eq_components"/>
                <h1>{t('EquipmentPage.TemperatureSensor')}</h1>
                <p>{t('EquipmentPage.Text2')}</p>
                <img src={dht} alt="dht"/>
            </div>
        </div>
    );
};

export default Home;