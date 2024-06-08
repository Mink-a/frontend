import { Card } from '@components/common';
import { Box, SimpleGrid, Title } from '@mantine/core';

export function DashboardPage() {
  return (
    <Box>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          { maxWidth: 'md', cols: 2, spacing: 'sm' },
          { maxWidth: 'xl', cols: 4, spacing: 'sm' },
        ]}
      >
        <Card bg="gray.0">
          <Title>4</Title>
          <Title fw="bold" size="lg">
            Users
          </Title>
        </Card>
        <Card bg="green.5">
          <Title>5</Title>
          <Title fw="bold" size="lg">
            Orders
          </Title>
        </Card>
        <Card bg="red.5">
          <Title>2</Title>
          <Title fw="bold" size="lg">
            Preorders
          </Title>
        </Card>
        <Card bg="blue.5">
          <Title>6</Title>
          <Title fw="bold" size="lg">
            Warehouse
          </Title>
        </Card>
      </SimpleGrid>
      <Card>
        <Title align="center" order={5}>
          Comming Soon
        </Title>
      </Card>
    </Box>
  );
}
