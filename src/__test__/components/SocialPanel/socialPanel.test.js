import SocialPanel from "../../../components/SocialPanel";
import { shallow } from "enzyme";
import { create } from "react-test-renderer";

describe("<SocialPanel/>", () => {
  const wrapper = shallow(<SocialPanel />);
  test("Should render correctly", () => {
    expect(wrapper.length).toEqual(1);
  });
  test("Should match the snapshot", () => {
    const snapWrapper = create(<SocialPanel />);
    expect(snapWrapper.toJSON()).toMatchSnapshot();
  });
});
