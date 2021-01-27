import TestComponent from "../components/Adres.vue";
import { mount, RouterLinkStub } from "@vue/test-utils";

test("Snap control", () => {
  const wrapper = mount(TestComponent);
  expect(wrapper).toMatchSnapshot();
});

test("SagTaraf adli css sınıfına sahip div render oluyor mu kontrol et", () => {
  const wrapper = mount(TestComponent);
  expect(wrapper.find("div.SagTaraf").exists()).toBeTruthy();
});
