'use client';

import { useEffect, useState } from 'react';

export default function CatFactWidget() {
  const [fact, setFact] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const res = await fetch('https://catfact.ninja/fact', {
          cache: 'no-store',
        });

        if (!res.ok) throw new Error('Failed to fetch cat fact');

        const data = await res.json();
        setFact(data.fact);
      } catch (err) {
        setError('Could not load a cat fact.');
      }
    };

    fetchCatFact();
  }, []);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="mt-10 bg-blue-50 p-6 rounded shadow text-blue-900 text-center max-w-xl mx-auto">
      <h3 className="text-lg font-semibold mb-2">Random Cat Fact</h3>
      <p>{fact || 'Loading cat fact...'}</p>
    </div>
  );
}
