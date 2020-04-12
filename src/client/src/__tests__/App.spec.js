import React from 'react';
import App from "../App";
import { shallow } from "enzyme";

describe("App.js", () => {
  it("should match snapshot", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});