import React from 'react';
import axios from "axios";
import {useState, useEffect} from "react";
import styles from "./Home.module.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Card, CardActions, Grid} from "@mui/material"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


const categories=["Science", "Arts", "maths", "Computers", "Robotics"];

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/893b7c05-f367-4c72-8db4-254902343785');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
        <Header/>
        <div className={styles.heroSection}>
          <h1 className={styles.highlight}>🏆 The Leader in Online Learning!</h1>
          <div className={styles.mainHeading}>We teach, educate<br></br> and build the future through
          <br></br> online learning</div>
        </div>
        <h1 style={{ textAlign: "center", paddingTop:"30px"}}>Category</h1>
        <div className={styles.Main}>
       

        <Grid container spacing={2}>
  {categories.map((category, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
      <Card className={styles.card}>
        {category}
        <CardActions className={styles.arrow}>
          <KeyboardDoubleArrowDownIcon />
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
