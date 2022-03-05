import FavoriteLaunches from "../../../components/FavoritesLaunches";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";
import React from "react";

const launches = require("../../__mocks__/launches.mock.js");

const MockRender = (launch) => (
  <div key={launch.mission}>
    {launch.mission}
    {launch.date}
  </div>
);

describe("<FavoritesLaunches/>", () => {
  const wrapper = shallow(
    <FavoriteLaunches render={MockRender} favorites={[launches[0], launches[1]]} />
  );
  test("Should render successfully", () => {
    expect(wrapper.length).toBe(1);
  });

  test("Should render just one wrapper", () => {
    expect(wrapper.find(".favorites-wrapper").length).toBe(1);
  });
  test("should render just one favorite container", () => {
    expect(wrapper.find(".favorites-container").length).toBe(1);
  });
  test("should match the snapshot", () => {
    const wrapper = create(
      <FavoriteLaunches render={MockRender} favorites={[launches[0], launches[1]]} />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
