import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Navbar from "../components/ui/Navbar";

const tokenomicsDetails = [
  { title: "Total Supply", content: "1,000,000,000 Baraza" },
  { title: "Circulating Supply", content: "500,000,000 Baraza" },
  { title: "Market Cap", content: "$500,000,000" },
  { title: "Initial Price", content: "$0.10 per Baraza" },
  {
    title: "Allocation",
    content: "50% Mining, 30% Team, 10% Marketing, 10% Reserves",
  },
];

const Tokenomics: React.FC = () => {
  return (
    
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Navbar/>
      <Card sx={{ background: "#1e1e1e", p: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: "#fff001" }}>
            Baraza Tokenomics
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#ffffff", mb: 2 }}
          >
            Here are the details of the Baraza tokenomics:
          </Typography>
          <List>
            {tokenomicsDetails.map((item, index) => (
              <ListItem key={index} sx={{ borderBottom: "1px solid #fff001" }}>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ color: "#fff001" }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ color: "#ffffff" }}>
                      {item.content}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Tokenomics;
