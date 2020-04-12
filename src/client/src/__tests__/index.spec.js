jest.mock("react-dom");

import ReactDOM from 'react-dom';
import { render } from "../";

describe("ReactDOM mount", () => {
  beforeEach(() => {
    render();
  });

  it("should have called ReactDOM.render", () => {
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});