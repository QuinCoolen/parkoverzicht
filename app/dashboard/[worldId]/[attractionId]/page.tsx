
import { Listbox, ListboxItem } from '@nextui-org/react';
import { Attraction } from '@/types/attraction';
import { AttractionHero } from '@/components/attraction/hero';
import { useState } from 'react';

const getAttraction = async (attractionId: Number) => {
  const response = await fetch(`http://localhost:5000/api/attractions/${attractionId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: Attraction = await response.json();

  return data;
};

export default async function DashboardPage({ params }: { params: { worldId: number, attractionId: number } }) {
  
  const attraction = await getAttraction(params.attractionId) || [];

  return (
    <>
      <div className="bg-tvblue w-full h-full bg-opacity-15">
        <div className="flex justify-between w-2/3 mx-auto py-10">
            <AttractionHero attraction={attraction} />
        </div>
      </div>
      <div className="flex flex-row justify-around w-2/3 p-16">
        <div className="bg-blue-500 shadow-lg text-white p-8 w-2/5">
          <h2 className="text-2xl font-semibold">Algemeen</h2>
          <ul className="list-disc text-lg leading-8">
            <li>Drukte: {attraction.visitors}</li>
            <li>Shows:</li>
            <p className="text-sm">
              {attraction.shows}
            </p>
            <li>Storingen:</li>
            <p className="text-sm">
              {attraction.disruptions}
            </p>
            <li>Extra Informatie:</li>
            <p className="text-sm">
              {attraction.misc}
            </p>
          </ul>
        </div>
        <div className="bg-teal-500 shadow-lg text-white p-8 w-2/5 flex flex-col items-center h-full justify-center gap-10">
          <div className="flex overflow-hidden w-full">
            <div className="bg-red-400 text-white flex items-center justify-center px-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>  
            <button className="bg-blue-800 text-white font-bold py-2 px-4 w-full">
              Informatie toevoegen
            </button>
          </div>

          <div className="flex overflow-hidden w-full">
            <div className="bg-red-400 text-white flex items-center justify-center px-4">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <button className="bg-blue-800 text-white font-bold py-2 px-4 w-full">
              Attractie Sluiten
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
