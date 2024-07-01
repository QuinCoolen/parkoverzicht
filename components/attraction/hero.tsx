'use client';

import { Button, Input, Link, Listbox, ListboxItem, Textarea } from '@nextui-org/react';
import { ListBoxProps } from '@/types/listbox';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Attraction } from '../../types/attraction';

export const AttractionHero = (props: ListBoxProps) => {
  console.log(props.attraction);
  const [selectedItem, setSelectedItem] = useState<keyof Attraction>('disruptions');

  const handleItemSelected = (item: keyof Attraction) => {
    setSelectedItem(item);

    reset();
  };
  
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<Attraction>();

  const onSubmit: SubmitHandler<Attraction> = async (data) => {
    console.log(data);
    const submissionData = {
      id: props.attraction.id,
      name: props.attraction.name,
      disruptions: data.disruptions ? data.disruptions : props.attraction.disruptions,
      shows: data.shows ? data.shows : props.attraction.shows,
      visitors: data.visitors ? data.visitors : props.attraction.visitors,
      misc: data.misc ? data.misc : props.attraction.misc,
      maxRiders: props.attraction.maxRiders,
      isOpen: props.attraction.isOpen,
      worldId: props.attraction.worldId,
    };

    console.log(submissionData)

    try {
      const response = await fetch(`http://localhost:5000/api/attractions/${props.attraction.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      router.push(`/dashboard/${props.attraction.worldId}/`);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='w-full flex flex-row justify-around'>
      <Listbox
        aria-label="Actions"
        selectionMode='single'
        classNames={{
          base: 'bg-transparent h-full w-fit border-none',
          list: 'max-h-[356px] overflow-y-scroll no-scrollbar',
        }}
      >
          <ListboxItem
            key={"disruptions"}
            classNames={{ title: 'text-xl' }}
            showDivider
            onClick={() => handleItemSelected('disruptions')}
          >
            Storingen Melden
          </ListboxItem>
          <ListboxItem
            key={"shows"}
            classNames={{ title: 'text-xl' }}
            showDivider
            onClick={() => handleItemSelected('shows')}
          >
            Shows Toevoegen
          </ListboxItem>
          <ListboxItem
            key={"visitors"}
            classNames={{ title: 'text-xl' }}
            showDivider
            onClick={() => handleItemSelected('visitors')}
          >
            Drukte Handmatig Aanpassen
          </ListboxItem>
          <ListboxItem
            key={"misc"}
            classNames={{ title: 'text-xl' }}
            onClick={() => handleItemSelected('misc')}
          >
            Overige Informatie Toevoegen
          </ListboxItem>
        </Listbox>
        <form
          className="w-2/5 flex flex-col justify-between gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {selectedItem === 'visitors' && (
            <Input
              placeholder="Drukte"
              type="number"
              {...register(selectedItem)}
            />
            )}
          {selectedItem !== 'visitors' && (
          <Textarea
            placeholder="Vul hier de informatie in"
            {...register(selectedItem)}
          />
          )}
          <Button
            className="bg-tvblue text-white h-10 rounded-full"
            type="submit"
          >
            Bevestigen
          </Button>
        </form>
      </div>
  );
};
