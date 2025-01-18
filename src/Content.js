import { useRef, useState } from "react"


function Content() {
  const [count, setCount] = useState(60);

  const timerId = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);
  }
  const handleStop = () => {
    clearInterval(timerId.current);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}
export default Content
/*
  Lưu các giá trị qua một tham chiếu bên ngoài
  function component

  nếu chỉ sử dụng let timerId thì không stop được ,việc sử dụng useRef tương tự với việc bê biến đó ra ngoài function (mới stop được)
  useRef là 1 object ,muốn truy cập vào thì cần .current
*/