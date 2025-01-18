import { useLayoutEffect, useState } from "react"

function Content() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  )
}
export default Content
/*
  useEffect
    1.Cập nhật lại state
    2.Cập nhất lại DOM
    3.Render lại UI
    4.Gọi cleanup nếu deps thay đổi
    5.Gọi useEffect callback
  useLayoutEffect
    1.Cập nhật lại state
    2.Cập nhất lại DOM
    3.Gọi cleanup nếu deps thay đổi(sync)
    4.Gọi useLayoutEffect callback(sync)
    5.Render lại UI

    khi có hiện tượng chớp nháy thì dùng useLayoutEffect (rất hiếm khi dùng).Còn lại cứ dùng useEffect
*/