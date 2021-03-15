import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

const App = lazy(() => import ('./components/App.js'));
const renderLoader = () => <p>Идёт загрузка</p>;

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={renderLoader()}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
