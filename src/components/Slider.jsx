import { useState } from "react";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const images = [
  "/img/team-4-370x370.jpg",
  "/img/team-4-370x370.jpg",
  "/img/team-4-370x370.jpg",
  // Agrega más imágenes aquí
];

function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <IconButton onClick={handlePrevious}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h6">{images[currentIndex]}</Typography>
          <img
            src={images[currentIndex]}
            alt={images[currentIndex]}
            width="300"
            height="200"
          />
        </Grid>
        <Grid item>
          <IconButton onClick={handleNext}>
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Slider
        value={currentIndex}
        min={0}
        max={images.length - 1}
        onChange={(event, newValue) => setCurrentIndex(newValue)}
      />
    </div>
  );
}

export default SimpleCarousel;
