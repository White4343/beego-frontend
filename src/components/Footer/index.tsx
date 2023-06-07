import React from 'react';
import s from './Footer.module.scss'
import fc from '../../assets/facebook-brands.svg'
import ig from '../../assets/instagram-brands.svg'
import yt from '../../assets/youtube-brands.svg'
import googlePlayDownload from "../../assets/googlePlayDownload.svg";
import appleDownload from "../../assets/Apple-download.svg";
import {useTranslation} from "react-i18next";

interface FooterProps {

}


const Footer: React.FC<FooterProps> = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className={s.inner}>
                <div className={s.info}>
                    <h3><span>BeeGo </span>- {t('HomePage.Tagline')}</h3>
                    <p>{t('HomePage.MainDescription')}</p>
                </div>
                <div className={s.app}>
                    <div className={s.links}>
                        <a>{t('Footer.links.1')}</a>
                        <a>{t('Footer.links.2')}</a>
                        <a>{t('Footer.links.3')}</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;