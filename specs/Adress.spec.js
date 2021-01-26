import TestComponent from "../components/Adres.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

test("Snap control", () => {
  const wrapper = mount(TestComponent);
  expect(wrapper).toMatchSnapshot();
});

test("SagTaraf css sınıfına sahip div render oluyor mu", () => {
  const wrapper = mount(TestComponent);
  expect(wrapper.find("div.SagTaraf").exists()).toBeTruthy();
});
