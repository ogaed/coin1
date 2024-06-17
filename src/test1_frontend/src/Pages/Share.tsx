
import React,  { useState, Dispatch, SetStateAction } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/ui/Navbar";
//import { test1_backend, createActor } from "../../../declarations/test1_backend";
// import { HttpAgent } from "@dfinity/agent";
// import { useNavigate } from "react-router-dom";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff001",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff001",
            },
            "&:hover fieldset": {
              borderColor: "#fff001",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff001",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#fff001",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#fff001",
          },
        },
      },
    },
  },
});
interface ComponentProps {
  principal: string;
  setPrincipal: Dispatch<SetStateAction<string>>;
}

const PublishStoryComponent: React.FC<ComponentProps> = ({  }) => {
// const PublishStoryComponent: React.FC = () => {
  //const navigate = useNavigate();

//   let actor = test1_backend;
//  // const agent = new HttpAgent();
//   //the id here is local one
//   actor = createActor("avqkn-guaaa-aaaaa-qaaea-cai", {
//   //  agent,
//   });
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handlePublish = async () => {
    // let story_no_lines = story.replace(/\r?\n|\r/g, " ");
    // let words = story_no_lines.split(" ");

    // let res = await actor.publish_dust(words, title);

    // if (res.length > 0) {
    //   alert("Succesfully published a barazacoin");
    //   navigate("/");
    // } else {
    //   alert("Could not publish a barazacoin");
    // }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Share Your Barazacoins Story
            </Typography>
            <Box mt={2} mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Your Story"
                multiline
                rows={6}
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePublish}
            >
              Publish
            </Button>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default PublishStoryComponent;
