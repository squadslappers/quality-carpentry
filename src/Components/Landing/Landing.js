import React from 'react';

import Intro from '../Intro';
import Services from '../Services/ServicesList/Services';
import GetQuote from '../Contact/GetQuote';
import Reviews from '../Reviews';

const Landing = props => {
// ===== ===== COMPONENTS BEG ===== =====

  const landingMission = <div className='landing_mission'>
      <h3 className='landing_title'>OUR MISSION</h3>
    </div>

// ===== ===== COMPONENTS END ===== =====
// ===== ===== RETURN BEG ===== =====
  return <div className='landing'>
    <Intro
      primaryText="PRIMARY INTRO TEXT"
      secondaryText="Secondary Intro Text"
      mascot={true}/>
    <Services title="What we do best"/>
    <Reviews style='#e3e3e3'/>
    {/* {landingMission} */}
    <GetQuote/>
  </div>
// ===== ===== RETURN END ===== =====
}

export default Landing;