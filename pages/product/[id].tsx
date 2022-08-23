import React, { useState } from 'react';
import { useRouter } from 'next/router';

//import container
import { AvoDescription } from '@containers/AvoDescription/index';

//Data fetch changes for Server Pre fetching
const dev = process.env.NODE_ENV !== 'production';
const urlFech = dev ? 'http://localhost:3000/' : 'https://next-js-app-avocados.vercel.app/';

//pre render data api
export const getServerSideProps = async (context) => {

    console.log(context)

    const { id } = context.query;

    const res = await fetch(`${urlFech}api/avo/${id}`)
    const data = await res.json();
    
    return {
        props: {
            data,
        }
    }
};

const ProductItem = ( {data:  avoCurrent} ) => {

    // state to see the loading state

    const [ loading, setLoading ] = useState(false);

    //after the fetch you can see how the app render all of this avo product
    return( 
        <AvoDescription
            data={avoCurrent}
            loading={loading}
        />
    )
};

export default ProductItem