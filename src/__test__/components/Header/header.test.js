import React from "react";
import { mount, shallow } from "enzyme";
import Header from "../../../components/Header";
import { create } from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  test("Rendering header", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(wrapper.length).toBe(1);
  });

  test("Rendering the title", () => {
    const wrapper = mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(wrapper.find("li").first().text()).toEqual("Home");
  });

  test("should match the snapshot", () => {
    const wrapper = create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
