import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments'

const QuoteDetail = () => {

    const param = useParams();
    return (
    <section>
        <h1>Quote Detail Page</h1>
        <h3>{`Quote ID: ${param.quoteId}`}</h3>
        <Route path='/quotes/:quoteId/comments'>
            <Comments />
        </Route>
    </section>
    );
};

export default QuoteDetail;