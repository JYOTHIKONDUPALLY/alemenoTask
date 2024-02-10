import React, { useState } from 'react';
import styles from './Header.module.css';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import { Modal, Box, Tooltip } from '@mui/material';
import { useNavigate } from "react-router-dom";
import EnrollForm from '../Enroll Form/EnrollForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();



  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.mobileList}>
        {!isMenuOpen && (
          <div className={styles.slidebar}>
            <Tooltip title="Home"> <HomeIcon onClick={() => navigate("/")} className={styles.icon} /></Tooltip>
            <Tooltip title="Courses"> <LibraryBooksIcon onClick={() => navigate("/Course")} className={styles.icon} /></Tooltip>
            <Tooltip title="Dashboard"><DashboardIcon onClick={() => navigate("/Dashboard")} className={styles.icon} /></Tooltip>
          </div>
        )}

      </div>
      <div>
        <h1>𝕸𝖞 𝖘𝖙𝖚𝖉𝖞✍</h1>
      </div>
      <div className={styles.DesktopList}>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/Course")}>Course</li>
          <li onClick={() => navigate("/Dashboard")}>Dashboard</li>
        </ul>
      </div>
      <div>
        <button className={styles.button} onClick={openModal}>Enroll Now</button>
        <Modal open={modalOpen} onClose={closeModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: "80vw",
              bgcolor: 'background.paper',
              border: '2px solid #000',
              p: 2,
            }}
          >
            <EnrollForm />
          </Box>
        </Modal>

      </div>

    </div>
  );
};

export default Header;
