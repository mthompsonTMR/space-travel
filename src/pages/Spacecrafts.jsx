import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Container, Grid, Button, CardMedia } from "@mui/material";

const initialSpacecrafts = [
  { 
    id: 52, 
    name: "Space Shuttle Discovery", 
    capacity: 7, 
    description: "Famous for carrying the Hubble Space Telescope", 
    imageUrl: "/spaceshuttle.jpg"  // No need for /images/
  }
];


const Spacecrafts = () => {
  const [ships, setShips] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const planetId = searchParams.get("assignTo");

  useEffect(() => {
    const storedShips = localStorage.getItem("spacecrafts");
    setShips(storedShips ? JSON.parse(storedShips) : initialSpacecrafts);
  }, []);

  const handleAssign = (ship) => {
    if (!planetId) return;

    const assignments = JSON.parse(localStorage.getItem("planetAssignments")) || {};
    assignments[planetId] = ship.imageUrl; // Store only image URL
    localStorage.setItem("planetAssignments", JSON.stringify(assignments));

    navigate(`/planet/${planetId}`);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        {planetId ? "🚀 Select a Spacecraft for Your Mission" : "Spacecrafts"}
      </Typography>

      <Grid container spacing={3}>
        {ships.map((ship) => (
          <Grid item xs={12} sm={6} md={4} key={ship.id}>
            <Card>
              <CardMedia component="img" image={ship.imageUrl} alt={ship.name} sx={{ height: 140 }} />
              <CardContent>
                <Typography variant="h5">{ship.name}</Typography>
                <Typography variant="body1"><strong>Capacity:</strong> {ship.capacity} astronauts</Typography>
                <Typography variant="body2">{ship.description}</Typography>
                {planetId && (
                  <Button variant="contained" color="primary" sx={{ mt: 1 }} onClick={() => handleAssign(ship)}>
                    Assign to Mission
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Spacecrafts;
