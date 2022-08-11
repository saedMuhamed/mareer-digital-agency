import React from "react";

const MapSection = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl bg-white text-gray-700">
      <div className="grid grid-cols-2">
        <div className="order-1 col-span-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8827.330741966553!2d2.308756110118289!3d48.87000842543867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8f3049b%3A0xcbb47407434935db!2s18%20Av.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1635492407441!5m2!1sfr!2sfr"
            title="map"
            scrolling="no"
            frameborder="0"
            width="100%"
            height="300px"
            className=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
