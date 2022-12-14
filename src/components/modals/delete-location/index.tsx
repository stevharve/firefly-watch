import { Button, Modal, Stack, Text, TextInput } from '@mantine/core';
import { useState } from 'react';

type Props = {
  opened: boolean;
  confirmationText: string;
  onClose: () => void;
  onConfirm: () => void;
};

const ModalDeleteLocation = ({
  opened,
  confirmationText,
  onClose,
  onConfirm,
}: Props) => {
  const [confirmation, setConfirmation] = useState('');

  const handleConfirm = () => {
    onConfirm();
    setConfirmation('');
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title='Delete Location'
      size='sm'
      centered
    >
      <Stack spacing='xs'>
        <Text size='sm'>
          Are you sure you want to delete your location? Current Observations
          will persist.
        </Text>
        <TextInput
          label={
            <Text span>
              Type{' '}
              <Text weight={700} span color='red'>
                {confirmationText}
              </Text>{' '}
              to confirm
            </Text>
          }
          value={confirmation}
          onChange={(event) => setConfirmation(event.currentTarget.value)}
          required
          placeholder='Type to confirm'
          data-autofocus
        />
        <Button variant='default' onClick={onClose}>
          Keep Location
        </Button>
        <Button
          color='red'
          onClick={handleConfirm}
          disabled={confirmation !== confirmationText}
        >
          Delete Location
        </Button>
      </Stack>
    </Modal>
  );
};

export default ModalDeleteLocation;
