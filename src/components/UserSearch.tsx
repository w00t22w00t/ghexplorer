import React, { FC } from 'react';

import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { MyButton, MyTextField } from '../muiCustom';

interface UserSearchProps {
  search: string;
  fetch: (event: React.FormEvent<HTMLFormElement>) => void;
  searchHandler: (word: React.SetStateAction<string>) => void;
}

const UserSearch: FC<UserSearchProps> = ({ fetch, search, searchHandler }) => {
  return (
    <div>
      <Box
        component="form"
        onSubmit={fetch}
        sx={{
          marginTop: { xs: '12px', sm: '20px' },
          padding: { xs: '12px 20px', sm: '20px 40px' },
          display: 'flex',
          gap: '10px',
          width: '100%',
          background: '#FFFFFF',
          borderRadius: '24px',
        }}
      >
        <SearchIcon
          sx={{
            width: '40px',
            height: '40px',
            alignSelf: 'center',
          }}
        />
        <MyTextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchHandler(e.target.value)}
          value={search}
          id="outlined-basic"
          label="User name"
          variant="outlined"
          fullWidth={true}
        />
        <MyButton variant="contained" type="submit">
          Search
        </MyButton>
      </Box>
    </div>
  );
};

export default UserSearch;
