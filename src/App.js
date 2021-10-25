import { useContext } from 'react'
import { MyContext } from './context';

import 'animate.css';
import './assets/App.css';
import Initial from './components/initial';
import Confirm from './components/confirm';
import Result from './components/result';

const App = () => {
  const context = useContext(MyContext);

  const handleComponent = () => {
    const screen = context.state.screen;
    if(screen === 0 ) return <Initial/>
    if(screen === 1 ) return <Confirm/>
    if(screen === 2 ) return <Result/>
  }

  return (
    <div className="container">
      {handleComponent()}
    </div>
  );
}

export default App;
