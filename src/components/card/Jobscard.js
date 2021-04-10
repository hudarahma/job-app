import React , {useEffect, useState} from 'react';
import './Jobscard.css';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router';



function Jobscard( { job } ) {
    const history = useHistory();
    return (
            <div className='wrapper'>

                <div className='jobs__card' key={job.id} onClick={()=> history.push(`/job/${job.id}`)} >
                    <img className='logo' src={job.company_logo} alt='company_logo'/>
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
           
            </div>
            
       
    )
};

export default Jobscard;
