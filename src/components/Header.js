import React from 'react';

const Header = ({ total, completed, done, setDone }) => {
    setDone((completed / total) * 100);

    return (
        <div id='header' className='flex-container'>
            <div className='center brand'>
                <h1 className='header-title'>TODO-APP</h1>
                <hr className='header-line' />
                <p className='header-datetime'>9 Sep 2020, Wednesday</p>
            </div>
            <div className='todo-progress'>
                <div>
                    <p className='progress-title'>TOTAL</p>
                    <p className='progress-number'>{total}</p>
                </div>
                <div>
                    <p className='progress-title'>COMPLETED</p>
                    <p className='progress-number'>{completed}</p>
                </div>
                <div>
                    <p className='progress-title'>DONE</p>
                    <p className='progress-number'>{isNaN(done) ? 0 : Math.round(done, 2)}%</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
