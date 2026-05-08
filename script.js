const utilities = [
  { name: 'PDF Merge & Split', desc: 'Combine or split PDF files quickly in browser.', tags: ['PDF', 'Document'] },
  { name: 'Image Background Remover', desc: 'Remove backgrounds with one click.', tags: ['Image', 'Design', 'AI'] },
  { name: 'AI Text Summarizer', desc: 'Convert long content into short summaries.', tags: ['AI', 'Text', 'Productivity'] },
  { name: 'JSON Formatter', desc: 'Beautify, validate, and minify JSON instantly.', tags: ['Developer', 'JSON'] },
  { name: 'URL Shortener', desc: 'Create compact links and track click stats.', tags: ['Marketing', 'Link'] },
  { name: 'Password Generator', desc: 'Generate secure random passwords safely.', tags: ['Security', 'Auth'] },
  { name: 'QR Code Generator', desc: 'Build QR codes for links, text, and contact cards.', tags: ['Business', 'Code'] },
  { name: 'Unit Converter', desc: 'Convert between length, speed, mass, and more.', tags: ['Math', 'Education'] },
  { name: 'Color Palette Extractor', desc: 'Extract color palettes from uploaded images.', tags: ['Design', 'Image'] },
  { name: 'Video to GIF Converter', desc: 'Turn short videos into optimized GIFs.', tags: ['Media', 'Social'] }
];

const grid = document.getElementById('utilityGrid');
const search = document.getElementById('search');

function render(items) {
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = '<p>No utilities match your search.</p>';
    return;
  }

  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
    `;

    grid.appendChild(card);
  });
}

search.addEventListener('input', (e) => {
  const query = e.target.value.trim().toLowerCase();
  const filtered = utilities.filter((u) => {
    return (
      u.name.toLowerCase().includes(query) ||
      u.desc.toLowerCase().includes(query) ||
      u.tags.join(' ').toLowerCase().includes(query)
    );
  });

  render(filtered);
});

render(utilities);
