import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const fetchSpacecraftImage = async (query) => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=YOUR_UNSPLASH_API_KEY`);
    const data = await response.json();
    return data.results.length > 0 ? data.results[0].urls.small : null;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};

const SpacecraftImage = ({ name }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (name) {
      fetchSpacecraftImage(name).then(setImageUrl);
    }
  }, [name]);

  if (!imageUrl) return null;

  return (
    <Box sx={{ mt: 3, textAlign: "center" }}>
      <Typography variant="h6">Spacecraft Image:</Typography>
      <img src={imageUrl} alt="Generated Spacecraft" style={{ width: "100%", borderRadius: "8px", border: "1px solid #fff" }} />
    </Box>
  );
};

export default SpacecraftImage;
