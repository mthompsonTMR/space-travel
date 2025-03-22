import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box } from "@mui/material";
import planetsData from "../data/planets.json";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [assignments, setAssignments] = useState({});

  useEffect(() => {
    setPlanets(planetsData);

    // Load assigned spacecrafts from localStorage
    const storedAssignments = localStorage.getItem("planetAssignments");
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    }
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
        🌍 Mission Control: Select a Planet
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
        Click on a planet to view details and assign a spacecraft to a mission.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {planets.map((planet) => {
          const assignedImage = assignments[planet.id];

          return (
            <Grid item xs={12} key={planet.id}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  backgroundColor: "#000",
                  color: "#fff",
                  border: "1px solid #fff",
                  transition: "0.3s",
                  "&:hover": { border: "2px solid yellow", cursor: "pointer" }
                }}
                component={Link}
                to={`/planet/${planet.id}`}
              >
                {/* Left: Planet Image & Info */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    image={planet.imageUrl}
                    alt={planet.name}
                    sx={{
                      width: 100,
                      height: 100,
                      marginRight: 2,
                      borderRadius: "50%",
                      border: "1px dotted white"
                    }}
                  />
                  <CardContent>
                    <Typography variant="h5" sx={{ color: "yellow" }}>
                      {planet.name}
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: "5px" }}>
                      Distance from Sun: {planet.distanceFromSun}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "lightgray", fontStyle: "italic", mt: 1 }}>
                      Click for mission details →
                    </Typography>
                  </CardContent>
                </Box>

                {/* Right: Assigned Spacecraft (if any) */}
                <Box sx={{ pr: 2 }}>
                  {assignedImage ? (
                    <img
                      src={assignedImage}
                      alt="Assigned spacecraft"
                      title="Click to cancel mission"
                      onClick={(e) => {
                        e.preventDefault(); //prevent card neavigation
                        const updated = { ...assignments };
                        delete updated[planet.id];
                        setAssignments(updated);
                        localStorage.setItem("planetAssignments", JSON.stringify(updated));
                      }}  
                      style={{
                        height: "60px",
                        borderRadius: "4px",
                        border: "1px solid white"
                      }}
                    />
                  ) : (
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      No mission assigned
                    </Typography>
                  )}
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Planets;
