export default function Footer() {
  const footerText = [
    { text: 'Powered By', color: '#FFFFFF' },
    { text: 'ReactJS', color: '#80BDE3' },
    { text: 'Redux Toolkit', color: '#BD80E3' },
    { text: 'Redux Toolkit Query', color: '#FFFFFF' },
    { text: 'Bootstrap CSS', color: '#BD80E3' },
    { text: 'OMDB API', color: '#E3BD80' },
    { text: 'Netlify', color: '#BDE380' },
  ];

  return (
    <div className="footer">
      <div className="footer-text">
        {footerText.map((t, i) => (
          <span style={{ color: t.color }}>{t.text}</span>
        ))}
      </div>
    </div>
  );
}
