
import { Listbox, ListboxItem } from '@nextui-org/react';
import Image from 'next/image';
import { World } from '@/types/world';
import { Selection } from '@/components/dashboard/selection';
import { Attraction } from '../../../types/attraction';

const getWorld = async (worldId: Number) => {
  const response = await fetch(`http://localhost:5000/api/worlds/${worldId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data: World = await response.json();

  return data;
};

const calculateVisitors = (world: World) => {
  let visitors = 0;

  world.attractions.map((attraction: Attraction) => {
    visitors += attraction.VisitorsInQueue || 0;
    visitors += attraction.VisitorsOnRide || 0;
  });

  return visitors;
}

export default async function DashboardPage({ params }: { params: { id: number } }) {
  const world = await getWorld(params.id) || [];
  const visitors = calculateVisitors(world);

  return (
    <>
      <div className="bg-tvblue w-full h-full bg-opacity-15">
        <div className="flex justify-between w-2/3 mx-auto py-10">
          <Image
            alt="logo"
            className="shadow-md"
            height={500}
            src="/plattegrond.png"
            width={500}
          />
          <div className="w-full h-full max-w-[360px] border-small rounded-small border-default-200 dark:border-default-100">
            <Selection items={world.attractions} isWorld={false}/>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around w-2/3 p-16">
        <div className="bg-blue-500 shadow-lg text-white p-8 w-2/5">
          <h2 className="text-2xl font-semibold">Algemeen</h2>
          <ul className="list-disc text-lg leading-8">
            <li>Drukte: {visitors}</li>
            <li>Shows:</li>
            <li>Storingen:</li>
            <li>Extra Informatie:</li>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient mon, consectetuer adipiscing
              elit.    commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibu.
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
              Mededeling Toevoegen
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
