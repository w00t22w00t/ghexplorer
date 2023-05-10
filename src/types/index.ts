export interface IUser {
  pfp: string;
  name: string;
  joinedAt: string;
  username: string;
  bio: string;
  repos: string;
  followers: string;
  following: string;
  links: {
    location: string;
    twitter: string;
    blog: string;
    company: string;
  };
}
