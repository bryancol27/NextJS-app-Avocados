import Link from 'next/link';
import React from 'react';

// import module Styles
import styles from './styles.module.css'

// Image component to optimize loads
import Image from 'next/image';

//it is a page which return a card with a tipade card in his props
const AvoCard = (props: { avoCurrent: TProduct }) => {
    
    const { avoCurrent } = props;

    return(
        <article className={styles.card}>

            <div className={styles.card__title}>
                <h1
                    className={styles.card__tittle_name}
                >
                    {avoCurrent.name}
                </h1>

                <span
                    className={styles.card__tittle_price}
                >
                    ${avoCurrent.price}
                </span>

            </div>

            <figure className={styles.figure}>
                <Image 
                    width={320}
                    height={320}
                    src={avoCurrent.image} 
                    alt={avoCurrent.name} 
                    />
            </figure>

            <Link
                href={`product/${avoCurrent.id}`}
                type='button'
            >
                Ver más 
            </Link>
        </article>
    )
};

export { AvoCard };