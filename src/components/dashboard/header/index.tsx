import {
  Alert,
  Box,
  Divider,
  Group,
  Loader,
  Skeleton,
  Stack,
  Title,
} from '@mantine/core';
import type { DefaultMantineColor } from '@mantine/core';
import Head from 'next/head';
import DashboardHeaderBreadcrumbs, { BreadcrumbLink } from './breadcrumbs';

type Props = {
  title: string | undefined;
  error?: string | null;
  color?: DefaultMantineColor;
  loading?: boolean;
  actions?: React.ReactNode;
  links?: BreadcrumbLink[];
};

const DashboardHeader = ({
  title,
  error,
  color = 'blue',
  loading,
  actions,
  links,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Loading...'} | Firefly Watch</title>
      </Head>
      <Stack spacing='xs' mb='xs'>
        <Group position='apart'>
          <Group spacing='xs'>
            {!title && !error ? (
              <Skeleton width={200} height={40} />
            ) : (
              <Title>{title}</Title>
            )}
            {loading && <Loader color={color} />}
            {error && (
              <Alert color='red' variant='filled'>
                {error}
              </Alert>
            )}
          </Group>
          <Group spacing='xs'>{actions}</Group>
        </Group>
        <Divider />
        <DashboardHeaderBreadcrumbs links={links} color={color} />
        <Divider />
      </Stack>
    </>
  );
};

export default DashboardHeader;
