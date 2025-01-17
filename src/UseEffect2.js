import { useEffect, useState } from "react";
function UseEffect2() {
  const tabs = ['posts', 'comments', 'albums'];//bài toán là có các nút bấm,bấm vào nút nào thì call API để show ra dữ liệu
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(p => {
        setPosts(p);
      })
  }, [type]);

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

      <ol>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ol>
    </div>
  )

}
export default UseEffect2