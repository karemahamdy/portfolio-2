# Modern Portfolio with Next.js

A modern, responsive portfolio built with Next.js, Tailwind CSS, and TypeScript.

## How to Add New Content Items

To add new content items to your portfolio, follow these steps:

### 1. Edit the `app/data.ts` file

Add a new content item object to the `contentItems` array in the `app/data.ts` file. Each content item should follow this structure:

```typescript
{
  slug: 'your-content-slug',  // URL-friendly identifier
  title: 'Your Content Title',
  date: 'Month Day, Year',    // e.g., "January 15, 2025"
  year: 'YYYY',               // e.g., "2025" (used in sorting)
  type: 'blog' | 'video' | 'repo',  // Type of content
  externalUrl: 'https://example.com/your-content',  // External link to the content
  readTime: 'X min read',     // e.g., "5 min read" (optional)
  excerpt: 'A brief summary of your content that appears in the listing.',
  author: {
    name: 'Your Name',
    avatar: '/path/to/avatar.jpg',  // Optional: path to author avatar image
  },
  tags: ['Tag1', 'Tag2', 'Tag3'],   // Optional: categories or tags for the content
  coverImage: '/path/to/cover.jpg', // Optional: path to cover image
}
```

### 2. Content Types

The portfolio supports three types of content:

- `blog`: Blog posts or articles you've written
- `video`: Video content you've created
- `repo`: GitHub repositories or code projects

Each type will be displayed with a different icon and styling.

### 3. External Links

All content items link to external resources. Make sure to provide valid URLs for the `externalUrl` field.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Lucide Icons
