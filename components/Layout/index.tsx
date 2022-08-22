import React, { Fragment } from 'react';

//import component with a alias path
import Navbar from '@components/Navbar';


export const Layout = ({ children }) => {
    return (
        <Fragment>
            <div className='container'>
                <Navbar />
                {children}
            </div>

            <style jsx>
                {`
                    .container{
                        background: salmon;
                    }
                `}
            </style>
        </Fragment>
    );
};
