import { create } from "react-test-renderer";

const { mount } = require("enzyme");
import InfoPanel from "../../../containers/InfoPanel";

describe("InfoPanel", () => {
  const wrapper = mount(
    <InfoPanel>
      <h1>Cats</h1>
    </InfoPanel>
  );
  test("should render correctly", () => {
    expect(wrapper.length).toBe(1);
  });
  test("should render a section", () => {
    expect(wrapper.find("section").length).toEqual(1);
  });
  test("should render children", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
  test("should match snapshot", () => {
    const snapWrapper = create(
      <InfoPanel>
        <h1>Cats</h1>
      </InfoPanel>
    );
    expect(snapWrapper.toJSON()).toMatchSnapshot();
  });
});
