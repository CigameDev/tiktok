import { useEffect, useState } from "react";

function UseEffect2() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        console.log(posts);
        setPosts(posts);
      })
  }, []);//đây là trường hợp truyền thêm mảng ,nếu không có hoặc không sử dụng useEffect thì sẽ callAPI rất nhiều lần =>lag

  return (
    <div>
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