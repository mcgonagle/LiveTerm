// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening GitHub repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my GitHub readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const highschool = async (args: string[]): Promise<string> => {
  window.open(`https://en.wikipedia.org/wiki/Winchester_High_School_(Massachusetts)`);

  return 'Opening highschool...';
};

export const college = async (args: string[]): Promise<string> => {
  window.open(`https://photos.app.goo.gl/Zn9EyzYG79znJxsv8`);

  return 'Opening college...';
};

export const teach = async (args: string[]): Promise<string> => {
  window.open(`https://www.bfit.edu`);

  return 'Opening teach...';
};

export const gitlab = async (args: string[]): Promise<string> => {
  window.open(`https://gitlab.com/${config.social.gitlab}/`);

  return 'Opening gitlab...';
};

export const kids = async (args: string[]): Promise<string> => {
  window.open(`https://photos.app.goo.gl/HmPq9WhgXJpeKMfg9`);

  return 'Opening kids...';
};

export const anderson = async (args: string[]): Promise<string> => {
  window.open(`https://photos.app.goo.gl/8CgDebhXueEEez2g7`);

  return 'Opening Anderson...';
};

export const lilly = async (args: string[]): Promise<string> => {
  window.open(`https://photos.app.goo.gl/dADWojDADJNVxQxc9`);

  return 'Opening Lilly...';
};

export const mcgoctocat = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/mcgonagle/McGoctocat`);

  return 'Opening McGoctocat...';
};

export const greene = async (args: string[]): Promise<string> => {
  window.open(`https://twitter.com/mcgonagle/status/1041192434816962560/photo/1`);

  return 'Major General Nathanael Greene...';
};

export const grampy = async (args: string[]): Promise<string> => {
  window.open(`https://photos.app.goo.gl/Zwp4wMiwYKPRQ97w9`);

  return 'Opening Grampy...';
};

export const crests = async (args: string[]): Promise<string> => {
  window.open(`https://paper.dropbox.com/doc/Childrens-Family-Crests--Bk8_G~7mcyjPOpGZK_hDNSS5AQ-KV1zHQstP3yhMGqQLLJZs`);

  return 'Opening Grampy...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ********   ------------ ------------   --------   ----    ----    ------    ------------ ----         ------------ 
 ----------  ************ ************  **********  *****   ****   ********   ************ ****         ************ 
************ ---          ----         ----    ---- ------  ----  ----------  ----         ----         ----         
---  --  --- ***          ****  ****** ***      *** ************ ****    **** ****  ****** ****         ************ 
***  **  *** ---          ----  ------ ---      --- ------------ ------------ ----  ------ ----         ------------ 
---  --  --- ***          ****    **** ****    **** ****  ****** ************ ****    **** ************ ****         
***  **  *** ------------ ------------  ----------  ----   ----- ----    ---- ------------ ------------ ------------ 
---      --- ************ ************   ********   ****    **** ****    **** ************ ************ ************ 
                                

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the GitHub repository.
`;
};
