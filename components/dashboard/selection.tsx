'use client';

import { Listbox, ListboxItem } from '@nextui-org/react';
import { DashboardProps } from '../../types/dashboard';
import { useRouter } from 'next/navigation';
import { World } from '../../types/world';
import { Attraction } from '../../types/attraction';

export const Selection = (props: DashboardProps) => {
  const router = useRouter()

  const listboxItemPressed = (item: World | Attraction) => {
  const isAttraction = (x: any): x is Attraction => item === x;
    if (props.isWorld === true) {
      router.push(`/dashboard/${item.id}`);
    }

    if (props.isWorld === false && isAttraction(item)) {
      router.push(`/dashboard/${item.worldId}/${item.id}`);
    }
  }
  
  return (
      <Listbox
        aria-label="Actions"
        classNames={{
          base: 'bg-white h-full w-full shadow-md',
          list: 'max-h-[356px] overflow-y-scroll no-scrollbar',
        }}
      >
        {((props.items)).map((item) => (
          <ListboxItem
            key={item.id}
            classNames={{ title: 'text-xl text-gray-500 font-semibold' }}
            value={item.id}
            onPress={() => listboxItemPressed(item)}
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>
  );
};
