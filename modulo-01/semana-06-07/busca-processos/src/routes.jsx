import { BrowserRouter, Route } from 'react-router-dom';
import Search from './pages/search';
import Processos from './pages/processos';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Search} />
      <Route path="/processo" exact component={Processos} />
    </BrowserRouter>
  );
}

export default Routes;
