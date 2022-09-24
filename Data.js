import MenuBar from "./assets/menubar.png";
import icon from "./assets/icon.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
// import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import icon5 from "./assets/icon5.png";
import icon6 from "./assets/icon6.png";
import laptop from "./assets/categories/laptop.png";
import appliance from "./assets/categories/appliance.png";
import electronic from "./assets/categories/electronic.png";
import fastfood from "./assets/categories/fastfood.png";
import home from "./assets/categories/home.png";
import stationary from "./assets/categories/stationary.png";
import more from "./assets/categories/more.png";
export const leftMenu = [
  {
    title: "About Us",
    link: "/about-Us",
  },
  {
    title: "My Account",
    link: "/my-account",
  },
  {
    title: "Featured Products",
    link: "/featured-products",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
export const menuData = [
  {
    title: "Top Categories",
    icon: MenuBar,
    parent: true,
    submenu: [
      {
        title: "Laptop and Desktop",
        url: "Laptop and Desktop",
        icon: laptop,
        submenu: [
          {
            title: "Laptop and Desktop",
            url: "Laptop and Desktop",
          },
          {
            title: "Home Living",
            url: "web-dev",
            submenu: [
              {
                title: "Laptop and Desktop",
                url: "Laptop and Desktop",
              },
              {
                title: "Home Living",
                url: "web-dev",
              },
              {
                title: "Book and Stationary",
                url: "Book and Stationary",
              },
              {
                title: "Home Appliances",
                url: "Book and Stationary",
              },
            ],
          },
          {
            title: "Book and Stationary",
            url: "Book and Stationary",
          },
          {
            title: "Home Appliances",
            url: "Book and Stationary",
          },
          {
            title: "Electronics Appliances",
            url: "Electronics Appliances",
          },
          {
            title: "Fast Food and Snacks",
            url: "Book and Stationary",
          },
          {
            title: "More Categories",
            url: "Book and Stationary",
          },
        ],
      },
      {
        title: "Home Living",
        url: "web-dev",
        icon: home,
      },
      {
        title: "Book and Stationary",
        url: "Book and Stationary",
        submenu: [
          {
            title: "Laptop and Desktop",
            url: "Laptop and Desktop",
          },
          {
            title: "Home Living",
            url: "web-dev",
            submenu: [
              {
                title: "Laptop and Desktop",
                url: "Laptop and Desktop",
              },
              {
                title: "Home Living",
                url: "web-dev",
              },
              {
                title: "Book and Stationary",
                url: "Book and Stationary",
              },
              {
                title: "Home Appliances",
                url: "Book and Stationary",
              },
            ],
          },
          {
            title: "Book and Stationary",
            url: "Book and Stationary",
          },
          {
            title: "Home Appliances",
            url: "Book and Stationary",
          },
          {
            title: "Electronics Appliances",
            url: "Electronics Appliances",
          },
          {
            title: "Fast Food and Snacks",
            url: "Book and Stationary",
          },
          {
            title: "More Categories",
            url: "Book and Stationary",
          },
        ],
        icon: stationary,
      },
      {
        title: "Home Appliances",
        url: "Book and Stationary",
        icon:appliance,
      },
      {
        title: "Electronics Appliances",
        url: "Electronics Appliances",
        icon: electronic,
        submenu: [
          {
            title: "Laptop and Desktop",
            url: "Laptop and Desktop",
          },
          {
            title: "Home Living",
            url: "web-dev",
            submenu: [
              {
                title: "Laptop and Desktop",
                url: "Laptop and Desktop",
              },
              {
                title: "Home Living",
                url: "web-dev",
              },
              {
                title: "Book and Stationary",
                url: "Book and Stationary",
              },
              {
                title: "Home Appliances",
                url: "Book and Stationary",
              },
            ],
          },
          {
            title: "Book and Stationary",
            url: "Book and Stationary",
          },
          {
            title: "Home Appliances",
            url: "Book and Stationary",
          },
          {
            title: "Electronics Appliances",
            url: "Electronics Appliances",
          },
          {
            title: "Fast Food and Snacks",
            url: "Book and Stationary",
          },
          {
            title: "More Categories",
            url: "Book and Stationary",
          },
        ],
      },
      {
        title: "Fast Food and Snacks",
        url: "Book and Stationary",
        icon: fastfood,
      },
      {
        title: "More Categories",
        url: "Book and Stationary",
        icon: more,
        submenu: [
          {
            title: "Laptop and Desktop",
            url: "Laptop and Desktop",
          },
          {
            title: "Home Living",
            url: "web-dev",
            submenu: [
              {
                title: "Laptop and Desktop",
                url: "Laptop and Desktop",
              },
              {
                title: "Home Living",
                url: "web-dev",
              },
              {
                title: "Book and Stationary",
                url: "Book and Stationary",
              },
              {
                title: "Home Appliances",
                url: "Book and Stationary",
              },
            ],
          },
          {
            title: "Book and Stationary",
            url: "Book and Stationary",
          },
          {
            title: "Home Appliances",
            url: "Book and Stationary",
          },
          {
            title: "Electronics Appliances",
            url: "Electronics Appliances",
          },
          {
            title: "Fast Food and Snacks",
            url: "Book and Stationary",
          },
          {
            title: "More Categories",
            url: "Book and Stationary",
          },
        ],
      },
    ],
  },
];

export const mainMenu = [
  {
    title: "Exclusive Deals",
    link: "Exclusive Deals",
    submenu: [
      { title: "Exclusive Deals", link: "Exclusive Deals" },
      { title: "Smart Watches", link: "Smart Watches" },
      { title: "Cell Phone", link: "Cell Phone" },
      { title: "Headphone", link: "Headphone" },
    ],
  },
  {
    title: "Smart Watches",
    link: "Smart Watches",
    submenu: [
      { title: "Exclusive Deals", link: "Exclusive Deals" },
      { title: "Smart Watches", link: "Smart Watches" },
      { title: "Cell Phone", link: "Cell Phone" },
      { title: "Headphone", link: "Headphone" },
    ],
  },
  { title: "Cell Phone", link: "Cell Phone" },
  { title: "Headphone", link: "Headphone" },
];

export const popularCategories = [
  { title: "Electronics Appliances", image: icon },
  { title: "Electronics Appliances", image: icon1 },
  { title: "Electronics Appliances", image: icon2 },
  { title: "Electronics Appliances", image: icon6 },
  { title: "Electronics Appliances", image: icon4 },
  { title: "Electronics Appliances", image: icon5 },
  { title: "Electronics Appliances", image: icon6 },
  { title: "Electronics Appliances", image: icon6 },
];
