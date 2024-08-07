import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: "Phénomène Météorologique", slug: "premier-article", description: "Ceci est la description du premier article." },
  { id: 2, title: "Monstre Mythologique", slug: "deuxieme-article", description: "Ceci est la description du deuxième article." },
  // Ajoutez d'autres articles ici
];

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    // Remettre l'animation à l'état initial après 5 secondes
    setTimeout(() => setIsAnimating(false), 5000);
  };

  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("data:image/jpeg;base64,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")', // Remplacez par l'URL de votre image
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 
          className={`text-4xl font-bold mb-8 ${isAnimating ? 'animate-rainbow' : ''}`}
          onClick={handleClick}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'color 1s ease',
          }}
        >
          Mon Blog Markdown
        </h1>
        <ul style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{ position: 'relative' }}>
              <Link to={`/post/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
              <div style={{ display: 'none', position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ccc', width: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} className="post-description">
                {post.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @keyframes rainbow {
          0% { color: red; }
          14% { color: orange; }
          28% { color: yellow; }
          42% { color: green; }
          57% { color: blue; }
          71% { color: indigo; }
          85% { color: violet; }
          100% { color: red; }
        }
        
        .animate-rainbow {
          animation: rainbow 5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;