import { Link } from "react-router-dom";
import { planets } from "../data.js";
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";

const Planets = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Planets
      </Typography>
      <Grid container spacing={3}>
        {planets.map((planet) => (
          <Grid item xs={12} sm={6} md={4} key={planet.id}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component={Link}
                  to={`/planet/${planet.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {planet.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Atmosphere:</strong> {planet.atmosphere}
                </Typography>
                <Typography variant="body2">
                  <strong>Habitable:</strong> {planet.habitable ? "Yes" : "No"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Planets;


