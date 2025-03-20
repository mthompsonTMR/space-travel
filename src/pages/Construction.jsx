import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Stack, Button, TextField } from "@mui/material";

const Construction = () => {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !capacity.trim() || !description.trim()) {
      return; // Prevent empty submissions
    }

    // Retrieve existing spacecrafts from localStorage
    const storedShips = localStorage.getItem("spacecrafts");
    const spacecrafts = storedShips ? JSON.parse(storedShips) : [];

    // Assign a new ID
    const newSpacecraft = {
      id: spacecrafts.length > 0 ? Math.max(...spacecrafts.map((s) => s.id)) + 1 : 1,
      name,
      capacity: parseInt(capacity),
      description
    };

    // Update spacecraft list
    const updatedSpacecrafts = [...spacecrafts, newSpacecraft];
    localStorage.setItem("spacecrafts", JSON.stringify(updatedSpacecrafts));

    // Reset form fields
    setName("");
    setCapacity("");
    setDescription("");

    // Redirect to the spacecrafts page
    navigate("/spacecrafts");
  };

  return (
    <Container maxWidth="sm">
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

          <Stack spacing={2} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Build Spacecraft
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => navigate("/spacecrafts")}>
              View Spacecrafts
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Construction;
