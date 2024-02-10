import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import { Grid, InputAdornment, Card, TextField, CardContent, CardActions, Typography, Icon, Button, Modal, Box } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PersonIcon from '@mui/icons-material/Person';
import styles from "./Course.module.css";
import CourseDetails from '../CourseDetails/CourseDetails';

const Course = () => {
    const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [debounceTimeout, setDebounceTimeout] = useState(0);
    const [filter, setFilter] = useState([]);

    const performSearch = async (text) => {
      try {
        const response = await axios.get('https://mocki.io/v1/949b4c23-4284-4fe1-a3aa-53726bf49e48');
        const filteredData = response.data.filter(course =>
            course.name.toLowerCase().includes(text.toLowerCase()) ||
            course.instructor.toLowerCase().includes(text.toLowerCase())
        );
        setFilter(filteredData);
    } catch (e) {
        if (e.response) {
            setFilter([]);
        }
    }
    };

    const debounceSearch = (event, debounceTimeout) => {
        const value = event.target.value;

        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        const timeout = setTimeout(() => {
            performSearch(value);
        }, 500);
        setDebounceTimeout(timeout);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/949b4c23-4284-4fe1-a3aa-53726bf49e48');
                setFilter(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const openModal = (index) => {
        setSelectedCourseIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCourseIndex(null);
        setModalOpen(false);
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
              <div className={styles.searchbar}>
              <TextField
                    className="search"
                    size="small"
                    fullWidth
                    InputProps={{
                        className: "search",
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search for course/instructor"
                    name="search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        debounceSearch(e, debounceTimeout);
                    }}
                />
              </div>
              
                <Grid container spacing={2} className={styles.content}>
                    {filter.map((course, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Card style={{ flex: '1', margin: '10px', maxWidth: 200, display: 'flex', flexDirection: 'column' }} className={styles.card}>
                            <CardContent style={{ flex: '1' }}>
    <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
        {course.name}
    </Typography>
    <Icon><PersonIcon /></Icon>
    <Typography variant="p" component="div">
        {course.instructor}
    </Typography>
    <Typography sx={{ mb: 1 }} color="text.secondary">
        {course.duration}
    </Typography>
    <div className={styles.status}>
        {course.enrollmentStatus}
    </div>
</CardContent>

                                <CardActions style={{ justifyContent: 'center' }} className={styles.button}>
    <Button size="small" onClick={() => openModal(index)} variant='contained'>Know More</Button>
</CardActions>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            {selectedCourseIndex !== null && (
               <Modal open={modalOpen} onClose={closeModal}>
               <Box
                   sx={{
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                       width: "100%",
                       height:"100%",
                       bgcolor: 'background.paper',
                       border: '2px solid #000',
                       overflowY: 'auto',
                       p: 2,
                   }}
               >
                   <CourseDetails data={filter[selectedCourseIndex]} />
                   <Button
                       variant="contained"
                       color="primary"
                       onClick={closeModal} 
                       style={{ position:"relative", left:"50%", margin:"20px"}}
                   >
                       Close
                   </Button>
               </Box>
           </Modal>
           
            )}
            <Footer />
        </div>
    );
}

export default Course;