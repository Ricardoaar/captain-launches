import { create } from "react-test-renderer";

const { mount } = require("enzyme");
import MissionContainer from "../../../containers/MissionContainer";

describe("MissionContainer", () => {
  const wrapper = mount(
    <MissionContainer>
      <h1>Cats</h1>
    </MissionContainer>
  );
  test("should render correctly", () => {
    expect(wrapper.length).toBe(1);
  });
  test("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  test("should render children", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
  test("should match snapshot", () => {
    const snapWrapper = create(
      <MissionContainer>
        <h1>Cats</h1>
      </MissionContainer>
    );
    expect(snapWrapper.toJSON()).toMatchSnapshot();
  });
});
