import { useState } from 'react'
import UseEffect2 from './UseEffect2';
function App() {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setShowPosts(!showPosts)}>Show Posts</button>
      {showPosts && <UseEffect2 />}
    </div>
  );
}

export default App;
