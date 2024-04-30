
import { Outlet } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <>
      <Header headerColor={"border border-red-500"}/>
      
      <Outlet />
    </>

  );
}

export default App;
