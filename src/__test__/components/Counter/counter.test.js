import Counter from "../../../components/Counter";
import CounterElement from "../../../components/CounterElement";
import { shallow } from "enzyme";

const time = require("../../__mocks__/counterTime.mock.js");
const mockRender = (obj) => {
  return (
    <p>
      {obj.day}
      {obj.hour}
    </p>
  );
};
describe("<Counter />", () => {
  test("should render correctly", () => {
    const wrapper = shallow(<Counter render={mockRender} time={time} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find("p").text()).toEqual(`${time.day}${time.hour}`);
  });
});

describe("<CounterElement />", () => {
  const wrapper = shallow(<CounterElement name={"cat"} value={5} />);

  test("should render correctly", () => {
    expect(wrapper.length).toEqual(1);
  });

  test("Should assign name attr in plural or singular", () => {
    Object.keys(time).forEach((key) => {
      const capName = key.charAt(0).toUpperCase() + key.slice(1);
      const wrapper = shallow(<CounterElement name={key} value={time[key]} />);
      expect(wrapper.find(".counter-name").text()).toEqual(`${capName}${time[key] > 1 ? "s" : ""}`);
    });

    expect(wrapper.find(".counter-name").text()).toEqual("Cats");

    const wrapperSingular = shallow(<CounterElement name="cat" value="1" />);
    expect(wrapperSingular.find(".counter-name").text()).toEqual("Cat");
  });

  test("Should render a 0 before if number is lower than 10", () => {
    Object.keys(time).forEach((key) => {
      const wrapper = shallow(<CounterElement name={key} value={time[key]} />);
      expect(wrapper.find(".counter-value").text()).toMatch(
        time[key] < 10 ? `0${time[key]}` : `${time[key]}`
      );
    });

    expect(wrapper.find(".counter-value").text()).toEqual("05");
    const wrapperSingular = shallow(<CounterElement name="cat" value="17" />);
    expect(wrapperSingular.find(".counter-value").text()).toEqual("17");
  });
});
//Snapshot later
