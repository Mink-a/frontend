import { Button, Flex, Title } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';

type DetailPageTitleProps = {
  pageUrl: string;
  title: string;
};

export function DetailPageTitle({ title, pageUrl }: DetailPageTitleProps) {
  return (
    <Flex gap="md" align="center" pb="md">
      <Button
        component={Link}
        to={`${DASHBOARD_ROUTE}/${pageUrl}`}
        variant="subtle"
        leftIcon={<IconArrowLeft />}
      >
        Back
      </Button>
      <Title order={5} c="primary">
        {title}
      </Title>
    </Flex>
  );
}
