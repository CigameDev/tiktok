import { useState } from 'react'

function App() {
  //useState
  const orders = [100, 200, 300];
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    return total;
  });
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
    setCounter(prevState => prevState + 1);
  }

  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi"
  });
  const handleUpdate = () => {
    // setInfo({
    //   ...info,
    //   bio: "yeu mau hong"
    // });
    setInfo(prev => ({
      ...prev,
      bio: "Yeu mau hong"
    }));
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <h1>
        {JSON.stringify(info)}
      </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
