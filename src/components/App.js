import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Header from './Header';
import PageNotFound from './PageNotFound';
import Footer from './Footer';
import ListOfEmperors from './ListOfEmperors';
import '../index.css';
import Title from './Title';
import Menu from './Menu';

const App = React.memo ((props) =>  {
    return (
        <div className="page">
            <BrowserRouter>
                <Header />
                <main className="content">
                    <Switch>
                        <Route exact path="/">
                            <ScrollToTop />
                            <Title/>
                            <Menu/>
                        </Route>
                        <Route path="/emperors">
                            <ScrollToTop />
                            <ListOfEmperors />
                        </Route>
                        <Route path="*">
                            <ScrollToTop />
                            <PageNotFound />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </BrowserRouter>
        </div>

    );
});

export default App;
