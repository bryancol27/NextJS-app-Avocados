import React, { useEffect, useState } from 'react';

//import container
import { AvoListLayout } from 'containers/AvoList';

//import components
import { AvoCard } from '@components/AvoCard';

const Home = () => {

    const [avoList, setAvoList] = useState<TProduct[]>([]);

    useEffect(() => {
        fetch('/api/avo')
            .then(res => res.json())
            .then(({ allEntries }) => setAvoList(allEntries))
    }, [])

    console.log(avoList)

    return (
            <AvoListLayout>
                { avoList.map(product => <AvoCard key={product.id} avoCurrent={product}/>) }
            </AvoListLayout>
    )
};

export default Home