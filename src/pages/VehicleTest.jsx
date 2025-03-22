import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Vehicles from "../components/Vehicles";

const VehicleTest = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        🚀 Test Vehicle Selector
      </Typography>
      <Vehicles onSelect={(vehicle) => setSelectedVehicle(vehicle)} />
      {selectedVehicle && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          You selected: <strong>{selectedVehicle.label}</strong>
        </Typography>
      )}
    </Container>
  );
};

export default VehicleTest;
