import * as React from 'react';
import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import { Box } from '@mui/material';

type IButtonProps = {
    text?: string;
};
  

export default function UiButton({
  children,
  ...props
}: PropsWithChildren<ButtonProps & IButtonProps>) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <Stack direction="row" spacing={2}>
        <Button {...props}>
          <> {children} </>
          <> {props.text} </>
        </Button>
      </Stack>
    </Box>
  );
}
