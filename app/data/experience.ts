export interface Job {
  role: string;
  company: string;
  period: string;
  companyUrl?: string;
  logoUrl?: string;
  visible: boolean;
}

export const jobs: Job[] = [
  {
    role: 'External Instructor',
    company: 'Information Technology Institute - ITI',
    period: 'Jul \'24 – Present',
    companyUrl: 'https://iti.gov.eg/iti/home',
    logoUrl: '/images/ITI.jpg',
    visible: true
  },
  {
    role: 'Software Instructor',
    company: 'Digital Egypt Pioneers Initiative - DEPI ',
    period: 'Jul \'24 – Present',
    companyUrl: 'https://depi.eg',
    logoUrl: '/images/DEPI.jpg',
    visible: true
  },
  {
    role: 'Frontend Developer',
    company: 'GamifierSA',
    period: 'May \'24 – Sep \'24',
    companyUrl: 'https://gamifiersa.com/about.html',
    logoUrl: '/images/GamifierSA.jpg',
    visible: true
  },
  {
    role: 'Software Engineer',
    company: 'Mutqana ',
    period: 'Jul \'22 – Sep \'23',
    companyUrl: 'https://mutqana.com',
    logoUrl: '/images/Mutqana.jpg',
    visible: true
  },
];
