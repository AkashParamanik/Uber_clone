import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div className="pt-4">
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-2 p-3 active:text-gray-400 rounded-xl items-center my-2 justify-start"
        >
          <div className="bg-white h-8 flex items-center justify-center w-12">
            <div className="fixed left-10">
              <i className="ri-map-pin-fill"></i>
            </div>
          </div>
          <div><h4 className="font-medium fixed left-18">{elem}</h4></div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
