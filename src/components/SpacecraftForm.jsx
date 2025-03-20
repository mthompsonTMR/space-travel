import { useState } from "react";
import { TextField, Button, Stack, Alert, CircularProgress } from "@mui/material";

const SpacecraftForm = ({ onSubmit, loading }) => {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Spacecraft name is required.");
      return;
    }
    if (!capacity.trim() || isNaN(capacity) || parseInt(capacity) <= 0) {
      setError("Capacity must be a valid positive number.");
      return;
    }
    if (!description.trim()) {
      setError("Description is required.");
      return;
    }

    onSubmit({ name, capacity: parseInt(capacity), description });
    setName("");
    setCapacity("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert severity="error">{error}</Alert>}
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
          {loading ? <CircularProgress size={24} /> : "Build Spacecraft"}
        </Button>
      </Stack>
    </form>
  );
};

export default SpacecraftForm;
