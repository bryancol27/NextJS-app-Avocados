import React, { useEffect, useState } from 'react';

const Home = () => {

    const [avoList, setAvoList] = useState([]);

    useEffect(() => {
        window.fetch('/api/avo')
            .then(res => res.json())
            .then(({ allEntries, lenght }) => setAvoList(allEntries))
    }, [])

    return (
        <div>
            { avoList.map(product => <div key={product.id}>{product.name}</div>) }
        </div>
    )
};

export default Home