import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as PlacesPage } from "../../../chunks/PlacesPage.js";
const OneUpSkates = {
  address: "3 Ang Mo Kio Street 62, #02-13, Singapore 569139",
  hours: "Open from 12pm - 8pm (SGT) on weekdays, and from 10am - 8pm (SGT) on weekends",
  price: "$21.40 for a full day (24 hours)",
  phone: "+65 9456 8346",
  email: "bryant@oneupskates.com",
  website: "https://oneupskates.com/products/skaterental",
  mapLink: "https://g.page/oneupskates?share",
  description: "You need to bring your NRIC or passport to rent a skate. It seems to be the exact same place as the Inlinex inline skate rental. Protective gear and helmets are not included with the rental and cost an additional $10.70 to rent."
};
const Skateline = {
  address: "1380 Ang Mo Kio Ave 1, Bishan - Ang Mo Kio Park, Singapore 569930",
  hours: "Appointment based, so it's technically open 24 hours daily",
  price: "$8 per hour and $40 for 6 hours",
  phone: "+65 9382 3336",
  email: "info@skateline.com.sg",
  website: "https://skateline.com.sg/pages/skate-rental",
  mapLink: "https://goo.gl/maps/v9AYVvw4xFky4KGJ7",
  description: "The skate rentals include the rent for protective gear and helmets. However, the rentals need to be booked 3 days in advance, so no impromptu rentals. You will also need to bring your NRIC or passport to rent."
};
const placesJson = {
  "Hvper Sport Downtown East / HiRoller": {
    address: "1 Pasir Ris Cl, Level 5 E!Hub @ Downtown East #05-104, Singapore 519599",
    hours: "Open from 12pm - 7pm (SGT) on weekdays, and from 12pm - 8pm (SGT) on weekends and public holidays",
    price: "$12 on weekdays and $15 on weekends to enter the skating rink. Indoor (inside the skating rink) skate rentals are $6 for 2 hours. Outdoor skate rentals are $20 for 6 hours from 12pm - 6pm (SGT).",
    phone: "+65 9694 4094",
    email: "hirollersingapore@gmail.com",
    website: "https://www.hirollersingapore.com/our-rink",
    mapLink: "https://g.page/HiRoller?share",
    description: "The skate rentals do not include protective gear and helmets. Socks are $3."
  },
  "Ernsports @ ECP": {
    address: "920 East Coast Parkway, #01-14/15/16 Parkland Green, Singapore 449875",
    hours: "Open from 12pm - 8pm (SGT) on weekdays, and from 10am - 8pm (SGT) on weekends",
    price: "$15 per hour for the first 2 hours and $10 for subsequent hours.",
    phone: "+65 9724 6638",
    email: "ask@ernsports.com",
    website: "https://www.ernsports.com/",
    mapLink: "https://goo.gl/maps/YTvJZYCXCadcRNti8",
    description: "Helmets and protective gear are not included in the rental and cost $5 to rent."
  },
  "Ernsports @ Punggol Promenade Riverside Walk": {
    address: "6 Tebing Lane, #01-02A, Singapore 828835",
    hours: "Open from 12pm - 8pm (SGT) on weekdays, and from 10am - 8pm (SGT) on weekends",
    price: "$15 per hour for the first 2 hours and $10 for subsequent hours.",
    phone: "+65 9724 6638",
    email: "ask@ernsports.com",
    website: "https://www.ernsports.com/",
    mapLink: "https://goo.gl/maps/B5QQcMyD96Aa26Cb9",
    description: "Helmets and protective gear are not included in the rental and cost $5 to rent."
  },
  "Coastline Leisure @ East Coast Carpark E2": {
    address: "1120 East Coast Parkway, East Coast Carpark E2, Singapore 468960",
    hours: "Open 24 hours daily",
    price: "$18 for the first hour and $8 for subsequent hours",
    phone: "+65 6443 3489",
    email: "enquiry@coastlineleisure.com.sg",
    website: "https://coastlineleisure.com.sg/",
    mapLink: "https://goo.gl/maps/cUpCg5JHq9WGw45d7",
    description: "The skate rentals include the rent for protective gear and helmets."
  },
  "Coastline Leisure @ East Coast Park Area B1": {
    address: "East Coast Park Service Rd, Singapore 439172",
    hours: "Open from 9am - 8pm (SGT) on Sunday - Thursday, and from 9am - 9pm (SGT) on Fridays and Saturdays",
    price: "$18 for the first hour and $8 for subsequent hours",
    phone: "+65 9836 4797",
    email: "enquiry@coastlineleisure.com.sg",
    website: "https://coastlineleisure.com.sg/",
    mapLink: "https://goo.gl/maps/dXvJpxk9GrgUQj4z5",
    description: "The skate rentals include the rent for protective gear and helmets."
  },
  "Inlinex (Inline Skate Rental)": {
    address: "3 Ang Mo Kio St 62, #02-13 Link@AMK, Singapore 569139",
    hours: "Open from 12pm - 8pm (SGT) on weekdays, and from 10am - 8pm (SGT) on weekends",
    price: "$21.40 for a full day (24 hours)",
    phone: "+65 9456 8346",
    email: "admin@inlinex.com.sg",
    website: "https://www.inlinex.com.sg/pages/skate-rental",
    mapLink: "https://goo.gl/maps/b94NZqJyeKLbEEXV7",
    description: "You will need to bring your NRIC or passport to rent a skate. It seems to be the exact same place as the OneUpSkates rental. Protective gear and helmets are not included with the rental and cost an additional $10.70 to rent."
  },
  "Inlinex (Roller Skate Rental)": {
    address: "37 Kallang Pudding Road, #09-06 Building B, Singapore 349315",
    hours: "Open from 12pm - 8pm (SGT) on weekdays, and from 11am - 7pm (SGT) on weekends. Closed on public holidays.",
    price: "$10.70 for an hour and $26.75 for a full day (24 hours)",
    phone: "+65 8123 3425",
    email: "admin@inlinex.com.sg",
    website: "https://www.inlinex.com.sg/products/roller-skate-rental",
    mapLink: "https://g.page/Inlinex?share",
    description: "You will need to bring your NRIC or passport to rent a skate. It is located in an industrial building so it's probably difficult to rent the skates for just one hour. Protective gear and helmets are not included with the rental and cost an additional $2 to rent."
  },
  OneUpSkates,
  Skateline,
  "Freeskate Inline": {
    address: "338 Ang Mo Kio Ave 1, #01-1649, Singapore 560338",
    hours: "Opens 12pm - 8:30pm (SGT) daily, closed on Mondays",
    price: "$20 for 2 hours",
    phone: "+65 9128 9589",
    email: "Rachelyrx@gmail.com",
    website: "https://www.freeskateinline.com/",
    mapLink: "https://goo.gl/maps/qhmyiR8D9szsartp8",
    description: "The skate rentals include the rent for protective gear and helmets. However, reservations are required to rent a skate, so no impromptu rentals."
  },
  "Bikes @ Waterway": {
    address: "9 Sentul Crescent, #01-04A SAFRA Punggol, Level 1, Singapore 828654",
    hours: "Open from 9am - 7pm (SGT) on weekdays, and from 9am - 8pm (SGT) on weekends",
    price: "$18 for the first hour and $8 for subsequent hours, but there is a 3-hour bundle for $26",
    phone: "+65 9830 3117",
    email: "enquiry@coastlineleisure.com.sg",
    website: "https://coastlineleisure.com.sg/",
    mapLink: "https://goo.gl/maps/7irMoeA6b8jJC29e8",
    description: "The skate rentals include the rent for protective gear and helmets."
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `   ${validate_component(PlacesPage, "PlacesPage").$$render(
    $$result,
    {
      title: "Places to Rent",
      description: "The list of places to rent skates",
      placesJson,
      headingLevel: 3,
      changeInHeadingLevel: 1
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
