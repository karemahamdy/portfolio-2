const https = require('https');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(process.cwd(), 'public', 'images', 'skills');

// Create the directory if it doesn't exist
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

const ICONS = {
  'html': 'https://cdn.simpleicons.org/html5/E34F26',
  'css': 'https://cdn.simpleicons.org/css3/1572B6',
  'sass': 'https://cdn.simpleicons.org/sass/CC6699',
  'javascript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'typescript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'csharp': 'https://cdn.simpleicons.org/dot-net/512BD4',
  'python': 'https://cdn.simpleicons.org/python/3776AB',
  'react': 'https://cdn.simpleicons.org/react/61DAFB',
  'nextjs': 'https://cdn.simpleicons.org/nextdotjs/000000',
  'angular': 'https://cdn.simpleicons.org/angular/DD0031',
  'bootstrap': 'https://cdn.simpleicons.org/bootstrap/7952B3',
  'tailwind': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'redux': 'https://cdn.simpleicons.org/redux/764ABC',
  'materialui': 'https://cdn.simpleicons.org/mui/007FFF',
  'nodejs': 'https://cdn.simpleicons.org/nodedotjs/339933',
  'express': 'https://cdn.simpleicons.org/express/000000',
  'dotnet': 'https://cdn.simpleicons.org/dotnet/512BD4',
  'mongodb': 'https://cdn.simpleicons.org/mongodb/47A248',
  'postgresql': 'https://cdn.simpleicons.org/postgresql/4169E1',
  'redis': 'https://cdn.simpleicons.org/redis/DC382D',
  'git': 'https://cdn.simpleicons.org/git/F05032',
  'docker': 'https://cdn.simpleicons.org/docker/2496ED',
  'azure': 'https://cdn.simpleicons.org/microsoftazure/0078D4',
  'vercel': 'https://cdn.simpleicons.org/vercel/000000',
  'netlify': 'https://cdn.simpleicons.org/netlify/00C7B7',
  'github': 'https://cdn.simpleicons.org/github/181717',
  'githubactions': 'https://cdn.simpleicons.org/githubactions/2088FF',
  'jest': 'https://cdn.simpleicons.org/jest/C21325',
  'postman': 'https://cdn.simpleicons.org/postman/FF6C37',
  'graphql': 'https://cdn.simpleicons.org/graphql/E10098',
  'prisma': 'https://cdn.simpleicons.org/prisma/2D3748',
  'sqlserver': 'https://cdn.simpleicons.org/microsoftsqlserver/CC2927',
  'xunit': 'https://cdn.simpleicons.org/dotnet/512BD4',
  'oauth': 'https://cdn.simpleicons.org/auth0/EB5424',
  'jwt': 'https://cdn.simpleicons.org/jsonwebtokens/000000',
  'entityframework': 'https://cdn.simpleicons.org/dotnet/512BD4'
};

const downloadIcon = (name, url) => {
  const filePath = path.join(ICONS_DIR, `${name}.svg`);

  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${name}.svg: Status ${response.statusCode}`);
      return;
    }

    const file = fs.createWriteStream(filePath);
    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${name}.svg`);
    });
  }).on('error', (err) => {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    console.error(`Error downloading ${name}.svg:`, err.message);
  });
};

// First, clean the directory
fs.readdirSync(ICONS_DIR).forEach(file => {
  fs.unlinkSync(path.join(ICONS_DIR, file));
});

// Then download new icons
Object.entries(ICONS).forEach(([name, url]) => {
  downloadIcon(name, url);
});
