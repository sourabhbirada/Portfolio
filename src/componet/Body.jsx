import React, { useState, useEffect } from 'react';
import Project from "./Project";
import No from "./No";

const Body = () => {
  const [isYesChecked, setIsYesChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleYesClick = () => {
    setIsYesChecked(true);
    setIsNoChecked(false);
  };

  const handleNoClick = () => {
    setIsYesChecked(false);
    setIsNoChecked(true);
  };
  

  useEffect(() => {

      const isWarningDismissed = localStorage.getItem('warningDismissed');
      if (!isWarningDismissed) {
          setShowWarning(true); 
      }
  }, []);

  const handleCloseWarning = () => {
      setShowWarning(false);
      localStorage.setItem('warningDismissed', 'true'); 
  };
  return (
    <div  className="ml-10 mt-6  text-[20px]">
       {showWarning && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg w-96 text-center relative">
                        <h2 className="text-lg font-semibold mb-4">Warning</h2>
                        <p className='font-merriweather'>I am currently working on this site.</p>
                        <span 
                            className="absolute top-2 right-2 text-2xl cursor-pointer"
                            onClick={handleCloseWarning}
                        >
                            &times;
                        </span>
                    </div>
                </div>
            )} 
      <h3 className="mb-4 font-dmSerif">Wanna see some projects?</h3>
      <div className="flex flex-col font-dmSerif text-[18px] mb-3 gap-2">
      <label>
        <input
          type="checkbox"
          checked={isYesChecked}
          onChange={handleYesClick}
        />
        Yes, Why not.
      </label>
      <label>
        <input
          type="checkbox"
          checked={isNoChecked}
          onChange={handleNoClick}
        />
        No, Thanks.
      </label>
      </div>
      <p>{isYesChecked ? <Project/> : isNoChecked ? <No/> : ""}</p>
    </div>
  );
};

export default Body;
