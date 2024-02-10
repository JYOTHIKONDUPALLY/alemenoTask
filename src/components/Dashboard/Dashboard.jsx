import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Dashboard.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Card, Typography, Grid, Modal, Box, Button} from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import TvIcon from '@mui/icons-material/Tv';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const data={"id":1,"email":"mcrayker0@utexas.edu","Full_Name":"Goldie Debenham","image":"https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","Instructor":"Mirilla Crayker","enrolled_course":{"number":6,"list":["DSA", "C#", "fullStack", "Aptitude", "English", "React"]},"completed_Course":{"number":2,"list":["DSA",  "React"]},"Inprogress":{"number":4,"list":[ "C#", "fullStack", "Aptitude", "English"]},"Due_Date":"10/24/2023", }

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [selectedCard, setSelectedCard]=useState("");

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const percentage = Math.round((data.Inprogress.number/data.enrolled_course.number)*100);

  const openModal = (index, name) => {
    setSelectedCardIndex(index);
    setSelectedCard(name)
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCardIndex(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const closeSidebarOnClickOutside = (event) => {
      if (sidebarVisible && !event.target.closest(`.${styles.sidebar}`)) {
        setSidebarVisible(false);
      }
    };

    document.addEventListener('click', closeSidebarOnClickOutside);

    return () => {
      document.removeEventListener('click', closeSidebarOnClickOutside);
    };
  }, [sidebarVisible]);
  return (
    <div>
      <Header />
      <div className={styles.dashboard}>
        <div className={styles.heroSection}>
          <div className={styles.button} onClick={toggleSidebar}>
            <MenuIcon style={{fontSize:"30px", border:"2px solid black"}}/>
          </div>
          <div className={styles.studentDetails}>
            <h1>{data.Full_Name}</h1>
            <div className={styles.subDetails}>
              <p className={styles.font}>Catergory Enrolled: <b>Computers</b></p>
              <p className={styles.font}>
                🏆Certificate: <b>4</b>
              </p>
            </div>
          </div>
          <div className={styles.image}><img src={data.image} width= "100%" height="100%" alt="user"/></div>
      
        </div>
        <div className={styles.container}>
          <div className={sidebarVisible ? styles.sidebarOpen : styles.sidebar}>
            <ul>
              <li className={styles.menu}>Dashboard</li>
              <li className={styles.menu}>My Profile</li>
              <li className={styles.menu}>Enrolled courses</li>
              <li className={styles.menu}>Order History</li>
              <li className={styles.menu}>Settings</li>
              <li className={styles.menu}>logout</li>
            </ul>
          </div>
          
     
          <div className={styles.details}>
            <div className={styles.progressivebar}>            
            <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    pathColor: '#7FC7D9'
  })}
  className={styles.circularProgressbar} 
/>
</div>


            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <Card className={styles.card} style={{ backgroundColor: 'lightblue' }} onClick={() => openModal(0, "enrolled_course")}>
                  <div><LibraryBooksIcon className={styles.icon}/></div>
                  <Typography className={styles.number}>{data.enrolled_course.number}</Typography>
                  <Typography>ENROLLED COURSES</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className={styles.card} style={{ backgroundColor: 'lightpink' }}onClick={() => openModal(1, "Inprogress")}>
                  <div><TvIcon className={styles.icon}/></div>
                  <Typography className={styles.number}>{data.Inprogress.number}</Typography>
                  <Typography>ACTIVE COURSES</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card className={styles.card} style={{ backgroundColor: 'yellow' }}onClick={() => openModal(2, "completed_Course")}>
                  <div><EmojiEventsIcon className={styles.icon}/></div>
                  <Typography  className={styles.number}>{data.completed_Course.number}</Typography>
                  <Typography>COMPLETED COURSES</Typography>
                </Card>
              </Grid>
            </Grid>
            <Modal open={modalOpen} onClose={closeModal}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: "40vw",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      p: 2,
    }}
  >
    {data[selectedCard] && (
      <>
        
        <ul>
          {data[selectedCard].list.map((item, index) => (
            <li key={index} className={styles.list}>{item}</li>
          ))}
        </ul>
      </>
    )}
    <Button variant="contained" color="primary" onClick={closeModal} style={{ position: "relative", left: "40%", margin: "20px" }}>Close</Button>
  </Box>
</Modal>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

