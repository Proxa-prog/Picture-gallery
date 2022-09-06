import { useContext } from 'react';
import { ThemeContext } from '../../context';

import { Header } from '../Layout/Header';

import './style.scss';

export const Page = () => {
    // @ts-ignore
    const {theme} = useContext(ThemeContext);
    
    return (
        <section className={`page__wrapper page__${theme}-theme`}>
            <Header />
        </section>
    )
};