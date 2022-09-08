import React from "react";
import { $ }  from 'react-jquery-plugin'
import subimg from "./img/subimg.svg";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
// import { PopupSurvey } from "survey-react-ui";
import "survey-core/defaultV2.css";
import Drawer from "./Drawer"
import { json } from "./json"
import "./Appointment.css"

StylesManager.applyTheme("defaultV2");

window["$"] = window["jQuery"] = $;
require("velocity-animate/velocity.js");


function Appointment () {
    const survey = new Model(json);


    return (
        <>
            <div className="fsssa03">
              <div className="fsssa02">
                  <div className="fsssa04"><img className="fsssa05" src={subimg} alt=""/> </div>
                  <Survey model={survey} className="fsssa01"/>
              </div>
              <Drawer/>
            </div>
            {/* <PopupSurvey model={survey}  isExpanded={true}/> */}
            

        </>
    );
}


export default Appointment