import { useEffect, useState } from "react";
function UseEffect2() {
  const [countdown, setCountdown] = useState(180);
  //c1

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setCountdown(countdown - 1);
  //   }, 1000);
  //   return ()=> clearTimeout(timerId);
  // }, [countdown]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  )
}
export default UseEffect2