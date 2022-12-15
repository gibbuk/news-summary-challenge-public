import PropTypes from 'prop-types';
import Headline from "./Headline";


const HeadlinePage = ({ articles }) => {

    const headlines = articles.map(article => <Headline article={article} key={article.id} />);

    return (
        <>
            {headlines}
        </>
    )
};

HeadlinePage.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            fields: PropTypes.shape({
                headline: PropTypes.string.isRequired,
                thumbnail: PropTypes.string.isRequired
            })
        })
    )
}

export default HeadlinePage;