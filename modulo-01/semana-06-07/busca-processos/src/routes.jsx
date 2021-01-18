import { BrowserRouter, Route } from 'react-router-dom';
import Search from './pages/search';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Search} />
    </BrowserRouter>
  );
}

export default Routes;
