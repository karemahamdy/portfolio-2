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
    role: 'Cloud Secrets',
    company: 'Frontend Developer',
    period: 'Dec \'24 – Present',
    companyUrl: 'https://www.linkedin.com/company/cloud-secrets/posts/?feedView=all',
    // logoUrl: '/images/ITI.jpg',
    visible: true
  },
  {
    role: 'Barqify',
        company: 'Frontend Developer',

    period: 'Jun \'25 – Aug \'25',
    // companyUrl: 'https://gamifiersa.com/about.html',
    // logoUrl: '/images/GamifierSA.jpg',
    visible: true
  },
    {
    role: 'Quodwa',
    company: 'Programming Instructor',
    period: 'Feb \'24 – Jul \'24',
    // companyUrl: 'https://depi.eg',/
    // logoUrl: '/images/DEPI.jpg',
    visible: true
  },
  {
    role: 'BLTZO',
    company: 'Frontend Developer',
    period: 'Nov \'23 – Jun \'24',
    companyUrl: 'https://www.linkedin.com/company/bltzo/posts/?feedView=all',
    // logoUrl: '/images/Mutqana.jpg',
    visible: true
  },  
];
