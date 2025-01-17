import { useEffect, useState } from "react";

function UseEffect2() {
  const tabs = ['posts', 'comments', 'albums'];
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');

  console.log(type);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        //setPosts(posts);
      })
  }, []);//đây là trường hợp truyền thêm mảng ,nếu không có hoặc không sử dụng useEffect thì sẽ callAPI rất nhiều lần =>lag

  return (
    <div>
      {tabs.map(tab => (
        <button
          key={tab}
          style={type === tab ? {
            color: '#fff',
            backgroundColor: '#333'
          } : {}}
          onClick={() => setType(tab)}>{tab}
        </button>
      ))}

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </div>
  )

}
export default UseEffect2