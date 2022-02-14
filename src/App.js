
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

import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>

      <Router>
          <header className={classes.AppHeader}>
              <div className={classes.Menu}>
                  <Link to="/home">Home</Link>
                  <Link to="/change-name-component">ChangeNameComponent</Link>
                  <Link to="/counter-component">CounterComponent</Link>
                  <Link to="/fcomponent">Fcomponent</Link>
                  <Link to="/scomponent">Scomponent</Link>
                  <Link to="/ccomponent">Ccomponent</Link>
                  <Link to="/form-component">FormComponent</Link>
                  <Link to="/todo">ToDo</Link>
                  <Link to="/passing-parameters-to-function">PassingParametersToFunction</Link>
                  <Link to="/input">Input</Link>
                  <Link to="/list">List</Link>
                  <Link to="/conditional-operator">ConditionalOperator</Link>
                  <Link to="/dynamic-lists">DynamicLists</Link>
                  <Link to="/styles-classes">StylesAndClasses</Link>
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
