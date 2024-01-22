import { useState } from 'react'
import { CiCircleList } from 'react-icons/ci';
import ListJob from '@/Components/ListJob/ListJob';
import JobForm from '@/Components/JobForm/JobForm';
import './App.scss'

function App() {

    const [jobs, setJobs] = useState([]);

    const onAddJob = job => {
        if (job.title.trim() && job.content.trim()) {
            setJobs([...jobs, job]);
        }
    };

    const onCompleted = id => {
        setJobs(jobs.map(job => {
            if (job.id === id) {
                job.completed = !job.completed
            }
            return job
        }))
    };

    const onDelete = id => {
        setJobs(jobs.filter(job => job.id !== id))
    };

    return (
        <section className='container'>
            <div className='row'>
                <div className='col-12 mb-3'>
                    <h1>Actividades <CiCircleList /></h1>
                </div>
                <hr />
                <div className='col-12'>
                    <JobForm onAddJob={onAddJob}/>
                </div>
                <hr />
                <div className='col-12'>
                    <ListJob jobs={jobs} onCompleted={onCompleted} onDelete={onDelete}/>
                </div>
            </div>
        </section>
    );
}

export default App
