
import '@mantine/core/styles.css';
import { BooksTable } from './table';
import { useState, useEffect } from 'react';
import { MantineProvider, TextInput, InputWrapper, Image, Stack, Group, Text} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import booksData from './booksData.json'; 
import './App.css'

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);

 
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = booksData.filter((book) =>
      book.titleTypeAuthor.toLowerCase().includes(lowerCaseQuery) 
    );
    setFilteredBooks(filtered);
  }, [searchQuery]); 
  return (
    <MantineProvider>
      <div style={{ margin: '20px 100px 20px 100px'}}>
      <Stack style={{margin: "20px 0 50px 0", alignItems: "center"}}>
      <Group>
      <Image src={`/images/search.jpg`} w={120}></Image>
      <Text
      size="60px"
      fw={900}
      variant="gradient"
      gradient={{ from: 'purple', to: '#d986dd62', deg: 200 }}
    >
      BookSearch
    </Text></Group>
        <InputWrapper w="800">
          <TextInput 
            placeholder="Enter title or author"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
            rightSection={<IconSearch size={16} />}
          />
        </InputWrapper>
      </Stack>
      
        <BooksTable books={filteredBooks} /> 
      </div>
    </MantineProvider>
  );
}
