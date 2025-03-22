import { useParams, Link } from "react-router-dom";
import planetsData from "../data/planets.json"; // Import from JSON
import { Card, CardContent, Typography, Button, Container, CardMedia, Stack } from "@mui/material";

const PlanetDetail = () => {
  const { id } = useParams();
  const planet = planetsData.find((p) => p.id === parseInt(id));

  if (!planet) {
    return <Typography variant="h4">Planet not found</Typography>;
  }

  return (
    <Container>
      <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 3, backgroundColor: "#000", color: "#fff" }}>
        <CardMedia
          component="img"
          image={planet.imageUrl}
          alt={planet.name}
          sx={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {planet.name}
          </Typography>
          <Typography variant="body1">
            <strong>Distance from Sun:</strong> {planet.distanceFromSun}
          </Typography>
          <Typography variant="body2">
            <strong>Atmosphere:</strong> (Unknown) {/* Placeholder until we add data */}
          </Typography>
          <Typography variant="body2">
            <strong>Habitable:</strong> (Unknown) {/* Placeholder until we add data */}
          </Typography>

          <Stack spacing={2} sx={{ mt: 2 }}>
            {/* Back to Planets Button */}
            <Button variant="contained" color="primary" component={Link} to="/planets">
              ← Back to Planets
            </Button>

            {/* Select Spacecraft Button - Navigates to Spacecrafts.jsx with planet ID */}
            <Button 
              variant="contained" 
              color="secondary" 
              component={Link} 
              to={`/spacecrafts?assignTo=${planet.id}`}
            >
              🚀 Select Spacecraft for Mission
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PlanetDetail;
