import { useParams, Link } from "react-router-dom";
import { planets } from "../data.js";
import { Card, CardContent, Typography, Button, Container } from "@mui/material";

const PlanetDetail = () => {
  const { id } = useParams();
  const planet = planets.find((p) => p.id === parseInt(id));

  if (!planet) {
    return <Typography variant="h4">Planet not found</Typography>;
  }

  return (
    <Container>
      <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {planet.name}
          </Typography>
          <Typography variant="body1">
            <strong>Atmosphere:</strong> {planet.atmosphere}
          </Typography>
          <Typography variant="body2">
            <strong>Habitable:</strong> {planet.habitable ? "Yes" : "No"}
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/planets">
            ← Back to Planets
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PlanetDetail;
