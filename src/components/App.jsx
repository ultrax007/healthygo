import '../styles/App.sass';
import background from "../assets/wave.svg";
import avatar from "../assets/about.svg";
// import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
   <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header"><h3>Healthy Go Multitrade LLP</h3></header>
			<div className="mainContainer" >
				<div className="minicontainer">
					<div className="avatarcontainer" style={{ backgroundImage: `url(${avatar})` }}></div>
					<div className="aboutuscontainer">
						“HealthyGo Multitrade LLP” is one of the few companies that will make fast progress. The foundation of our company is laid through outstanding products along with intelligent and effective business plans with the foremost purpose of serving the society along with excellent customer service. Professional transparency and openness shall always be the culture of “HealthyGo Multitrade LLP”.
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
