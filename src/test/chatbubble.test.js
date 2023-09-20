import { mount } from "@vue/test-utils";
import ChatBubble from '@/ChatBubble.vue'

test('Mount Comp', async () => {
    expect(ChatBubble).toBeTruthy();
    const wrapper = mount(ChatBubble, {
        props: {
            data: { text: "message text", time: 212121, side: 'right' }
        }
    });
    expect(wrapper.text()).contain("message text");
})