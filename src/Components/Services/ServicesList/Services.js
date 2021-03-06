import React from 'react';
import Service from './Service';

import Basements from '../../../Styles/Assets/Icons/Basements.png';
import Flooring from '../../../Styles/Assets/Icons/Flooring.png';
import Remodels from '../../../Styles/Assets/Icons/Remodels.png';
import Roofing from '../../../Styles/Assets/Icons/Roofing.png';
import TreeRemoval from '../../../Styles/Assets/Icons/TreeRemoval.png';
import Other from '../../../Styles/Assets/Icons/Other.png';
import JunkRemoval from '../../../Styles/Assets/Icons/JunkRemoval.png';

const Services = props => {

  const services = [
    {service: 'Roofing', image: Roofing},
    {service: 'Flooring', image: Flooring},
    {service: 'Remodels', image: Remodels},
    {service: 'Basements', image: Basements},
    {service: 'Tree Removal', image: TreeRemoval},
    {service: 'Junk Removal', image: JunkRemoval},
    {service: 'Other', image: Other}
  ];

  return <div className='landing_services' style={{background: props.style}}>
  <h3 className='landing_title'>{props.title.toUpperCase()}</h3>
  <div className='landing_services-container'>
    {services.map((element, index) => {
      return <Service
        key={index}
        service={element.service}
        img={element.image}
      />
    })}
  </div>
</div>
}

export default Services;