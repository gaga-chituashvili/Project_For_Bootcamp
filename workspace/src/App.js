import './App.css';
import AppRoutes from './AppRoutes';
import Header from './component/header/Header';
import AddEmployee from './component/employes/AddEmployee';

function App() {
  return (
   <section className='App'>
   <Header/>
   <AppRoutes/>
   {/* <AddEmployee/> */}
   </section>
  );
}

export default App;
