// Site-wide settings. Edit these values instead of hunting through pages.

export const site = {
  domain: 'https://amsc.sa',
  email: 'info@amsc.sa',
  // TODO: demo number from the old site — replace with the verified one.
  phone: '+966 55 000 0000',
  phoneHref: '+966550000000',
  // TODO: replace with the exact office location once verified.
  mapQuery: 'Jeddah, Saudi Arabia',
  founded: 2020,
};

// Web3Forms access key (free plan). Create it at https://web3forms.com using
// info@amsc.sa — submissions are emailed to whichever address created the key.
// The key is public by design; it only lets people send mail to that inbox.
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

// Add verified social accounts here; empty entries are hidden.
export const socials: { name: 'linkedin' | 'x' | 'instagram' | 'youtube' | 'facebook'; url: string }[] = [
  // { name: 'linkedin', url: 'https://www.linkedin.com/company/...' },
];
