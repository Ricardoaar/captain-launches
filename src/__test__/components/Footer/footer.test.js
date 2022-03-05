import Footer from "../../../components/Footer";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";

describe("Index", () => {
  const wrapper = shallow(<Footer />);
  test("Should render correctly", () => {
    expect(wrapper.length).toBe(1);
  });
  test("Should render a footer", () => {
    expect(wrapper.find("footer").length).toBe(1);
  });

  test("Should contain @CaptainRun in the footer", () => {
    expect(wrapper.find("footer").text()).toContain("@CaptainRun");
  });

  test("Should contain a link to the github profile", () => {
    expect(wrapper.find("a").prop("href")).toContain("github");
  });

  test("Should contain a link with target _blank", () => {
    expect(wrapper.find("a").prop("target")).toBe("_blank");
  });
  test("Should match snapshot", () => {
    const snapWrapper = create(<Footer />);
    expect(snapWrapper.toJSON()).toMatchSnapshot();
  });
});
