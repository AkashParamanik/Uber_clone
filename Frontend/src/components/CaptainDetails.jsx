import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CapatainContext";

const CaptainDetails = (props) => {
  const { captain } = useContext(CaptainDataContext);
  // const income = Number(0);
  // income = income + Number(props.ride?.fare);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">
            {captain.fullname.firstname + " " + captain.fullname.lastname}
          </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-green-600">₹200</h4>
          <p className="text-sm font-semibold text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center">
          <i className="text-2xl mb-2 text-green-400  ri-timer-line"></i>
          <h5 className="text-lg text-green-400 font-medium">10.2</h5>
          <p className="text-sm font-medium">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl mb-2 text-yellow-500  ri-speed-up-line"></i>
          <h5 className="text-lg text-yellow-500 font-medium">10 k.m</h5>
          <p className="text-sm font-medium">Total Distance</p>
        </div>
        <div className="text-center">
          <i className="text-2xl text-blue-500 mb-2 ri-sticky-note-line"></i>
          <h5 className="text-lg text-blue-500 font-medium">8</h5>
          <p className="text-sm font-medium">Total rides</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
