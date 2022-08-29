import { Alert, Divider, Group, Loader, Stack, Title } from '@mantine/core';
import type { DefaultMantineColor } from '@mantine/core';

type Props = {
  title: string;
  error?: string | null;
  color?: DefaultMantineColor;
  loading?: boolean;
  action?: React.ReactNode;
};

const DashboardHeader = ({
  title,
  error,
  color = 'blue',
  loading,
  action,
}: Props) => {
  return (
    <Stack spacing='xs' mb='xs'>
      <Group position='apart'>
        <Group spacing='xs'>
          <Title>{title}</Title>
          {loading && <Loader color={color} />}
          {error && (
            <Alert color='red' variant='filled'>
              {error}
            </Alert>
          )}
        </Group>
        {action}
      </Group>
      <Divider />
    </Stack>
  );
};

export default DashboardHeader;
