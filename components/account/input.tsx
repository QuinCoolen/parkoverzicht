import { Divider, Input } from '@nextui-org/react';

import { AccountInputProps } from '../../types/account';

export const AccountInput = (props: AccountInputProps) => {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        {props.icon}
        <Input
          type={props.type}
          {...props.register(props.type)}
          className="w-fit"
          classNames={{ inputWrapper: ['border-none shadow-none'] }}
          color="primary"
          defaultValue={props.value}
          isReadOnly={props.isReadOnly}
          label={props.label}
          variant="underlined"
        />
      </div>
      <Divider />
    </>
  );
};
