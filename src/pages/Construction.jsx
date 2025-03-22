import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import Vehicles from "../components/Vehicles";

const Construction = () => {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleVehicleSelect = (vehicle) => {
    setImageUrl(vehicle.imageUrl);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !capacity.trim() || !description.trim()) {
      alert("All Fields are required!");
      return; // Basic validation
    }

    if (!imageUrl) {
      alert("Please slect a vehicle type before building the spacecraft!");
      return;
    }

    const storedShips = localStorage.getItem("spacecrafts");
    const spacecrafts = storedShips ? JSON.parse(storedShips) : [];

    const newSpacecraft = {
      id:
        spacecrafts.length > 0
          ? Math.max(...spacecrafts.map((s) => s.id)) + 1
          : 1,
      name,
      capacity: parseInt(capacity),
      description,
      imageUrl: imageUrl || "https://via.placeholder.com/150",
    };

    const updatedSpacecrafts = [...spacecrafts, newSpacecraft];
    localStorage.setItem("spacecrafts", JSON.stringify(updatedSpacecrafts));

    // Reset form
    setName("");
    setCapacity("");
    setDescription("");
    setImageUrl("");

    navigate("/spacecrafts");
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          🚀 Construct a New Spacecraft
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Spacecraft Name"
            variant="outlined"
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Capacity"
            type="number"
            variant="outlined"
            margin="normal"
            required
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            margin="normal"
            multiline
            rows={3}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* 🚀 Vehicle Selector */}
          <Vehicles onSelect={handleVehicleSelect} />

          {/* 🔍 Preview Selected Image */}
          {imageUrl && (
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Selected Vehicle Preview:
              </Typography>
              <img
                src={imageUrl}
                alt="Selected spacecraft preview"
                style={{
                  maxWidth: "200px",
                  border: "1px solid #ccc",
                  borderRadius: "8px"
                }}
              />
            </Box>
          )}

          <Stack spacing={2} sx={{ mt: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Build Spacecraft
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/spacecrafts")}
            >
              View Spacecrafts
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Construction;
