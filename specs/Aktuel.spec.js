import TestComponent from "../components/AktuelUrunler.vue";
import { mount } from "@vue/test-utils";

test("Proplar dogru render oluyor mu", () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      UrunAdi: "ELEKTRİKLİ CAM SU ISITICI",
      Marka: "TEBA",
      Fiyat: "89,90"
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test("Proplar değişken bazında olarak dogrumu", () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      UrunAdi: "ELEKTRİKLİ CAM SU ISITICI",
      Marka: "YENİMARKA",
      Fiyat: "89,90"
    }
  });
  expect(wrapper.vm.Marka).toBe("YENİMARKA");
});
