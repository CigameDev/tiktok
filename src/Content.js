import { memo } from "react"


function Content({ onIncrease }) {
  console.log('Re-render');
  return (
    <div>
      <h1>Hello Anh em </h1>
      <button onClick={onIncrease}>Click me!</button>
    </div>
  )
}
export default memo(Content)

/* 
  +import useCallback
  +sử dụng để tránh tạo ra hàm mới không cần thiết trong component dẫn tới component con bị rerender
  +ở đây khi nhấn onClick thì gọi tới prop (onIncrease)=>gọi tới hàm handleIncrease ,
    cứ nhấn onClick là tạo ra handleIncrease mới => prop thay đổi =>render lại Content => sử dụng useCallback
  +const c = useCallback(callback,[deps])
  +sử dụng useCallback nó sẽ lưu callback ra bên ngoài truyền vào biến c kia => ko là thay đổi props
  +nếu [ ]nói khác là ko có deps thì luôn k tạo mới
  +nếu [deps] nói cách khác là có deps thì nếu deps thay đổi nó sẽ tạo lại => props thay đổi
  +Khi nào dùng ,khi thằng component con dùng memo thì tất cả các fuction liên quan tới thằng con trong thằng cha đều sử dụng useCallback
*/