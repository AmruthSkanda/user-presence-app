jest.unmock('../../utils/socket');
jest.unmock("../../actions");

import React from "react";
import Home from "../../components/home";
import { HomeContainer } from "../../containers/Home";
import Socket from '../../utils/socket';
import { shallow } from "enzyme";
import * as Actions from "../../actions/home";
Actions.getActiveUsers = jest.fn();
Socket.getSocket = jest.fn().mockReturnValue(undefined);
Socket.create = jest.fn();

describe("CONTAINER: src/containers/Home.js", () => {
  describe("Socket doesn't exist", () => {
    let wrapper;
    beforeEach(() => {
      Socket.getSocket.mockReset();
      Socket.create.mockReset();
      React.useEffect = jest.fn().mockImplementation(f => f());
      wrapper = shallow(<HomeContainer />);
    });

    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should render Home component", () => {
      expect(wrapper.find(Home)).toBeDefined();
    });

    it("should have called getActiveUsers on mount", () => {
      expect(Actions.getActiveUsers).toHaveBeenCalled();
    });

    it("should create socket if socket is not present", () => {
      expect(Socket.create).toHaveBeenCalled();
    });
  });

  describe("when socket existis", () => {
    let wrapper;
    beforeEach(() => {
      Socket.getSocket = jest.fn().mockReturnValue(true);
      Socket.create.mockReset();
      React.useEffect = jest.fn().mockImplementation(f => f());
      wrapper = shallow(<HomeContainer />);
    });
    it("should create socket if socket is not present", () => {
      Socket.getSocket = jest.fn().mockReturnValue(true);
      expect(Socket.create).not.toHaveBeenCalled();
    });
  });
});