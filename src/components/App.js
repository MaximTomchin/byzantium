import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css';
import ScrollToTop from "./ScrollToTop";

const Header = lazy(() => import ('./Header'));
const Footer = lazy(() => import ('./Footer'));
const ListOfEmperors = lazy(() => import ('./ListOfEmperors'));
const Title = lazy(() => import ('./Title'));
const Menu = lazy(() => import ('./Menu'));
const PageNotFound = lazy(() => import ('./PageNotFound'));
const renderLoader = () => <p>Идёт загрузка</p>;

const App = React.memo ((props) =>  {
    return (
        <div className="page">
            <Suspense fallback={renderLoader()}>
                <Header />
                <main className="content">
                    <Switch>
                        <Route exact path="/byzantium">
                            <ScrollToTop />
                            <Title/>
                            <Menu/>
                        </Route>
                        <Route exact path="/byzantium/emperors">
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
            </Suspense>
        </div>
    );
});

export default App;
