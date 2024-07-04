import { buttons, home } from "../constants";

import { Button, CompanyName } from "../components";
import { Adsense } from "@ctrl/react-adsense";

export function Home() {
  return (
    <div className="home-content">
      <h1 className="home-title">
        {home.title.firstWord}{" "}
        {<CompanyName className="home-title__font-size" />}{" "}
        {home.title.lastWord}
      </h1>
      {/* <p className="home-description">{home.description}</p> */}
      <p className="home-part">Going green and supporting the environment is a crucial and rewarding endeavor. Here are some effective ways to contribute:</p>
      <h2 className="header-part">Reduce, Reuse, Recycle</h2>
      <p className="home-part"><h5 className="header-part">Reduce:</h5> Minimize waste by cutting down on single-use products.</p>
      <p className="home-part"><h5 className="header-part">Reuse:</h5> Find new uses for old items instead of discarding them.</p>
      <p className="home-part"><h5 className="header-part">Recycle:</h5> Properly recycle materials like paper, plastic, glass, and metal.</p>

      <h2 className="header-part">Conserve Energy</h2>
      <p className="home-part"><h5 className="header-part">Use Renewable Energy:</h5> Consider solar or wind energy for your home.</p>
      <p className="home-part"><h5 className="header-part">Switch to LEDs:</h5> Use energy-efficient light bulbs.</p>
      <p className="home-part"><h5 className="header-part">Unplug Devices:</h5> Disconnect electronics when not in use.</p>

      <h2 className="header-part">Sustainable Transportation</h2>
      <p className="home-part"><h5 className="header-part">Carpool or Use Public Transit:</h5> Reduce carbon emissions.</p>
      <p className="home-part"><h5 className="header-part">Bike or Walk:</h5> Choose eco-friendly modes of transport.</p>
      <p className="home-part"><h5 className="header-part">Drive Efficiently:</h5> Maintain your vehicle and drive smoothly to save fuel.</p>

      <h2 className="header-part">Eco-Friendly Products</h2>
      <p className="home-part"><h5 className="header-part">Buy Local:</h5> Support local farmers and reduce transportation emissions.</p>
      <p className="home-part"><h5 className="header-part">Use Eco-Friendly Products:</h5> Choose products with minimal environmental impact.</p>
      <p className="home-part"><h5 className="header-part">Avoid Plastic:</h5> Opt for reusable bags, bottles, and containers.</p>

      <h2 className="header-part">Water Conservation</h2>
      <p className="home-part"><h5 className="header-part">Fix Leaks:</h5> Prevent water wastage by repairing leaks promptly.</p>
      <p className="home-part"><h5 className="header-part">Use Water-Saving Fixtures:</h5> Install low-flow showers and toilets.</p>
      <p className="home-part"><h5 className="header-part">Water Wisely:</h5> Water plants during cooler times to reduce evaporation.</p>

      <h2 className="header-part">Support Green Initiatives</h2>
      <p className="home-part"><h5 className="header-part">Volunteer:</h5> Participate in local environmental clean-up events.</p>
      <p className="home-part"><h5 className="header-part">Advocate:</h5> Support policies and organizations that promote sustainability.</p>
      <p className="home-part"><h5 className="header-part">Educate:</h5> Share knowledge and encourage others to adopt green practices.</p>

      <h2 className="header-part">Sustainable Food Choices</h2>
      <p className="home-part"><h5 className="header-part">Eat Less Meat:</h5> Reduce your carbon footprint by consuming less meat.</p>
      <p className="home-part"><h5 className="header-part">Grow Your Own:</h5> Start a garden to grow your own vegetables and herbs.</p>
      <p className="home-part"><h5 className="header-part">Compost:</h5> Turn food scraps into nutrient-rich compost for gardening.</p>
      {/* <Button text={buttons.main} /> */}
      {/* <Adsense client='ca-pub-8783640532957105' slot='3460995955'/>
      <Adsense client='ca-pub-7292810486004926' slot='7806394673'
          style={{ display: 'block' }} layout='in-article' format='fluid'/> */}
    </div>
  );
}
