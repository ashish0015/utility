'use client';

import { useMemo, useState } from 'react';

const utilities = [
  {
    name: 'Notion AI',
    description: 'AI-powered writing, notes, and workspace automation.',
    tags: ['AI', 'Productivity'],
  },
  {
    name: 'Canva Magic Studio',
    description: 'Quickly create graphics, videos, and social content with AI tools.',
    tags: ['Design', 'Marketing'],
  },
  {
    name: 'TinyWow',
    description: 'Free browser-based PDF and file conversion utilities.',
    tags: ['PDF', 'File Tools'],
  },
  {
    name: 'Photopea',
    description: 'Advanced online photo editor compatible with PSD files.',
    tags: ['Image', 'Editor'],
  },
  {
    name: 'Remove.bg',
    description: 'Automatically remove image backgrounds in seconds.',
    tags: ['Image', 'AI'],
  },
  {
    name: 'JSON Formatter',
    description: 'Validate and prettify JSON data for debugging APIs.',
    tags: ['Developer', 'API'],
  },
  {
    name: 'Regex101',
    description: 'Test and debug regular expressions with detailed explanations.',
    tags: ['Developer', 'Testing'],
  },
  {
    name: 'Squoosh',
    description: 'Compress and optimize images directly in your browser.',
    tags: ['Image', 'Performance'],
  },
];

export default function HomePage() {
  const [query, setQuery] = useState('');

  const filteredUtilities = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return utilities;
    }

    return utilities.filter((tool) => {
      const searchable = `${tool.name} ${tool.description} ${tool.tags.join(' ')}`.toLowerCase();
      return searchable.includes(normalized);
    });
  }, [query]);

  return (
    <main className="container">
      <header className="hero">
        <h1>TrendTools Hub</h1>
        <p>Discover trending utilities used by creators, students, and developers.</p>
      </header>

      <section className="searchSection" aria-label="Search utilities">
        <input
          type="search"
          placeholder="Search by name, description, or tags..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </section>

      <section className="grid" aria-live="polite">
        {filteredUtilities.length > 0 ? (
          filteredUtilities.map((tool) => (
            <article className="card" key={tool.name}>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              <div className="tags">
                {tool.tags.map((tag) => (
                  <span className="tag" key={`${tool.name}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))
        ) : (
          <p className="emptyState">No utilities found. Try a different keyword.</p>
        )}
      </section>
    </main>
  );
}
