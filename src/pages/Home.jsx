import { Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { RocketLaunch, AutoStories, Explore, Engineering, Public } from "@mui/icons-material";

const homeContent = [
  {
    id: 1,
    icon: <RocketLaunch sx={{ fontSize: 40, color: "white" }} />,
    title: "Journey into the Future",
    description:
      "In a world where the impossible has become reality, where the stars are no longer out of reach, welcome to the future of humanity's survival and exploration. Witness the evolution of technology as it transforms barren planets into thriving havens, all made possible by the wonders of innovation and human determination.",
  },
  {
    id: 2,
    icon: <AutoStories sx={{ fontSize: 40, color: "white" }} />,
    title: "From Neglect to Innovation",
    description:
      "Once the cradle of civilization, Earth now stands as a solemn reminder of the consequences of neglect and environmental decline. But fear not, for the ingenuity of mankind has soared to new heights. With our relentless pursuit of advancement, we have not only healed our scars but extended our reach across the cosmos.",
  },
  {
    id: 3,
    icon: <Explore sx={{ fontSize: 40, color: "white" }} />,
    title: "🚀 Enter Space Travel: Where Dreams Take Flight",
    description:
      "Embark on an extraordinary journey with our groundbreaking web application, aptly named 'Space Travel.' As a commander engineer, the fate of humanity’s exodus rests in your capable hands. Prepare to face the ultimate challenge: evacuating humankind from their birthplace and guiding them towards a future among the stars.",
  },
  {
    id: 4,
    icon: <Engineering sx={{ fontSize: 40, color: "white" }} />,
    title: "🔧 Engineer, Explorer, Leader",
    description:
      "Space Travel empowers you to engineer, design, and even dismantle spacecraft. Craft vessels that defy the boundaries of imagination, envisioning a future where life flourishes beyond the stars. But remember, your role extends beyond construction – you are a leader, an explorer, a commander steering humanity's destiny.",
  },
  {
    id: 5,
    icon: <Public sx={{ fontSize: 40, color: "white" }} />,
    title: "🌌 A Universe of Possibilities Awaits",
    description:
      "Immerse yourself in the thrill of exploration as you chart interplanetary courses within our solar system. The universe is vast, and its mysteries are boundless. Every decision you make will shape the destiny of your crew and the survival of humankind. The cosmos is calling – are you ready?",
  },
];

const Home = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        sx={{
          mt: 3,
          color: "#FFD700", // Gold text for contrast
          backgroundColor: "#222", // Dark background
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
        }}
      >
        Space World: Expanding Horizons Beyond Earth
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {homeContent.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                backgroundColor: "#1a1a1a",
                color: "white",
                border: "1px dotted white",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  {item.icon} {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};


export default Home;

