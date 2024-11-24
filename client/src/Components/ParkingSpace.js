import React from 'react';
import '../Styles/ParkingSpace.css'
const ParkingSpace = () => {
  return (
    <div className='mainContainerParkingSpace'>
      <div>
        <h1>Parking Space</h1>
      </div>
      
      <div className='parkingSpaceContainer'>
        {/* 2 Wheeler Parking */}
        <div className='twoWheeler'>
          <h2>2 Wheeler Parking</h2>
          <div>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
          </div>
        </div>

        {/* 3 Wheeler Parking */}
        <div className='threeWheeler'>
          <h2>3 Wheeler Parking</h2>
          <div>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
          </div>
        </div>

        {/* 4 Wheeler Parking */}
        <div className='fourWheeler'>
          <h2>4 Wheeler Parking</h2>
          <div>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpace;