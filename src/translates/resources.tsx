import HeroImgEn from "images/main-page/slide-img-1.png";
import HeroImgTh from "images/main-page/slide-img-1-th.jpg";
import HeroImgRu from "images/main-page/slide-img-1-ru.jpg";

export const resources = {
  en: {
    translation: {
      headerDescription: "Service of Private Advertisements",
      wishTitle: "My Whishlist",
      heroImg: HeroImgEn.src,
      createButton: "Create an Ad",
      popularCategory: "Popular Categories",
      mapErrorNoThailand: "Please select a location within Thailand",
    },
  },
  ru: {
    translation: {
      headerDescription: "Служба частных обьявлений",
      wishTitle: "Мои избранные",
      heroImg: HeroImgRu.src,
      createButton: "Добавить обьявление",
      popularCategory: "Популярные категории",
      mapErrorNoThailand: "Пожалуйста, выберите место на территории Тайланда",
    },
  },
  th: {
    translation: {
      headerDescription: "บริการของเอกชน โฆษณา",
      wishTitle: "สิ่งที่อยากได้ของฉัน",
      heroImg: HeroImgTh.src,
      createButton: "สร้างโฆษณา",
      popularCategory: "หมวดหมู่ยอดนิยม",
      mapErrorNoThailand: "กรุณาเลือกตำแหน่งภายในประเทศไทย",
    },
  },
};
