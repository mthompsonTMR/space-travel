import { useParams, Link } from "react-router-dom";
import { spacecrafts } from "../data.js";
import { Card, CardContent, Typography, Button, Container } from "@mui/material";

const SpacecraftDetail = () => {
  const { id } = useParams();
  const spacecraft = spacecrafts.find((ship) => ship.id === parseInt(id));

  if (!spacecraft) {
    return <Typography variant="h4">Spacecraft not found</Typography>;
  }

  return (
    <Container>
      <Card sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {spacecraft.name}
          </Typography>
          <Typography variant="body1">
            <strong>Capacity:</strong> {spacecraft.capacity} astronauts
          </Typography>
          <Typography variant="body2" paragraph>
            <strong>Description:</strong> {spacecraft.description}
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="/spacecrafts">
            ← Back to Spacecrafts
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SpacecraftDetail;

