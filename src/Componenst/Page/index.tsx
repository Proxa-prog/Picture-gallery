import { useEffect, useState } from 'react';

import { getPaintings } from '../../APi/painting';
import { useTypedSelectors } from '../../hooks/useTypedSelectors';

import { Header } from '../Layout/Header';
import { PaintingList } from '../Layout/PaintingList';

import './style.scss';

export const Page = () => {
    const { theme } = useTypedSelectors(state => state.theme);
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        getPaintings(paintings, setPaintings);
    }, [])
    
    return (
        <section className={`page__wrapper page__${theme ? 'black' : 'white'}-theme`}>
            <Header />
            <PaintingList 
                paintingsArray={paintings}
            />
        </section>
    )
};