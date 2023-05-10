import React, { FC } from 'react';
import { IUser } from '../types';
import './../styles/UserCard.scss';


import Avatar from '@mui/material/Avatar';


interface UserProps {
  user: IUser | undefined
}

const UserCard: FC<UserProps> = ({ user }) => {
  return (
    <div className='user-card'>
      <div className="user-card__img-block">
        <Avatar
          alt={user?.name}
          src={user?.pfp}
          sx={{
            width: { xs: '80px', sm: '160px' },
            height: { xs: '80px', sm: '160px' }
          }}
        />
      </div>
      <div className="user-card__info">
        <h2 className='user-card__name'>{user?.name}</h2>
        <a href={`https://github.com/${user?.username}`} className='user-card__link'>@{user?.username}</a>
        <p className='user-card__date'>{ user?.joinedAt }</p>

        <ul className="user-card__details">
          <li>
            <span className='user-card__li-title'>Repos</span>
            <span className='user-card__li-amount'>{ user?.repos }</span>
          </li>
          <li>
            <span className='user-card__li-title'>Followers</span>
            <span className='user-card__li-amount'>{ user?.followers }</span>
          </li>
          <li>
            <span className='user-card__li-title'>Following</span>
            <span className='user-card__li-amount'>{ user?.following }</span>
          </li>
        </ul> 
      </div>
      
    </div>
  );
};

export default UserCard;
