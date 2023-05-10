import React, { useEffect, useMemo, useState } from 'react';
import UserCard from './components/UserCard';
import { IUser } from './types';

import './styles/App.scss'
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { MyButton, MyTextField } from './muiCustom'
import { joinedDate } from './formatter';

// bg black theme #141d2f
// bg white theme #f6f8ff


function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [user, setUser] = useState<IUser | undefined>();
  


  function fetchUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (search.length === 0)
      return false;
    
    
    fetch(`https://api.github.com/users/${search}`)
      .then(res => res.json())
      .then(data => setUser({
        pfp: data.avatar_url,
        name: data.name,
        joinedAt: joinedDate(data.created_at),
        username: data.login,
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        links: {
          location: data.location,
          twitter: data.twitter_username,
          company: data.company,
          blog: data.blog,
        },
      }))
    
    setLoaded(true)
  }

  // function isUserType(user: IUser | undefined): user is IUser {
  //   return (user as IUser).name !== undefined;
  // }

  // const isUser = useMemo(() => isUserType(user), [user])

  

  return (
    <div className="App">
      <main className='main'>
        <div className="container">
          <div className="App__box">
            <Box
              component='form'
              onSubmit={fetchUser}
              sx={{
              padding: {xs: '12px 20px', sm: '20px 40px'},
              display: 'flex',
              gap: '10px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '24px'
            }}>
              <SearchIcon sx={{
                width: '40px',
                height: '40px',
                alignSelf: 'center'
              }} />
              <MyTextField
                onChange={(e: any) => setSearch(e.target.value)}
                value={search}
                id="outlined-basic"
                label="User name"
                variant="outlined"
                fullWidth={true}
              />
              <MyButton variant="contained" type="submit">Search</MyButton>
            </Box>

            {/* {loaded && isUser && <UserCard user={user} />} */}
            
            {loaded &&  <UserCard user={user as IUser} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// TODO
// isUserType ?
// деструкторизация + редакс тулкит на поиск, еслинт, притиер, tsconfig


// advanced
// черно белая тема