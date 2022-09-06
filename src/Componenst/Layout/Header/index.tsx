import { useContext } from 'react';

import { ThemeContext } from '../../../context';
import Button from '../../UI/Button';
import { IconsSVG } from '../../UI/IconsSVG';
    // @ts-ignore
import logo from '../../../img/logo.png';


import './style.scss';

export const Header = () => {
    // @ts-ignore
    const {theme, setTheme, buttonColor, setButtonColor} = useContext(ThemeContext);

    const handlerClick = () => {
        if(theme === 'black') {
            setTheme('white');
            setButtonColor('sun_black');
        } else {
            setTheme('black');
            setButtonColor('sun');
        }
    };

    return (
        <section className='page__header header'>
            <div className='header__logo-wrapper'>
                <img 
                    src={logo}
                    alt=""
                    width={68}
                    height={68}
                />
                <Button
                    width='20'
                    height='20'
                    className='header__button'
                    onClick={handlerClick}
                >
                    <IconsSVG 
                        name={buttonColor}
                        size='20'
                        className='header__theme-button'
                    />
                </Button>
            </div>

            <div className='header__selected-wrapper'>

            </div>
        </section>
    )
};