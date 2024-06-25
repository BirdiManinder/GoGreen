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
      <p className="home-description">{home.description}</p>
      {/* <Button text={buttons.main} /> */}
      <Adsense client='ca-pub-8783640532957105' slot='3460995955'/>
      <Adsense client='ca-pub-7292810486004926' slot='7806394673'
          style={{ display: 'block' }} layout='in-article' format='fluid'/>
    </div>
  );
}
