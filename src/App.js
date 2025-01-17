import { useState } from 'react'

function App() {

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));//nếu cho hàm này ra ngoài sẽ gây lãng phí vì render lại nhiều lần 
    return storageJobs ?? [];
  });
  const handleSubmit = () => {
    if (job !== '' && !jobs.includes(job)) {
      setJobs(prev => {
        const newJobs = [...prev, job];
        const jsonJobs = JSON.stringify(newJobs);

        localStorage.setItem('jobs', jsonJobs);//lưu dữ liệu vào localStorage để refresh lại vẫn có dữ liệu với key là jobs
        return newJobs;
      });
    }
    setJob('');
  }
  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>{job}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
