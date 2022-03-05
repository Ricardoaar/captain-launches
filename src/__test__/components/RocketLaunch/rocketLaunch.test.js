import RocketLaunch from "../../../components/RocketLaunch";
import { shallow, mount } from "enzyme";
import { create } from "react-test-renderer";

const launches = require("../../__mocks__/launches.mock.js");
const launch = launches[0];
describe("Should render correctly", () => {
  const wrapper = shallow(<RocketLaunch launch={launch} />);

  test("Should render correctly", () => {
    expect(wrapper.length).toBe(1);
  });

  test("Should render correct date", () => {
    expect(wrapper.find(".rocket-date").text()).toBe(new Date(launch.dateUtc).toLocaleString());
  });
  test("Should render correct mission name", () => {
    expect(wrapper.find(".rocket-mission").text()).toBe(launch.mission);
  });
  test("Should render buttons", () => {
    const wrapperWithButtons = mount(
      <RocketLaunch launch={launch}>
        <button />
        <button />
        <button />
      </RocketLaunch>
    );
    wrapperWithButtons.find("button").forEach((button) => {
      expect(button.length).toBe(1);
    });
    expect(wrapperWithButtons.find("button").length).toBe(3);
  });

  test("Should execute btn click correctly", () => {
    const onClick = jest.fn();

    const wrapperWithButtons = mount(
      <RocketLaunch launch={launch}>
        <button onClick={onClick} />
        <button onClick={onClick} />
        <button onClick={onClick} />
      </RocketLaunch>
    );
    wrapperWithButtons.find("button").forEach((button) => {
      button.simulate("click");
    });
    expect(onClick.mock.calls.length).toBe(3);
  });
});

describe("Should match the snapshot", () => {
  const wrapper = create(<RocketLaunch launch={launch} />);

  test("Should match the snapshot", () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
