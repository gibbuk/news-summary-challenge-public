import React from 'react';
import { render, screen } from '@testing-library/react';
import Headline from '../components/Headline';
import mockNewsData from '../mockNewsData.json';

describe(`Headline component test suite`, () => {


    describe(`Render tests`, () => {

        test(`it should render the Headline text to the screen`, () => {
            const article = mockNewsData.response.results[0];
            render(<Headline article={article} />);
            expect(screen.getByText(article.fields.headline)).toBeInTheDocument;

        })

        test(`it should render the <img> tag pointing to the correct src`, () => {
            const article = mockNewsData.response.results[0];
            render(<Headline article={article} />);
            const img = screen.getByRole('img')
            expect(img).toHaveAttribute('src', article.fields.thumbnail);

        })
    })
})