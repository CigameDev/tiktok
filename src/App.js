import { useCallback, useState } from 'react';
import Content from './Content';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <div className="App" style={{ padding: 32 }}>
      {<Content onIncrease={handleIncrease} />}
      <h1>{count}</h1>
    </div>
  );
}

export default App;
// const c = useCallback(callback,[deps])
// sử dụng useCallback nó sẽ lưu callback ra bên ngoài truyền vào biến c kia => ko là thay đổi props
// nếu [ ]nói khác là ko có deps thì luôn k tạo mới
// nếu [deps] nói cách khác là có deps thì nếu deps thay đổi nó sẽ tạo lại => props thay đổi
// Khi nào dùng ,khi thằng component con dùng memo thì tất cả các fuction liên quan tới thằng con trong thằng cha đều sử dụng useCallback

