// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from "./routes";
// import { Container, Typography, Button, Card, CardContent } from "@mui/material";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App



// export default function Home() {
//     return (
//         <Container sx={{ mt: 5 }}>
//             <Typography variant="h3" color="primary" gutterBottom>
//                 Purple as Primary 🎨
//             </Typography>

//             <Button variant="contained" color="primary" sx={{ mr: 2 }}>
//                 Purple Button
//             </Button>
//             <Button variant="outlined" color="secondary">
//                 Blue Button
//             </Button>

//             <Card sx={{ mt: 4 }}>
//                 <CardContent>
//                     <Typography color="text.primary">Black text</Typography>
//                     <Typography color="text.secondary">Grey text</Typography>
//                 </CardContent>
//             </Card>
//         </Container>
//     );
// }
