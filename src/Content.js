import { memo } from "react"


function Content({ prop }) {
  console.log('Re-render');
  return (
    <div>
      <h1>Hello Anh em {prop}</h1>
    </div>
  )
}
export default memo(Content)

/* 
  + import memo ,bao lấy component 
  + Khi nào dùng :Component phức tạp nhận nhiều props =>nếu re-render  ảnh hưởng hiệu năng lại ko cần thiết thì nên dùng memo
  + Content là component con của App,khi ta nhấn nút increase thì componnet App sẽ bị render lại 
  + mặc dù content không liên quan nhưng App render lại nên Content cũng bị render lại
  +Khi sử dụng memo cho Content thì Content sẽ không bị re-render nữa nếu không bị tác động gì khác
  +Nguyên lý hoạt động : Nó nhận vào 1 component(Content) nó sẽ check các props của component này sau mỗi lần re-render có bị thay đổi hay không
  +Ít nhất 1 prop bị thay đổi nó cho re-render (nếu không có prop thì thôi)
  +Khi thêm props là props vào kia ,nếu count bị thay đổi mà component cha thay đổi => Content cũng bị rerender
*/