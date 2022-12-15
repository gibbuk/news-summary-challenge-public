import axios from "axios";
import {
  act,
  getDefaultNormalizer,
  render,
  screen,
} from "@testing-library/react";

import App from "../App";

import mockNewsData from "../mockNewsData.json";
const mockArticles = mockNewsData.response.results;

jest.mock("axios");

describe(`App component test suite`, () => {
  beforeEach(async () => {
    axios.get.mockResolvedValueOnce({ data: mockNewsData });
  });

  test(`it should render the same number of Headline components as articles it receives`, async () => {
    await act(async () => render(<App />));
    const output = screen.getAllByRole("article");
    expect(output.length).toBe(mockArticles.length);
  });

  test(`it should render all the article headlines provided`, async () => {
    await act(async () => render(<App />));
    for (let i = 0, n = mockArticles.length; i < n; i++) {
      //normalization defaults need to be turned off to avoid DOM Testing Library carrying it out automatically (e.g. collapsing adjacent whitespace). This can create instances of the tests failing even though the exact text provided has been rendered.
      const element = screen.getByText(mockArticles[i].fields.headline, {
        normalizer: getDefaultNormalizer({
          trim: false,
          collapseWhitespace: false,
        }),
      });
      expect(element).toBeInTheDocument();
    }
  });

  test(`it should render all the images provided`, async () => {
    await act(async () => render(<App />));
    const img = screen.getAllByRole("img");
    for (let i = 0, n = mockArticles.length; i < n; i++) {
      expect(img[i]).toHaveAttribute("src", mockArticles[i].fields.thumbnail);
    }
  });
});
