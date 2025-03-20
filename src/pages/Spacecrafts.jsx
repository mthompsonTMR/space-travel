import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Container, Grid, Button } from "@mui/material";

const Spacecrafts = () => {
  const [ships, setShips] = useState([]);

  // Load spacecrafts from localStorage on mount
  useEffect(() => {
    const storedShips = localStorage.getItem("spacecrafts");
    if (storedShips) {
      setShips(JSON.parse(storedShips));
    }
  }, []);

  // Function to delete a spacecraft
  const handleDelete = (id) => {
    const updatedShips = ships.filter((ship) => ship.id !== id);
    setShips(updatedShips);
    localStorage.setItem("spacecrafts", JSON.stringify(updatedShips)); // Update localStorage
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Spacecrafts
      </Typography>
      <Grid container spacing={3}>
        {ships.length > 0 ? (
          ships.map((ship) => (
            <Grid item xs={12} sm={6} md={4} key={ship.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component={Link} to={`/spacecraft/${ship.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {ship.name}
                  </Typography>
                  <Typography variant="body1"><strong>Capacity:</strong> {ship.capacity} astronauts</Typography>
                  <Typography variant="body2">{ship.description}</Typography>
                  <Button variant="contained" color="secondary" sx={{ mt: 1 }} onClick={() => handleDelete(ship.id)}>
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6">No spacecrafts available. Please add one from the "Construct a Spacecraft" page.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Spacecrafts;
