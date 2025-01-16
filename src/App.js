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
  const courses = [
    {
      id: 1,
      name: "HTML,CSS"
    },
    {
      id: 2,
      name: "Javascript"
    },
    {
      id: 3,
      name: "ReactJs"
    }
  ]
  const [checked, setChecked] = useState(2);
  const handleSubmit = () => {
    //Call API
    console.log({ id: checked });
  }

  const [checkedbox, setChekedBox] = useState([]);
  const handleSubmitCheckBox = () => {
    //Call API 
    //In ra mảng các phần tử được chọn
    console.log(checkedbox);
  }
  const OnChangeCheckedBox = (id) => {
    setChekedBox(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      else {
        return [...prev, id];
      }
    });
  }
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
      {courses.map(course => (
        <div key={course.id}>
          <input
            type='radio'
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register radio</button>
      <br />
      {courses.map(course => (
        <div key={course.id}>
          <input
            type='checkbox'
            checked={checkedbox.includes(course.id)}
            onChange={() => OnChangeCheckedBox(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmitCheckBox}>Register CheckBox</button>
    </div>
  );
}

export default App;
