import React, { useEffect, useState } from 'react';

//import container
import { AvoListLayout } from 'containers/AvoList';

//import components
import { AvoCard } from '@components/AvoCard';

//Data fetch changes for Server Pre fetching
const dev = process.env.NODE_ENV !== 'production';
const urlFech = dev ? 'http://localhost:3000/' : 'https://next-js-app-avocados.vercel.app/';

export const getServerSideProps = async () => {
    const response = await fetch(`${urlFech}api/avo`);
    const data: TAPIAvoResponse = await response.json();

    return {
        props: {
            data,
        }
    }
};

const Home = ({ data }) => {

    const { length, allEntries } = data;

    return (
            <AvoListLayout>
                { allEntries.map(product => <AvoCard key={product.id} avoCurrent={product}/>) }
            </AvoListLayout>
    )
};

export default Home