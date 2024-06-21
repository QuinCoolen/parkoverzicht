'use client'

import { Listbox, ListboxItem } from "@nextui-org/react";
import Image from "next/image";
import { World } from "../../types/world";

const getWorlds = async () => {
  const response = await fetch("http://localhost:5000/api/worlds");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: World[] = await response.json();

  return data;
}

export default async function DashboardPage() {
  const worlds = getWorlds();

  return (
    <>
      <div className="bg-tvblue w-full h-[600px] bg-opacity-15">
        <div className="flex justify-between w-2/3 mx-auto py-10">
          <Image src="/plattegrond.png" alt="logo" width={500} height={500} className="shadow-md" />
          <div className="w-full h-full max-w-[360px] border-small rounded-small border-default-200 dark:border-default-100">
            <Listbox
              classNames={{ base: "bg-white h-full w-full shadow-md", list: "max-h-[356px] overflow-y-scroll no-scrollbar" }}
              aria-label="Actions"
              onAction={(key) => alert(key)}
            >
              {(await worlds).map((world) => (
                <ListboxItem key={world.id} value={world.id} classNames={{ title: "text-xl text-gray-500 font-semibold" }}>
                  {world.name}
                </ListboxItem>
              ))}
            </Listbox>
          </div>
        </div>
        <div className="fill-white w-full flex justify-center overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-[calc(100% + 1.3px)] h-[161px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path className="fill-white" d="M0,0V7.23C0,65.52,268.63,82.77,600,82.77S1200,65.52,1200,7.23V0Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-row justify-around w-2/3 pb-16">
        <div className="bg-blue-500 shadow-lg text-white p-8 w-2/5">
          <h2 className="text-2xl font-semibold">Algemeen</h2>
          <ul className="list-disc text-lg leading-8">
            <li>Drukte:</li>
            <li>Shows:</li>
            <li>Storingen:</li>
            <li>Extra Informatie:</li>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient mon, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibu.</p>
          </ul>
        </div>
        <div className="bg-teal-500 shadow-lg text-white p-8 w-2/5 flex flex-col items-center h-full justify-center gap-10">
          <div className="flex overflow-hidden w-full">
            <div className="bg-red-400 text-white flex items-center justify-center px-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
            <button className="bg-blue-800 text-white font-bold py-2 px-4 w-full">
              Informatie toevoegen
            </button>
          </div>

          <div className="flex overflow-hidden w-full">
            <div className="bg-red-400 text-white flex items-center justify-center px-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
            <button className="bg-blue-800 text-white font-bold py-2 px-4 w-full">
              Mededeling Toevoegen
            </button>
          </div>

          <div className="flex overflow-hidden w-full">
            <div className="bg-red-400 text-white flex items-center justify-center px-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
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