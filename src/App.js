import { useState } from 'react'
import Content from './Content';
function App() {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <div className="App" style={{ padding: 32 }}>
      <button onClick={() => setShowPosts(!showPosts)}>Show Posts</button>
      {showPosts && <Content />}
    </div>
  );
}

export default App;
