import { useState } from 'react'

function App() {
  const gifts = [
    "CPU i9",
    "RAM 32G RGB",
    "RGB Keyboard"
  ]
  const [gift, setGift] = useState();
  const handleGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }
  /*
    Two-way binding
    1 chiều là chiều tương tác trên giao diện
    2 là chiều chữ liệu
  */
  const [name, setName] = useState("");
  return (
    <div className="App" style={{ padding: 32 }}>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={handleGift}>Lấy thưởng</button>
      <br />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setName("Nguyen Van B")}>Change Name</button>
      {/* ở đây ấn button mặc dù name đã đổi thành Nguyễn Văn B nhưng trên giao diện chưa đổi  nếu không có value={name}*/}
    </div>
  );
}

export default App;
