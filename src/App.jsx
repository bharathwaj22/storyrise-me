// import Home from "../src/components/home";
// import Particles from '../src/components/Pratical_star';


// import './App.css'

// function App() {
  

//   return (
//     <>
//             <div style={{ width: '100%', height: '600px', position: 'relative' }}>
//       <Particles
//         particleColors={['#ffffff', '#ffffff']}
//         particleCount={200}
//         particleSpread={10}
//         speed={0.1}
//         particleBaseSize={100}
//         moveParticlesOnHover={true}
//         alphaParticles={false}
//         disableRotation={false}
//       />
//     </div>
//     <Home></Home>
//     </>
//   )
// }

// export default App

import Home from "../src/components/home";
import Particles from '../src/components/Pratical_star';
import Layout from '../src/components/Layout';
import Router from '../src/Routers/Routers';
import { BrowserRouter } from 'react-router-dom';
import { TfiLocationArrow } from "react-icons/tfi";


import './App.css'

function App() {
  // document.addEventListener("mousemove", function (e) {
  //   const cursor = document.getElementById("customCursor");
  //   cursor.style.top = e.clientY + "px";
  //   cursor.style.left = e.clientX + "px";
  // });

  
  return (
    <>
    <BrowserRouter>

      {/* Particle Background */}
      {/* <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: -1  
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={10}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={1500}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div> */}
      {/* <SplashCursor /> */}

      {/* Main Content */}
{/* <div id="customCursor">
 <TfiLocationArrow className="arrow-icon" />
  <span class="cursor-text">you </span>
</div> */}



      <Layout>
      <Router></Router>
      </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

