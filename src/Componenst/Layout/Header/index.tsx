import { useContext, useEffect, useState } from 'react';

import { ThemeContext } from '../../../context';
import Button from '../../UI/Button';
import { IconsSVG } from '../../UI/IconsSVG';
import { Img } from '../../UI/Img';
import { Select } from '../../UI/Select';

import logo from '../../../img/logo.png';

import './style.scss';

export const Header = () => {
    // @ts-ignore
    const {theme, setTheme, buttonColor, setButtonColor} = useContext(ThemeContext);
    const [authors, setAuthors] = useState([{name: 'Name', value: 'default', inactive: true, isHidden: true, isSelected: true}]);

    const handlerClick = () => {
        if(theme === 'black') {
            setTheme('white');
            setButtonColor('sun_black');
        } else {
            setTheme('black');
            setButtonColor('sun');
        }
    };

    const fetchAuthors = () => {
        fetch('https://test-front.framework.team/authors')
        .then(response => response.json())
        .then(json => {
            const newAuthorsArray = [...authors, ...json];
            setAuthors(newAuthorsArray)
        })
    }

    useEffect(() => {
        fetchAuthors();
    }, [])
    console.log(authors)
    return (
        <section className='page__header header'>
            <div className='header__logo-wrapper'>
                <Img 
                    src={logo}
                    alt="Логотип"
                    width='68'
                    height='68'
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
                <Select
                    name='name'
                    className='header__select'
                    optionsArray={authors}
                />
                <Select
                    name='name'
                    className='header__select'
                    optionsArray={authors}
                />
                <Select
                    name='name'
                    className='header__select'
                    optionsArray={authors}
                />
                <Select
                    name='name'
                    className='header__select'
                    optionsArray={authors}
                />
            </div>
        </section>
    )
};