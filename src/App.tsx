
import Nav from './components/Nav';


import {Outlet} from 'react-router-dom'
const App= () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default App;
