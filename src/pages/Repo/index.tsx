import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrump,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrump>
        <RepoIcon />
        <Link className="username" to="/ridneto">
          ridineu
        </Link>

        <span>/</span>

        <Link className="reponame" to="ridneto/test">
          hmm
        </Link>
      </Breadcrump>

      <p>Contains all of my papadas</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>Star</span>
        </li>
        <li>
          <ForkIcon />
          <b>2</b>
          <span>Forks</span>
        </li>
      </Stats>

      <LinkButton href="papapda">
        <GithubIcon />
        <span>View on github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
