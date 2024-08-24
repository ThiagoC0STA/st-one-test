"use client";

import React, { useState } from "react";
import { locations } from "../data/locations";
import { Location } from "../types/locationTypes";

const buildHierarchy = (locations: Location[]): Location[] => {
  const locationMap: { [key: number]: Location } = {};

  locations.forEach(
    (location) => (locationMap[location.id] = { ...location, children: [] })
  );

  locations.forEach((location) => {
    if (location.parent !== null) {
      locationMap[location.parent].children?.push(locationMap[location.id]);
    }
  });


  return locations
    .filter((location) => location.parent === null)
    .map((location) => locationMap[location.id]);
};

export default function Page() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const hierarchy = buildHierarchy(locations);

  console.log(buildHierarchy(locations))

  const renderMenu = (items: Location[]) =>
    items.map((item: any) => (
      <div key={item.id} className="ml-4">
        <button
          className={`text-left w-full p-3 rounded-lg transition-colors duration-300 
            ${
              selectedLocation?.id === item.id
                ? "bg-indigo-800 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          onClick={() => setSelectedLocation(item)}
        >
          {item.name}
        </button>

        {item.children?.length > 0 && (
          <div className="ml-4 border-l-2 border-indigo-600 pl-4">
            {renderMenu(item.children)}
          </div>
        )}
      </div>
    ));

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <div className="w-1/4 bg-gray-800 p-6 shadow-lg overflow-y-auto">
        <h1 className="text-xl font-bold mb-6">Local Menu</h1>
        {renderMenu(hierarchy)}
      </div>
      <div className="w-3/4 p-10 flex items-center justify-center bg-gray-900">
        {selectedLocation ? (
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-indigo-500 mb-4">
              {selectedLocation.name}
            </h2>
            <p className="text-lg text-gray-300">
              {selectedLocation.description}
            </p>
          </div>
        ) : (
          <p className="text-lg text-gray-500">
            Selecione um local para ver a descrição.
          </p>
        )}
      </div>
    </div>
  );
}
