import React from "react";
import '../../styles/FinancialPlan.css';
import { Link } from 'react-router-dom';
import '../../styles/SliderStyle.css';
import '../../styles/Graphs.css';
import '../../styles/App.css';
import { ROUTES } from "../../Routes";

import secondStepIcon from "../../images/circle-2-thirds.png";
import numberTwoIcon from "../../images/number2.png";
import tickIcon from "../../images/tick.png";
import { Diagram } from "./Diagram";

export const FinancialPlan = props => {

  const header = (
    <div>
      <img src={secondStepIcon} className="Group-9" alt="Second step icon"/>
      <img src={numberTwoIcon} className="number-two" alt="Number two icon"/>
      <div className="FINANCIAL-PLAN">Finanz Planer</div>
    </div>);

  const coloredButtons = (
    <div>
      <button className="graph-pink-box">
        <div className="pink-title">€9,900</div>
        <div className="pink-subtitle">Gesamtkosten</div>
      </button>
      <div className="pink-line"/>

      <button className="graph-green-box">
        <div className="green-title">€21,000</div>
      </button>
      <div className="green-line"/>
      <div className="green-subtitle">Einsparung nach 20 Jahren</div>

      <button className="graph-orange-box">
        <div className="orange-title">14 years</div>
      </button>
      <div className="orange-line"/>
      <div className="orange-subtitle">Amortisationszeit</div>

      <button className="graph-blue-box">
        <div className="blue-title">- %</div>
      </button>
    </div>
  );

  return (
    <div>
      <div className="financial-rectangle">
        {header}
        <div className="Line-3"/>

        <div className="personalize-your-sol">Konfiguriere deine Photovoltaik Anlage:
        </div>
        <img src={tickIcon} className="oval-2" alt="Tick" />
        <div className="your-financial-est">Dein Solarinvestment auf einen Blick:</div>

        {props.children}

        <div className="rectangle-12">
          {coloredButtons}
          <div className="blue-line"/>
          <div className="blue-subtitle">Autarkielevel</div>
          <div className="chart-separator"/>
          <Diagram />
        </div>

        <Link to={ROUTES.RESULTS}>
          <button className="back-button">Zurück</button>
        </Link>

        <Link to={ROUTES.SUMMARY}>
          <button className="next-button">Weiter</button>
        </Link>

      </div>
    </div>
  )
};
