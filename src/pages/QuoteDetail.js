import { Route, useParams, useHistory } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Keng", text: "Learning React is fun!" },
  { id: "q2", author: "WK", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const param = useParams();
  const history = useHistory();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  const addCommentHandler = () => {
    history.push(`/quotes/${quote.id}/comments`);
  };

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}`} exact>
        <div>
          <button className="centered btn" onClick={addCommentHandler}>
            Load Comments
          </button>
        </div>
      </Route>
      <Route path={`/quotes/${quote.id}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
