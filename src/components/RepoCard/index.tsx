import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
} from './styles';

interface IProps {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  starts: number;
  forks: number;
}

const RepoCard: React.FC<IProps> = ({
  username,
  reponame,
  description,
  language,
  starts,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </Topside>

      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>

          <li>
            <StarIcon />
            <span>{starts}</span>
          </li>

          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
