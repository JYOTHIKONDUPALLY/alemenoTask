import React from 'react';
import styles from "./Footer.module.css";
import {Grid,Link} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <Grid container spacing={5} className={styles.footer}>
    <Grid item xs={12} md={2}>
      <h1>𝕸𝖞 𝖘𝖙𝖚𝖉𝖞✍</h1>
      <p>We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>
<div className={styles.conatiner}>
  <FacebookIcon className={styles.icon}/>
<TwitterIcon className={styles.icon}/>
<EmailIcon className={styles.icon}/>
<LinkedInIcon className={styles.icon}/></div>
    </Grid>
    <Grid item xs={12} md={2}>
      <h3>Our Company</h3>
      <ul>
        <li><Link href="#" underline='hover' color="black">Contact us</Link></li>
        <li><Link href="#"  underline='hover' color="black">Become Teacher </Link></li>
        <li><Link href="#"  underline='hover' color="black">Blog</Link></li>
        <li><Link href="#"  underline='hover' color="black">Instructor</Link></li>
        <li><Link href="#"  underline='hover' color="black">Events</Link></li>
        <li><Link href="#"  underline='hover' color="black">Course</Link></li>
        <li><Link href="#"  underline='hover' color="black">Contact</Link></li>
      </ul>
    </Grid>
    <Grid item xs={12} md={2}>
      <h3>Get Contact</h3>
      <ul>
        <li>Phone: (406) 555-0120</li>
        <li>E-mail: admin@example.com</li>
        <li>Address:2000+ Our students are subscribe Around the World.</li>
        <li>Don’t be shy introduce yourself!</li>
      </ul>
    </Grid>
   
  </Grid>
  )
}

export default Footer