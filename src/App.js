import React from 'react';
import './App.css';
import Header from './components/Header';
import AllTasks from './components/AllTasks';
import CompletedTasks from './components/CompletedTasks';

function App() {
    return (
        <>
            <Header />
            <AllTasks />
            <CompletedTasks />
        </>
    );
}

export default App;
