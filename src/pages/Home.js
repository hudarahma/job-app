import React from 'react'
import { useContext, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../components/header/Header";
import { MyContext } from "../Context";
import Jobscard from '../components/card/Jobscard';


const Home = ({match}) => {
    const { jobs, setPage, fetchJobs } = useContext(MyContext);
    // defined the page for load more
    useEffect(() => {
      setPage(match.params.page)
      fetchJobs()
    },[]);
  
  
  
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.jobsContainer}>
          {jobs.map((job) => (
            <Jobscard job={job} key={job.id}/>
          ))}
        </div>
      </div>
    );
};
  // presses more (history.push)
  // fetch request 
  // inc setPage(page + 1);

export default Home
