import { MainRoutes } from './MainRoutes';

import './styles/App.css';

function App() {
  console.log('refreshing INSIDE APP')
  
  return (
    <div className="App" >
      <MainRoutes />         
    </div>
  );
}

export default App;
