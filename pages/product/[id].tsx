import React from 'react';
import { useRouter } from '../../node_modules/next/router';

const ProductItem = () => {

    const router = useRouter();
    const { id } = router.query;

    return(
        <div>
            Esta es la pagina de producto: {id}
        </div>
    )
};

export default ProductItem