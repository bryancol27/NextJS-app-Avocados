import React, { useEffect, useState } from 'react';
import { useRouter } from '../../node_modules/next/router';

//import container
import { AvoDescription } from '@containers/AvoDescription/index';

const ProductItem = () => {

    //Hook of next to get the current dinamic URL
    const router = useRouter();
    const { id } = router.query;

    // state to fetch avo data from Api and loading state
    const [ avoCurrent, setAvoCurrent ] = useState<TProduct>();
    const [ loading, setLoading ] = useState(true);

    //fetch about avo target
    useEffect(() => {
        fetch(`/api/avo/${id}`)
            .then(res => res.json())
            .then(data => {
                setAvoCurrent(data)
                setLoading(false)
            })
            .catch(err => 'Hubo un error haciendo el fetch');
    }, []);

    //after the fetch you can see how the app render all of this avo product
    return(
        <AvoDescription
            data={avoCurrent}
            loading={loading}
        />
    )
};

export default ProductItem