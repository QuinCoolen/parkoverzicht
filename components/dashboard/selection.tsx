'use client';

import { Listbox, ListboxItem } from '@nextui-org/react';
import { DashboardProps } from '../../types/dashboard';
import { useRouter } from 'next/navigation';

export const Selection = (props: DashboardProps) => {
  const router = useRouter()

  const listboxItemPressed = (id: number) => {
    if (props.isWorld === true) {
      router.push(`/dashboard/${id}`);
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
            onPress={() => listboxItemPressed(item.id)}
          >
            {item.name}
          </ListboxItem>
        ))}
      </Listbox>
  );
};
