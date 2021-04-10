import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import Header from '../components/header/Header';
import { MyContext } from '../Context';
import styles from './Job.module.css';
import moment from "moment";
import html from 'react-inner-html';
import Button from '../components/button/Button';

const Job = ({match, history}) => {
    const [data, setData] = useState({});
    const { jobs , fetchJobs } = useContext(MyContext);


    useEffect(() => {
        fetchJobs();
        console.log(jobs)
    },[]);

    useEffect(() => {
       
        setData(jobs.find(job => job.id === match.params.id));
        
    },[jobs]);
    return (
        <div className={styles.info__container}>
            <Header />
            { data && (
                <div className={styles.wrapper_info}>

                    <div className={styles.site}>
                        <img  className={styles.logo} src={data.company_logo}/>
                        <div className={styles.center_info}>
                            <h2 className={styles.title}>{data.title}</h2>
                            <h4>{data.company}</h4>
                        </div>
                        
                        <Button>Company Site</Button>
                    </div>

                    <div className={styles.body_wrapper}>
                        <div className={styles.company_info_header}>
                            <div className={styles.info}>
                                <p className={styles.type}>
                                    {moment(data.created_at).fromNow()}&nbsp;&bull;&nbsp;{data.type}
                                </p>
                                <h1 className={styles.title}>{data.title}</h1>
                            </div>
                            <Button onClick={() => window.open(data.url, '_blank')}>Apply</Button> 
                        </div>
                            
                        
                        <div className={styles.company_info_body} {...html(data.description)}></div>
                    </div>


                    <div className={styles.how_to_apply}>
                        <span>How to Apply</span>
                        <span className={styles.apply} {...html(data.how_to_apply)}></span>
                    </div>
                </div>
            )}
            
            
        </div>
    )
}


export default Job;