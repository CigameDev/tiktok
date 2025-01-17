//Cú pháp truyền vào gồm callback và dependency (co the co hoac khong)
//1.useEffect(callback).Ít dùng
// -Gọi callback mỗi khi component re-render
// -Gọi callback sau khi component thêm element vào DOM
//2.useEffect(callback,[])
// -Chỉ gọi callback 1 lần sau khi component mounted
//3.useEffect[callback,[deps]]
// - Ngoài gọi khi mounted ra thì còn được gọi khi deps thay đổi
import { useEffect, useState } from "react"

// ----------- Chung cho cả 3 thằng
// 1.Callback luôn được gọi sau khi component mounted(hiện ra)
function Content() {

  const [title, setTitle] = useState('');
  useEffect(() => {
    console.log("Re-render", title);//trong reat 18 sẽ chạy 2 lần trong dev,nếu không muốn thấy xóa <React.StrictMode> trong index.js đi
    document.title = title;//title chạy theo phím nhấn
  });

  return (
    <div>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  )
}

export default Content