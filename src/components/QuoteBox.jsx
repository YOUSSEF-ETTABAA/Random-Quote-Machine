import { useState } from "react";
import Quotes from "../data/Quotes";
import { Card, Button } from "react-bootstrap";

export default function QuoteBox() {
  const [quote, setQuote] = useState(Quotes[0]);
  let previousValue = null;
  const getNewQuote = () => {
    let randomInt;
    do {
      randomInt = Math.floor(Math.random() * Quotes.length);
    } while (randomInt === previousValue);
    previousValue = randomInt;
    setQuote(Quotes[randomInt]);
  };
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <Card
      id="quote-box"
      className="text-center"
      style={{ width: "18rem", margin: "20px auto" }}
    >
      <Card.Body>
        <Card.Title id="author">{quote.author}</Card.Title>
        <Card.Text id="text">
          {`"${quote.text}"`}
        </Card.Text>

        <div className="d-flex justify-content-between">
          <Button
            variant="primary"
            id="new-quote"
            className="btn-sm"
            onClick={getNewQuote}
          >
            New Quote
          </Button>

          <a
            href={tweetURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-sm"
            id="tweet-quote"
          >
            Tweet Quote
          </a>
        </div>
      </Card.Body>
    </Card>
  );
}
