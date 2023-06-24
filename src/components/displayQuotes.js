import { useEffect, useState } from 'react';
import '../styles/quotes.css';
import { v4 as uuidv4 } from 'uuid';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=success',
          {
            headers: {
              'x-api-key': 'M+pmkG43hsDKNEUqaeWn8A==MKEcax91ts4AUkCR',
            },
          },
        );
        if (res.ok) {
          const data = await res.json();
          setQuote(data);
        } else {
          throw new Error('Error');
        }
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
        <div key={uuidv4()}>
          <p>{item.quote}</p>
          <p className="author">{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
