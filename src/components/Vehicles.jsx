import { useState } from "react";
import { vehicleTypes } from "../data/vehicleTypes";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

const Vehicles = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (vehicle) => {
    setSelected(vehicle.value);
    onSelect(vehicle);
  };

  return (
    <>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Select a Space Vehicle Type
      </Typography>
      <Grid container spacing={2}>
        {vehicleTypes.map((vehicle) => (
          <Grid item xs={12} sm={6} md={3} key={vehicle.value}>
            <Card
              onClick={() => handleSelect(vehicle)}
              sx={{
                cursor: "pointer",
                border: selected === vehicle.value ? "2px solid #1976d2" : "1px solid #ccc",
                transition: "0.3s",
                '&:hover': {
                  boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)"
                }
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={vehicle.imageUrl}
                alt={vehicle.label}
              />
              <CardContent>
                <Typography variant="body1" align="center">
                  {vehicle.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Vehicles;
