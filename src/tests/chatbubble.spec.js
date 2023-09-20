// Import the necessary dependencies
import { mount } from "@vue/test-utils";
import { expect } from "chai";
import ChatBubble from "../components/ChatBubble.vue";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const wrapper = mount(ChatBubble);
    expect(wrapper.exists()).to.be.true;
  });

  it("displays the correct message", () => {
    const wrapper = mount(ChatBubble, {
      props: {
        data: {
          side: "right",
          text: "Hellow world!",
          time: 123213,
        },
      },
    });
    expect(wrapper.find(".message-span").text()).to.include("Hellow world!");
  });

  // it('updates the message when clicked', async () => {
  //   const wrapper = mount(MyComponent, {
  //     props: {
  //       message: 'Hello, Vue!',
  //     },
  //   });

  //   await wrapper.find('button').trigger('click');

  //   expect(wrapper.text()).to.include('Message Updated');
  // });
});
