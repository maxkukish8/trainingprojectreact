
import classes from './App.scss';
import Home from "./Components/Home";
import ChangeNameComponent from "./Components/ChangeNameComponent";
import CounterComponent from "./Components/CounterComponent";
import Fcomponent from "./Components/Fcomponent";
import Scomponent from "./Components/Scomponent";
import Ccomponent from "./Components/Ccomponent";
import FormComponent from "./Components/FormComponent";
import ToDo from "./Components/ToDo";
import PassingParametersToFunction from "./Components/PassingParametersToFunction";
import Input from "./Components/Input";
import List from "./Components/List";
import ConditionalOperator from "./Components/ConditionalOperator";
import DynamicLists from "./Components/DynamicLists";
import StylesAndClasses from "./Components/StylesAndClasses"
import AppLink from "./Components/hoc/AppLink";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>

      <Router>
          <header className={classes.AppHeader}>
              <div className={classes.Menu}>
                  <AppLink to="/home">Home</AppLink>
                  <AppLink to="/change-name-component">ChangeNameComponent</AppLink>
                  <AppLink to="/counter-component">CounterComponent & Fragments</AppLink>
                  <AppLink to="/fcomponent">Fcomponent</AppLink>
                  <AppLink to="/scomponent">Scomponent</AppLink>
                  <AppLink to="/ccomponent">Ccomponent</AppLink>
                  <AppLink to="/form-component">FormComponent</AppLink>
                  <AppLink to="/todo">ToDo</AppLink>
                  <AppLink to="/passing-parameters-to-function">PassingParametersToFunction</AppLink>
                  <AppLink to="/input">Input</AppLink>
                  <AppLink to="/list">List</AppLink>
                  <AppLink to="/conditional-operator">ConditionalOperator</AppLink>
                  <AppLink to="/dynamic-lists">DynamicLists and PropTypes</AppLink>
                  <AppLink to="/styles-classes">StylesAndClasses</AppLink>
              </div>
          </header>

          <hr/>

          <div className={classes.Content}>
              <Routes>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/change-name-component" element={<ChangeNameComponent/>}/>
                  <Route path="/counter-component" element={<CounterComponent/>} />
                  <Route
                      path="/fcomponent"
                      element={<Fcomponent name="Jack" />}
                  />
                  <Route path="/scomponent" element={<Scomponent/>}/>
                  <Route
                      path="/ccomponent"
                      element={<Ccomponent numbers={[1,2,3,4]} />}
                  />
                  <Route path="/form-component" element={<FormComponent/>} />
                  <Route path="/todo" element={<ToDo/>} />
                  <Route path="/passing-parameters-to-function" element={<PassingParametersToFunction/>} />
                  <Route path="/input" element={<Input/>} />
                  <Route path="/list" element={<List/>} />
                  <Route path="/conditional-operator" element={<ConditionalOperator/>} />
                  <Route path="/dynamic-lists" element={<DynamicLists/>} />
                  <Route path="/styles-classes" element={<StylesAndClasses/>} />
              </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
