import { useState } from 'react'
import Content from './Content';
import UseEffect2 from './UseEffect2';
function App() {
  const [show, setShow] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}

      <br />
      <button onClick={() => setShowPosts(!showPosts)}>Show Posts</button>
      {showPosts && <UseEffect2 />}
    </div>
  );
}

export default App;
