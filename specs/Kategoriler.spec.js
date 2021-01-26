import TestComponent from "../components/Kategoriler.vue";
import { mount } from "@vue/test-utils";

test("mount a vue component", () => {
  const wrapper = mount(TestComponent);
  expect(wrapper).toMatchSnapshot();
});

test("id'si sut olan div render oluyor mu", () => {
  const wrapper = mount(TestComponent);
  expect(wrapper.find("#sut").exists()).toBeTruthy();
});
