import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Keng', text: 'Learning React is fun!'},
    {id: 'q2', author: 'WK', text: 'Learning React is great!'},
];

const QuoteDetail = () => {

    const param = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === param.quoteId);

    return (
    <section>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path={`/quotes/${quote.id}/comments`}>
            <Comments />
        </Route>
    </section>
    );
};

export default QuoteDetail;