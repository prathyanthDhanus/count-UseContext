import { useState } from 'react';
import { myContext } from './MyContext';
import Home from './Home';


function App() {
  const [count, setCount] = useState(0);//The initial state(count) is set to zero

  const data = {
    count, setCount
  }

  return (
    <>
        <myContext.Provider value={data}>
          <Home />
        </myContext.Provider>
    </>
  )
}

export default App

//The Home component is rendered within the myContext.Provider component, which supplies the context value to the Home component and its nested components.


