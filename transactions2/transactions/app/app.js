import React from 'react';
import Routes from "./routes";
import Login from "./components/login";
import EnsureLoggedIn from './components/ensureLoggedIn';
import Menu from './components/menu';

const App = () => (
    <EnsureLoggedIn>
        {
            (loggedIn) =>  {
                switch (loggedIn){
                    case true: return <Menu><Routes/></Menu>;
                    case false: return <Login/>;
                    default: return null;
                }
            }
        }
    </EnsureLoggedIn>
);

export default App;
