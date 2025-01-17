import { useEffect, useState } from "react";
function UseEffect2() {
  const tabs = ['posts', 'comments', 'albums'];//bài toán là có các nút bấm,bấm vào nút nào thì call API để show ra dữ liệu
  const [posts, setPosts] = useState([]); //posts Lưu mảng dữ liệu call về từ API
  const [type, setType] = useState('posts');//type lưu chữ 1 trong các dữ liệu của tabs
  const [showGoToTop, setShowToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(p => {
        setPosts(p);
      })
  }, [type]);

  useEffect(() => {

    const handleScroll = () => {
      setShowToTop(window.scrollY >= 300);
    }
    window.addEventListener('scroll', handleScroll);
    //cleanup function
    return () => {
      window.removeEventListenerEventListener('scroll', handleScroll);
    }
  }, [])

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
      {showGoToTop && (
        <button style={{
          position: 'fixed',
          right: 20,
          bottom: 20
        }}>
          Go to Top
        </button>
      )}
    </div>
  )

}
export default UseEffect2