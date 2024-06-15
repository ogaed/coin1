import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Carousel from "react-material-ui-carousel";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// Custom theme for the futuristic look
const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4', // Neon Cyan
    },
    secondary: {
      main: '#ff4081', // Neon Pink
    },
    background: {
      default: '#fff000', // Dark Background
      paper: '#212121', // Darker Card Background
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: 'Orbitron, sans-serif', // Sci-fi styled font
    h4: {
      fontWeight: 700,
      color: '#00bcd4', // Neon Cyan
   
    },
    h5: {
      fontWeight: 500,
      color: '#ff4081', // Neon Pink
    
    },
    body1: {
      fontWeight: 300,
      color: '#e0e0e0',
    },
    subtitle1: {
      fontFamily: 'Audiowide, cursive', // Another sci-fi font
    },
  },
});

const BarazaComponent: React.FC = () => {
  const navigate = useNavigate();

  const carouselItems = [
    {
      title: "Tip other creators and get tipped!",
      description: "When you publish a story, other creators can tip you and you can also tip others by sending Baraza coins",
      icon: <StarIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Content promotion",
      description: "Make your story more visible to others!",
      icon: <CheckCircleIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />,
    },
    {
      title: "Special Badges and Recognition",
      description: "Get recognition from the community!",
      icon: <EmojiEventsIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
  ];

  const renderTokenUtility = () => (
    
    <Box mt={3}>
      
      <Typography variant="h5" gutterBottom style={{textAlign:"center"}}>
        Baraza Token Utility
      </Typography>
      <Carousel
        indicators={true}
        autoPlay={false}
        navButtonsAlwaysVisible={true}
      >
        {carouselItems.map((item, i) => (
          <Card key={i} sx={{ background: theme.palette.background.paper, p: 2, textAlign: "center", boxShadow: 'none' }}>
            <CardContent>
              {item.icon}
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Box>
  );

  const whitePaperSections = [
    {
      title: "Baraza: Gathering Wisdom in Life's Unfair Moments",
      content: "Baraza embodies those unfair moments in life when embarrassment strikes or rejection hits unexpectedly. It symbolizes a universal human experience where individuals share their 'Baraza moments', finding solace and wisdom in communal understanding."
    },
    {
      title: "Turn Baraza into Shared Content",
      content: "Transform your cringy poems or embarrassing stories into shared community content. Whether reminiscing about past mishaps or anticipating future blunders 😂, Baraza is the place to connect and resonate with others."
    },
    {
      title: "The Baraza Platform: A Gathering Place for Stories",
      content: "On the Baraza platform, users publish personal narratives, engage through likes, comments, and shares, and earn Baraza Coins. It fosters a community where wisdom and humor intersect, enriching interactions and rewarding participation."
    },
    {
      title: "Who Will Utilize Baraza Coin?",
      content: "Baraza Coin serves content creators, avid readers, and enthusiasts of humorous and relatable content. It incentivizes active engagement, making it ideal for influencers, comedians, and storytellers seeking to monetize their creativity and connect authentically. Brands and advertisers can leverage Baraza Coin to engage with a vibrant, interactive user base, crafting innovative campaigns that resonate deeply within the community."
    }
  ];
  

  const tokenomicsData = [
    { name: 'Community Rewards', value: 40, color: theme.palette.primary.main },
    { name: 'Development Fund', value: 20, color: theme.palette.secondary.main },
    { name: 'Marketing', value: 15, color: '#00e676' }, // Neon Green
    { name: 'Team', value: 10, color: '#ff9100' }, // Neon Orange
    { name: 'Reserve', value: 15, color: '#d500f9' }, // Neon Purple
  ];

  const renderWhitePaper = () => (
    <Box mt={5}>

      <Typography variant="h4" gutterBottom align="center" color="primary">
     About Baraza coin
      </Typography>
      {whitePaperSections.map((section, i) => (
        <Card key={i} sx={{ background: theme.palette.background.paper, mb: 3, p: 2, boxShadow: 'none' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom color="secondary">
              {section.title}
            </Typography>
            <Typography variant="body1">
              {section.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderTokenomics = () => (
    <Box  mt={5}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Tokenomics
      </Typography>
      <Card sx={{ background: theme.palette.background.paper, mb: 3, p: 2, boxShadow: 'none' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="secondary">
            Total Supply: 50 Million
          </Typography>
         <ResponsiveContainer width="100%" height={400} >
            <PieChart>
              <Pie
                data={tokenomicsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {tokenomicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
        <Navbar />
      <Container sx={{ mt: 4 }}>
        <Card sx={{ p: 4, background: theme.palette.background.paper, borderRadius: 2, boxShadow: 'none' }}>
          <CardContent>
        
            <Box
              component="img"
              src="./logo.jpg"
              alt="Baraza Coin"
              sx={{
                display: "block",
                margin: "0 auto",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                mb: 3,
                border: '4px solid',
                borderColor: 'primary.main',
              }}
            />
            <Typography variant="h4" gutterBottom align="center">
              Welcome to Baraza - Baraza Coin
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="center" color="textSecondary">
Intersecting humour,storytelling and technology 
            </Typography>
            <Box mt={2} mb={2} textAlign="center">
              <Typography variant="h6" gutterBottom>
             Let's all gather and share wisdom
              </Typography>
           
            </Box>
          
            {renderTokenUtility()}
            {renderWhitePaper()}
            {renderTokenomics()}
            <Grid container spacing={2} mt={3} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ py: 1.5 }}
                  onClick={() => navigate("Share")}
                >
                  Share Your Baraza Story
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default BarazaComponent;
