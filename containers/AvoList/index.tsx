import React from 'react'

//import styled classes
import styles from './styles.module.css';

const AvoListLayout = (props) => {
    
    const { children } = props

    return(
        <React.Fragment>
            <div className={styles.home__container_title}>
                <img src="images/128eb51942f2bd18d98ee85bb144d4f3.png" alt="" />
                <h2>Avocados</h2>
            </div>

            <main className={styles.container}>
                {children}
            </main>
        </React.Fragment>
    )
};

export { AvoListLayout }