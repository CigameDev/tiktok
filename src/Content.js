import { useEffect, useState } from "react"

function Content() {
  const lessons = [
    {
      id: 1,
      name: 'ReactJS là gì'
    },
    {
      id: 2,
      name: 'SPA/MPA là gì'
    },
    {
      id: 3,
      name: 'Arrow function'
    }
  ]
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = (detail) => {
      console.log(detail);
    }
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    }
  }, [lessonId])
  return (
    <div>
      <ol>
        {
          lessons.map(lesson => (
            <li
              key={lesson.id}
              style={{
                color: lessonId === lesson.id ?
                  'red' : '#333'
              }}
              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          ))
        }
      </ol>
    </div>
  )
}
export default Content