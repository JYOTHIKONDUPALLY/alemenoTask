import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import styles from "./CourseDetails.module.css";

export default function CourseDetails({data}){
  console.log(data);
  return (
    <div className={styles.content}>
      <h1 className={styles.heading}>{data.name}</h1>
      <h3>The complete study from zero to Expert!</h3>
      <p>
        <span className={styles.card}>✌𝓫𝓮𝓼𝓽 𝓼𝓮𝓵𝓵𝓮𝓻</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>By <b>{data.instructor}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Pre-requirements:</b>{data.prerequisites}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Duration:</b>{data.duration}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Status:</b>{data.enrollmentStatus}&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Location:</b>{data.location}&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Timing:</b>{data.schedule}&nbsp;&nbsp;&nbsp;&nbsp;
      </p>
      <div className={styles.details}>
        <h3>What you will learn</h3>
        <p>{data.description}</p>
        <h3>Course Content</h3>
        {data.syllabus.map((topic, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {topic.topic}
            </AccordionSummary>
            <AccordionDetails style={{background:"gainsboro"}}>
              {topic.content}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
              };



