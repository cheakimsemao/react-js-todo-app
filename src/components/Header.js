import React from 'react';

const Header = () => {
    return (
        <div id='header' className='flex-container'>
            <div className='center brand'>
                <h1 className='header-title'>TODO-APP</h1>
                <hr className='header-line' />
                <p className='header-datetime'>9 Sep 2020, Wednesday</p>
            </div>
            <div className='progress'>
                <div>
                    <p className='progress-title'>TOTAL</p>
                    <p className='progress-number'>18</p>
                </div>
                <div>
                    <p className='progress-title'>COMPLETED</p>
                    <p className='progress-number'>9</p>
                </div>
                <div>
                    <p className='progress-title'>DONE</p>
                    <p className='progress-number'>50%</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
