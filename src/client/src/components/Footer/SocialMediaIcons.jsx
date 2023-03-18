import React from 'react';
import faGithub from '../../assets/icons/github.svg';
import faTwitter from '../../assets/icons/twitter.svg';
import faLinkedin from '../../assets/icons/linkedin.svg';

const SocialMediaIcons = ({color}) => {
  return (
    <div className={`space-x-4 flex justify-center items-center text-${color}`}>
      <a target="_blank" rel="noreferrer" href="https://www.github.com/mathiusjohnson">
        <img className="" src={faGithub} alt="github icon"></img>
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/mathius_johnson"  >
        <img className="" src={faTwitter} alt="twitter icon"></img>

      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mathius-johnson/">
        <img src={faLinkedin} alt="linkedin icon"></img>
      </a>
    </div>
  );
};

export default SocialMediaIcons;