

import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <main>
      <Header />
      <Router>
        <Routes>
          <Route path='/' exact element={<Post />} />
        </Routes>
      </Router>
    </main>


  );
}

export default App;






// <p>The PREFIRE (Polar Radiant Energy in the Far-InfraRed Experiment) mission will gather data on how much far-infrared energy is emitted at the poles, and how those emissions change throughout the day and year. Far-infrared is a poorly understood portion of the Earth’s energy spectrum, though nearly 60% of Arctic emissions occur at these wavelengths.</p>

// <p>The two satellites, each the size of a bread loaf, will be equipped with a miniaturized instrument called a thermal IR spectrometer. Scientists will be able to compare the data to conditions in cloud cover and sea ice levels below, and hopefully generate more accurate climate models into the future.</p>

// <p>Across two launches scheduled for May 2024, Rocket Lab will use its Electron rocket to carry the two cubesats to near-polar orbits, where they’ll collect data for at least 10 months. The launches will take place from Rocket Lab’s launch site on Mahia Peninsula, New Zealand, and will likely occur in rapid succession due to the specific requirements of the mission. Meeting such requirements “is made possible by Electron’s unique ability to deploy dedicated small satellite missions on highly responsive timelines,” the company said in a statement.
// </p>
// <p>NASA awarded the launch contract as part of its Venture-class Acquisition of Dedicated and Rideshare (VADR) program, a massive contract vehicle that has a budget of $300 million across five years to put NASA payloads on commercial rockets.
// </p>
// <p>These launches will be the 7th and 8th the company has conducted on behalf of NASA since 2018. Earlier this year, Rocket Lab successfully placed four of the space agency’s storm-watching satellites into orbit. Those launches were also awarded under the VADR program.
// </p>
// <p>The exact value of the launch contract was not disclosed by Rocket Lab or NASA. TechCrunch has inquired into the value and will update the story if they respond.</p>