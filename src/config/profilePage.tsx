import Avatar1 from "images/profile/notification-avatar1.png";
import Avatar2 from "images/profile/notification-avatar2.png";
import Avatar3 from "images/profile/notification-avatar3.png";
import Avatar4 from "images/profile/notification-avatar4.png";

export const NotificationsList = [
  {
    id: 0,
    avatar: Avatar1.src,
    title: "<span>Kia Carnival, 2016</span> has fallen in price 🤩",
    date: "June 2023, 12:38 PM",
    button: {
      name: "profile.goToAd",
      link: "/",
    },
    isNew: true,
  },
  {
    id: 1,
    avatar: Avatar2.src,
    title:
      "Unfortunately, the Mercedes-Benz C-Class, 2017 has already been sold",
    date: "June 2023, 12:38 PM",
    isNew: true,
  },
  {
    id: 2,
    avatar: Avatar3.src,
    title: "User <span>Julia Wells</span> left a review about you",
    text: "",
    date: "June 2023, 12:38 PM",
    button: {
      name: "category.show",
      link: "/",
    },
    isNew: true,
  },
  {
    id: 3,
    avatar: Avatar4.src,
    title: "Update in BBGO",
    text: "We have updated our service and now you have more opportunities to buy and sell",
    date: "June 2023, 12:38 PM",
    button: {
      name: "category.show",
      link: "/",
    },
    isNew: false,
  },
  {
    id: 4,
    avatar: Avatar1.src,
    title: "<span>Kia Carnival, 2016</span> has fallen in price 🤩",
    date: "June 2023, 12:38 PM",
    button: {
      name: "profile.goToAd",
      link: "/",
    },
    isNew: false,
  },
  {
    id: 5,
    avatar: Avatar2.src,
    title:
      "Unfortunately, the Mercedes-Benz C-Class, 2017 has already been sold",
    date: "June 2023, 12:38 PM",
    isNew: false,
  },
  {
    id: 6,
    avatar: Avatar3.src,
    title: "User <span>Julia Wells</span> left a review about you",
    text: "",
    date: "June 2023, 12:38 PM",
    button: {
      name: "category.show",
      link: "/",
    },
    isNew: false,
  },
  {
    id: 7,
    avatar: Avatar4.src,
    title: "Update in BBGO",
    text: "We have updated our service and now you have more opportunities to buy and sell",
    date: "June 2023, 12:38 PM",
    button: {
      name: "category.show",
      link: "/",
    },
    isNew: false,
  },
];

export const bannerList = [
  {
    id: 0,
    name: "My banners ads.jpg",
    weight: "50 KB",
    size: "1200x90 px",
    dataUploaded: "May 4, 2023",
    status: {
      name: "approved",
      value: "profile.approved",
    },
  },
  {
    id: 1,
    name: "123sdfd.jpg",
    weight: "32 KB",
    size: "970x90 px",
    dataUploaded: "Apr 12, 2023",
    status: {
      name: "waiting",
      value: "profile.waiting",
    },
  },
  {
    id: 2,
    name: "Picture2023-03-03.png",
    weight: "12 KB",
    size: "728x90 px",
    dataUploaded: "Apr 4, 2023",
    status: {
      name: "rejected",
      value: "profile.rejected",
    },
  },
  {
    id: 3,
    name: "My banners ads.jpg",
    weight: "55 KB",
    size: "320x600 px",
    dataUploaded: "Feb 7, 2023",
    status: {
      name: "approved",
      value: "profile.approved",
    },
  },
  {
    id: 4,
    name: "70-descuento-desktop-v3 1.png",
    weight: "67 KB",
    size: "320x250 px",
    dataUploaded: "Mar 23, 2023",
    status: {
      name: "approved",
      value: "profile.approved",
    },
  },
];

import AvatarRevie1 from "images/profile/avatar2.png";
import AvatarRevie2 from "images/profile/avatar3.png";
import AvatarRevie3 from "images/profile/notification-avatar3.png";

export const reviewsList = [
  {
    id: 0,
    avatar: AvatarRevie1.src,
    name: "Darla",
    text: "“Nice place! Very nice host! We'll come again!”",
    date: "August 2022",
    rating: 3,
  },
  {
    id: 1,
    avatar: AvatarRevie2.src,
    name: "Maria",
    text: "“Great nature getaway, nice hosts and a very atmospheric house. thank you and recommend🙂”",
    date: "July 2022",
    rating: 2,
  },
  {
    id: 2,
    avatar: AvatarRevie3.src,
    name: "Alessandro",
    text: "“Felix is a wonderful person, helpful, welcoming and has recommended many places to visit and restaurants. House near the center and very clean. Easy self check-in. I absolutely recommend the place”",
    date: "August 2022",
    rating: 1,
  },
  {
    id: 3,
    avatar: AvatarRevie3.src,
    name: "Daniela",
    text: "“It was very restful and quiet and cool at night. Felix and his parents were very helpful and accommodating”",
    date: "August 2022",
    rating: 5,
  },
  {
    id: 4,
    avatar: AvatarRevie1.src,
    name: "Alessandro",
    text: "“Felix is a wonderful person, helpful, welcoming and has recommended many places to visit and restaurants. House near the center and very clean. Easy self check-in. I absolutely recommend the place”",
    date: "August 2022",
    rating: 1,
  },
  {
    id: 5,
    avatar: AvatarRevie2.src,
    name: "Darla",
    text: "“Nice place! Very nice host! We'll come again!”",
    date: "August 2022",
    rating: 3,
  },
  {
    id: 6,
    avatar: AvatarRevie3.src,
    name: "Alessandro",
    text: "“Felix is a wonderful person, helpful, welcoming and has recommended many places to visit and restaurants. House near the center and very clean. Easy self check-in. I absolutely recommend the place”",
    date: "August 2022",
    rating: 1,
  },
  {
    id: 7,
    avatar: AvatarRevie3.src,
    name: "Maria",
    text: "“Great nature getaway, nice hosts and a very atmospheric house. thank you and recommend🙂”",
    date: "July 2022",
    rating: 2,
  },
];

import BadIcon from "images/profile/Bad.svg";
import AcceptableIcon from "images/profile/Acceptable.svg";
import NormalIcon from "images/profile/Normal.svg";
import GoodIcon from "images/profile/Good.svg";
import ExcellentIcon from "images/profile/Excellent.svg";

export const ratingStatus = [
  {
    rating: 1,
    icon: <BadIcon />,
    title: "profile.bad",
    description: "profile.badReviews",
  },
  {
    rating: 2,
    icon: <AcceptableIcon />,
    title: "profile.acceptable",
    description: "profile.acceptableReviews",
  },
  {
    rating: 3,
    icon: <NormalIcon />,
    title: "profile.normal",
    description: "profile.normalReviews",
  },
  {
    rating: 4,
    icon: <GoodIcon />,
    title: "profile.good",
    description: "profile.goodReviews",
  },
  {
    rating: 5,
    icon: <ExcellentIcon />,
    title: "profile.excellent",
    description: "profile.excellentReviews",
  },
];

export const bannersCategories = [
  {
    id: 0,
    name: "approved",
    value: "profile.approved",
  },
  {
    id: 1,
    name: "waiting",
    value: "profile.waiting",
  },
  {
    id: 2,
    name: "rejected",
    value: "profile.rejected",
  },
];
