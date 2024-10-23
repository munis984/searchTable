import { DataTable } from 'mantine-datatable';
import { Image, Text, Group, Stack, Badge } from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react'; 
import './App.css';

interface Book {
  titleTypeAuthor: string;
  categoryEditionYear: string;
  spaceCopies: string;
  id: number;
}

interface BooksTableProps {
  books: Book[]; 
}

export function BooksTable({ books }: BooksTableProps) {
  return (
        <DataTable 
          styles={{
            root: () => ({
               borderRadius: '8px', 
               overflow: 'hidden', 
               border: '2px solid #d986dd62',
            }),
            table: {
              backgroundColor: 'hsla(266, 100%, 85%, 0.377)',
            },
            header: {
              backgroundColor: 'hsla(266, 100%, 85%, 0.377)',
              padding: '10px',
            },
          }}
          columns={[
            {
              accessor: 'titleTypeAuthor',
              title: 'Title, Type and Author',
              render: (record: Book) => (
                <Group>
                  <Image
                    src={`/images/${record.id}.jpg`}
                    alt={record.titleTypeAuthor.split(',')[0]}
                    width={60}
                    height={80}
                    fit="cover"
                    radius="sm"
                  />
                  <Stack style={{rowGap: '0px'}}>
                    <Text size="lg">
                      {record.titleTypeAuthor.split(',')[0]}
                    </Text>
                    <Text size="sm" color="dimmed">
                      {record.titleTypeAuthor.split(',')[1]} by {record.titleTypeAuthor.split(',')[2]}
                    </Text>
                  </Stack>
                </Group>
              ),
            },
            {
              accessor: 'categoryEditionYear',
              title: 'Category, Edition and Year',
              render: (record: Book) => (
                <Stack style={{rowGap: '0px'}}>
                  <Text size="lg">
                    {record.categoryEditionYear.split(',')[0]}
                  </Text>
                  <Text size="sm" color="dimmed">
                    {record.categoryEditionYear.split(',')[1]}, {record.categoryEditionYear.split(',')[2]}
                  </Text>
                </Stack>
              ),
            },
            {
              accessor: 'spaceCopies',
              title: 'American Space and Copies',
              render: (record: Book) => (
                <Stack style={{rowGap: '5px'}}>
                  <Text size="lg">{record.spaceCopies.split('\n')[0]}</Text>
                  <Badge color="purple" variant="light">
                    {record.spaceCopies.split('\n')[1]} copies
                  </Badge>
                </Stack>
              ),
            },
            {
              accessor: 'actions',
              title: 'Actions',
              render: () => (
                <Group style={{columnGap: '5px'}}>
                  <IconEdit size={22} />
                  <IconTrash size={22} />
                </Group>
              ),
            },
          ]}
          records={books} 
        />
  );
}
