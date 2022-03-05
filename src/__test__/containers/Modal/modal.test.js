import Modal from "../../../containers/Modal";
import { mount } from "enzyme";
import { create } from "react-test-renderer";

describe("<Modal/>", () => {
  const onClose = jest.fn();
  const wrapper = mount(
    <Modal onClose={onClose} isOpen={true}>
      <div>ModalOpen</div>
    </Modal>
  );

  test("Should render correctly", () => {
    expect(wrapper.length).toBe(1);
  });

  test("Should execute onClose() when clicking on the close button", () => {
    wrapper.find("button").simulate("click");
    expect(onClose).toHaveBeenCalled();
  });

  //NO snapshot, trouble with buttons
});
