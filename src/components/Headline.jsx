import PropTypes from 'prop-types';

const Headline = ({ article }) => {


    const { headline, thumbnail } = article.fields;

    return (
        <article>
            <img src={thumbnail} alt="" />
            <h2>{headline}</h2>
        </article>
    )
};

Headline.propTypes = {
    article: PropTypes.shape({
        fields: PropTypes.shape({
            headline: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired
        })
    })
}

export default Headline;