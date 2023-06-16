import { useEffect, useState } from 'react';
import '../styles/quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
          headers: {
            'x-api-key': 'M+pmkG43hsDKNEUqaeWn8A==MKEcax91ts4AUkCR',
          },
        });
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setQuote, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="quote">
      {quote.map((item) => (
        <p key={item.author}>{`"${item.quote}"`}</p>
      ))}
    </div>
  );
};

export default Quotes;
