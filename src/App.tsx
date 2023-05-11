import React, { useEffect, useMemo, useState } from 'react';
import UserCard from './components/UserCard';
import { IUser } from './types';

import './styles/App.scss';

import { joinedDate } from './formatter';
import UserSearch from './components/UserSearch';
import axios from 'axios';

function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [user, setUser] = useState<IUser | undefined>();

  type fetchType = (event: React.FormEvent<HTMLFormElement>) => void;

  const fetchUser: fetchType = async (event) => {
    event.preventDefault();

    console.log(isUser);

    if (search.length === 0) return false;

    try {
      const response = await axios.get(`https://api.github.com/users/${search}`);
      const data = response.data;

      setUser({
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
      });
    } catch (event) {
      alert(event);
    }

    setLoaded(true);
  };

  type HandlerType = (word: React.SetStateAction<string>) => void;

  const searchHandler: HandlerType = (word) => {
    setSearch(word);
  };

  function isUserType(user: IUser | undefined): user is IUser {
    return (user as IUser)?.name !== undefined;
  }

  const isUser = useMemo(() => isUserType(user), [user]);

  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <div className="App__box">
            <UserSearch fetch={fetchUser} search={search} searchHandler={searchHandler} />

            {loaded && isUser && <UserCard user={user} />}

            {/* {loaded && <UserCard user={user as IUser} />} */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// TODO
// isUserType ?
// loading states ?

// advanced
// черно белая тема
