import * as React from 'react';
import { Box, Button, Grid, Icon, TextField, Typography } from '@mui/material';
import Item from './Item';
import ClientPage from './ClientPage';
import Image from 'next/image';
import imagelogo from "../../public/image/imagelogo.png";
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import TranslateIcon from '@mui/icons-material/Translate';
import MonitorIcon from '@mui/icons-material/Monitor';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import DatasetIcon from '@mui/icons-material/Dataset';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}




function Page() {
  return (
    <Grid container xs={12} sx={{ bgcolor: "#FFFFFF", py:"8rem:8rem", p:"4rem:" }}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'row',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyItems:"space-around",
            // gridTemplateRows: 'repeat(2, 180px',
            gap: 1,
          }}
        >

          <Item sx={{ gridColumn: '1', gridRow: '1 / 3', width: "40rem", height: "93%", Padding:"3rem"}}>
            <Grid sx={{ width: "100%", Padding:"3rem" }}>
              <Image src={imagelogo} alt='Image' sizes='100px' />
             
             <Typography variant='h4' fontStyle="Monospace"
             >Suit of Bussiness Support service</Typography>
             <Typography lineHeight="1.5rem" pt="1.5rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </Typography> 
             
            </Grid>
            <ClientPage />
          </Item>
          <Item sx={{ bgcolor: '#102C57', height: "200px", margin: "1rem" }} >
            <CoPresentIcon sx={{ color: "#F8FAE5", fontSize: "2rem" }} />
            <Typography fontWeight="Bold" sx={{ color: "#4C3BCF",fontSize:"16px" }}>Presentation Design</Typography>
            <Typography sx={{ color: "#FFFFFF" }}>Lorem  ipsum dolar sit amet,  lorem  ipsum dolor sit smet. Lorem ipsum dolor sit amet</Typography>
          </Item>
          <Item sx={{ bgcolor: '#102C57', height: "200px", margin: "1rem" }} >
            <VideoCameraFrontIcon sx={{ color: "#F8FAE5", fontSize: "2rem" }} />
            <Typography fontWeight="Bold" sx={{ color: "#4C3BCF",fontSize:"16px" }}>Audio- Visible Productions</Typography>
            <Typography sx={{ color: "#FFFFFF" }}>Lorem  ipsum dolar sit amet, lorem  ipsum dolor sit smet. Lorem ipsum dolor sit amet</Typography>
          </Item>
          <Item sx={{ bgcolor: '#102C57', height: "200px", margin: "1rem" }}>
            <TranslateIcon sx={{ color: "#F8FAE5", fontSize: "2rem" }} />
            <Typography fontWeight="Bold" sx={{ color: "#4C3BCF",fontSize:"16px" }}>Translation Service</Typography>
            <Typography sx={{ color: "#FFFFFF" }}>Lorem  ipsum dolar sit amet, lorem  ipsum dolor sit smet. Lorem ipsum dolor sit amet</Typography>
          </Item>
          <Item sx={{ bgcolor: '#102C57', height: "200px", margin: "1rem" }}>
            <MonitorIcon sx={{ color: "#F8FAE5", fontSize: "2rem" }} />
            <Typography fontWeight="Bold" sx={{ color: "#4C3BCF",fontSize:"16px" }}>Graphic Design</Typography>
            <Typography sx={{ color: "#FFFFFF" }}>Lorem  ipsum dolar sit amet, lorem  ipsum dolor sit smet. Lorem ipsum dolor sit amet</Typography>
          </Item>
          <Item sx={{ bgcolor: '#102C57', height: "200px", margin: "1rem" }}>
            <ImageSearchIcon sx={{ color: "#F8FAE5", fontSize: "2rem" }} />
            <Typography fontWeight="Bold" sx={{ color: "#4C3BCF",fontSize:"16px" }}>Research& Analysis</Typography>
            <Typography sx={{ color: "#FFFFFF" }}>Lorem  ipsum dolar sit amet, lorem  ipsum dolor sit smet. Lorem ipsum dolor sit amet</Typography>
          </Item>
          <Item sx={{ bgcolor: '#102C57', height: "200px", margin: "1rem" }}>
            <DatasetIcon sx={{ color: "#F8FAE5", fontSize: "2rem" }} />
            <Typography fontWeight="Bold" sx={{ color: "#4C3BCF",fontSize:"16px" }}>Data Processing</Typography>
            <Typography sx={{ color: "#FFFFFF" }}>Lorem  ipsum dolar sit amet, lorem  ipsum dolor sit smet. Lorem ipsum dolor sit amet</Typography>
          </Item>
        </Box>
      </div>
    </Grid>
  );
}

export default Page;
