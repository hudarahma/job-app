import React , {useEffect, useState} from 'react';
import './Jobscard.css';
import { DateTime } from 'luxon';



function Jobscard() {
    const [getJobs, setGetjobs] = useState();
  
    useEffect(()=>{
        
      fetch(
        "https://jobs.github.com/positions.json?search=node"
      )
      .then(res => res.json())
      .then(data => setGetjobs(data))
      .catch(err => console.log(err,'error'));

    },[]);
    
    console.log(getJobs);
    
    return (

        <div className='jobs__container'>
           
            <div className='wrapper'>
            {getJobs && getJobs.map(job => ( 
                <div className='jobs__card' key={job.id}>
                    <div className='logo'>
                        <img src={job.company_logo} alt='company_logo'/>
                    </div>
                    <div className='jobs__info'>
                        <div className='type' >
                                <h4>{DateTime.fromJSDate(
                                new Date(job.created_at)
                            ).toRelative()} . {job.type}</h4>
                        </div>
                       
                        <div className='title'>
                            <h2 >{job.title}</h2>
                        </div>
                        <div className='company_name'>
                            <h4 >{job.company}</h4>
                        </div>
                        <div className='job_location'>
                            <h4>{job.location}</h4>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default Jobscard;
