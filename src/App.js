import { Route, Switch } from "react-router-dom";

import AllFamily from "./pages/AllFamily";
import EditData from "./pages/EditData";
import EditFamily from "./pages/EditFamily";
import FindFamily from "./pages/FindFamily";
import NewFamily from "./pages/NewFamily";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllFamily />
        </Route>
        <Route path="/new-people">
          <NewFamily />
        </Route>
        <Route path="/edit" exact>
          <EditFamily />
        </Route>
        <Route path="/edit-data/:id">
          <EditData />
        </Route>
        <Route path="/find">
          <FindFamily />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
