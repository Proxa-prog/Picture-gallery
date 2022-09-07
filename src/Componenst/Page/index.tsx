import { useContext, useEffect, useState } from 'react';

import { getPaintings } from '../../APi/painting';
import { ThemeContext } from '../../context';

import { Header } from '../Layout/Header';
import { PaintingList } from '../Layout/PaintingList';

import './style.scss';

export const Page = () => {
    // @ts-ignore
    const {theme} = useContext(ThemeContext);
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        getPaintings(paintings, setPaintings);
    }, [])
    
    return (
        <section className={`page__wrapper page__${theme}-theme`}>
            <Header />
            <PaintingList 
                paintingsArray={paintings}
            />
        </section>
    )
};