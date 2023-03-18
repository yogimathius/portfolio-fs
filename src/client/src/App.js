import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import AppRoute from './components/AppRoute';
import routes from './Config/routes.js';
import useApplicationData from "./hooks/useApplicationData";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ScrollToTop from "./helpers/ScrollToTop";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#5FB4A2',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const projectsContext = React.createContext('')

function App() {
  const { state } = useApplicationData();
  const projects = state.businessData
  
  return (
    <projectsContext.Provider value={projects}>

      <MuiThemeProvider theme={theme}>
        <div className="App bg-light-grey font-body">
          <Router>
        <div className=" relative container mx-auto ">
            <Navigation />
            <ScrollToTop />
              <Switch>
                <Route exact path = '/'
                  render={() => {
                    return (
                      <Redirect to ="/home"/>
                    )
                  }} />
                {routes.map((route) => (
                  <AppRoute
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    isPrivate={route.isPrivate}
                    state={state}
                    // createService={createService}
                    // deleteService={deleteService}
                  />
                ))}
              </Switch>
        </div>
            <Footer />
          </Router>
        </div>

      </MuiThemeProvider>
    </projectsContext.Provider>
  );
}

export default App;