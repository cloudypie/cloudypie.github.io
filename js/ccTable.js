const tables = {
  //****************************/
  //          Delta Cards
  //****************************/

  1: {
    header: {
      text: "American Express Delta Gold",
      link: amexdelbccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_delta_blue.webp",
      link: amexdelbccv,
    },
    intro:
      "<b>Welcome Offer:</b> 10,000 SkyMiles after spending $1,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 2x Delta, 2x Dining, 1x Base",
      "<b>Credits:</b> None",
      "<b>Automatic Perks:</b> 20% Back on In-Flight purchases",
      "<b>Spend Perks:</b> None",
    ],
  },
  2: {
    header: {
      text: "American Express Delta Gold",
      link: amexdelgccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_delta_gold.webp",
      link: amexdelgccv,
    },
    intro:
      "<b>Welcome Offer:</b> 50,000 SkyMiles after spending $2,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $0 for the first year, $150 thereafter",
      "<b>Multipliers:</b> 2x Delta, 2x Dining, 2x Groceries, 1x Base",
      "<b>Credits:</b> $100 annual Delta Stays",
      "<b>Automatic Perks:</b> Takeoff 15, Free Checked Bag, Priority Boarding Group 5",
      "<b>Spend Perks:</b> $200 Delta flight credit after $20,000 spend",
    ],
  },
  3: {
    header: {
      text: "American Express Delta Business Gold",
      link: amexdelbgccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_delta_gold_business.webp",
      link: amexdelbgccv,
    },
    intro:
      "<b>Welcome Offer:</b> 60,000 SkyMiles after spending $4,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $0 for the first year, $150 thereafter",
      "<b>Multipliers:</b> 2x US Shipping Providers/US Advertising, 1x Base",
      "<b>Credits:</b> $150 annual Delta Stays",
      "<b>Automatic Perks:</b> Takeoff 15, Free Checked Bag, Priority Boarding Group 5",
      "<b>Spend Perks:</b> $200 Delta flight credit after $20,000 spend",
    ],
  },

  4: {
    header: {
      text: "American Express Delta Platinum",
      link: amexdelpccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_delta_platinum.webp",
      link: amexdelpccv,
    },
    intro:
      "<b>Welcome Offer:</b> 60,000 SkyMiles after spending $3,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $350",
      "<b>Multipliers:</b> 3x Delta, 3x Hotels, 2x Dining, 2x Groceries, 1x Base",
      "<b>Credits:</b> $150 annual Delta Stays, $10 monthly rideshare, $10 monthly Resy, $120 Global Entry/TSA Precheck",
      "<b>Automatic Perks:</b> 2,500 MQD, Annual Main Cabin Companion Certificate, Takeoff 15, Free Checked Bag, Zone 5 Boarding, Hertz Five Star Status, Complimentary Upgrade List",
      "<b>Spend Perks:</b> 1 MQD per $20 spend",
    ],
  },

  5: {
    header: {
      text: "American Express Delta Platinum Business",
      link: amexdelbpccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_delta_platinum_business.webp",
      link: amexdelbpccv,
    },
    intro:
      "<b>Welcome Offer:</b> 70,000 SkyMiles after spending $6,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $350",
      "<b>Multipliers:</b> 3x Delta, 1.5x Transit/US Shipping/5k+ purchases, 1x Base",
      "<b>Credits:</b> $200 annual Delta Stays, $10 monthly rideshare, $10 monthly Resy, $120 Global Entry/TSA Precheck",
      "<b>Automatic Perks:</b> 2,500 MQD, Annual Main Cabin Companion Certificate, Takeoff 15, Free Checked Bag, Zone 5 Boarding, Hertz Five Star Status, Complimentary Upgrade List",
      "<b>Spend Perks:</b> 1 MQD per $20 spend",
    ],
  },

  6: {
    header: {
      text: "American Express Delta Reserve",
      link: amexdelrccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_delta_reserve.webp",
      link: amexdelrccv,
    },
    intro:
      "<b>Welcome Offer:</b> 70,000 SkyMiles after spending $5,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $650",
      "<b>Multipliers:</b> 3x Delta, 1x Base",
      "<b>Credits:</b> $200 annual Delta Stays, $10 monthly rideshare, $20 monthly Resy, $120 Global Entry/TSA Precheck",
      "<b>Automatic Perks:</b> Annual 15 Delta Club visits, Centurion and Escape Lounge access, annual Main Cabin or First Class Companion Certificate, Takeoff 15, Free Checked Bag, Zone 5 Boarding, Hertz President Circle Status, Complimentary Upgrade List",
      "<b>Spend Perks:</b> Unlimited Sky Club visits after $75,000 spend, 1 MQD per $10 spend",
    ],
  },
  7: {
    header: {
      text: "American Express Delta Reserve Business",
      link: amexdelbrccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_delta_reserve_business.webp",
      link: amexdelbrccv,
    },
    intro:
      "<b>Welcome Offer:</b> 80,000 SkyMiles after spending $10,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $650",
      "<b>Multipliers:</b> 3x Delta, 1.5x Transit/US Shipping/US Office Supply Stores, 1x Base",
      "<b>Credits:</b> $250 annual Delta Stays, $10 monthly rideshare, $20 monthly Resy, $120 Global Entry/TSA Precheck",
      "<b>Automatic Perks:</b> Annual 15 Delta Club visits, Centurion and Escape Lounge access, annual Main Cabin or First Class Companion Certificate, Takeoff 15, Free Checked Bag, Zone 5 Boarding, Hertz President Circle Status, Complimentary Upgrade List",
      "<b>Spend Perks:</b> Unlimited Sky Club visits after $75,000 spend, 1 MQD per $10 spend",
    ],
  },


  //****************************/
  //          Hilton Cards
  //****************************/

  8: {
    header: {
      text: "American Express Hilton Honors",
      link: amexhilhccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_hilton_honors.webp",
      link: amexhilhccv,
    },
    intro:
      "<b>Welcome Offer:</b> 80,000 points after spending $2,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 7x Hilton, 5x US Restaurants/US Gas Stations/US Supermarkets, 3x Base",
      "<b>Credits:</b> ",
      "<b>Automatic Perks:</b> Hilton Silver Status",
      "<b>Spend Perks:</b> Hilton Gold Status after $20,000 spend",
    ],
  },

  9: {
    header: {
      text: "American Express Hilton Honors Surpass",
      link: amexhilsccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_hilton_surpass.webp",
      link: amexhilsccv,
    },
    intro:
      "<b>Welcome Offer:</b> 130,000 points after spending $3,000 in 6 months",
    descriptions: [ 
      "<b>Annual Fee:</b> $150",
      "<b>Multipliers:</b> 12x Hilton, 6x US Restaurants/US Gas Stations/US Supermarkets, 4x Online Retail, 3x Base",
      "<b>Credits:</b> $50 Hilton each quarter",
      "<b>Automatic Perks:</b> Hilton Gold Status",
      "<b>Spend Perks:</b> Free Night Certificate after $15,000, Hilton Diamond Status after $40,000 spend",
    ],
  },

  10: {
    header: {
      text: "American Express Hilton Honors Aspire",
      link: amexhilaccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_hilton_aspire.webp",
      link: amexhilaccv,
    },
    intro:
      "<b>Welcome Offer:</b> 150,000 points after spending $6,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 7x Hilton, 5x US Restaurants/US Gas Stations/US Supermarkets, 3x Base",
      "<b>Credits:</b> $50 for flights per quarter, $200 at Hilton resorts semi-annually, annual $100 at Waldorf Astoria or Conrad Hotels",
      "<b>Automatic Perks:</b> 1 Hilton Free Night Certificate, Hilton Diamond Status, Clear, National Emerald Club Executive Status",
      "<b>Spend Perks:</b> 1 FNC after both $30,000 and $60,000 spend",
    ],
  },

  11: {
    header: {
      text: "American Express Hilton Honors Business",
      link: amexhilbccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_hilton_business.webp",
      link: amexhilbccv,
    },
    intro:
      "<b>Welcome Offer:</b> 130,000 points after spending 6,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 12x Hilton, 5x Base until $100,000, then 3x Base",
      "<b>Credits:</b> $60 Hilton each quarter",
      "<b>Automatic Perks:</b> Hilton Gold Status, National Emerald Club Executive Status",
      "<b>Spend Perks:</b> Hilton Diamond Status after $40,000 spend",
    ],
  },


  //****************************/
  //          United Cards
  //****************************/

  12: {
    header: {
      text: "Chase United Gateway",
      link: cungcc,
    },
    image: {
      src: "/assets/CCLogo/United_Gateway.webp",
      link: cungcc,
    },
    intro:
      "<b>Welcome Offer:</b> 30,000 miles after spending $1,000 and 10,000 miles after adding an authorized user card in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 2x United, Gas Stations, Local Transit and 1x Base",
      "<b>Automatic Perks:</b> 25% off United inflight purchases and Club premium drinks",
      "<b>Spend Perks:</b> 2 free checked bags after $10,000 spend",
    ],
  },

  13: {
    header: {
      text: "Chase United Explorer",
      link: cunecc,
    },
    image: {
      src: "/assets/CCLogo/United_Explorer.webp",
      link: cunecc,
    },
    intro:
      "<b>Welcome Offer:</b> 60,000 miles after spending $3,000 and 10,000 miles after adding an authorized user card in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $0 for the first year and $150 thereafter",
      "<b>Multipliers:</b> 2x United, Hotel Stays, Dining and 1x Base",
      "<b>Credits: </b> 2x $50 for United Hotels (used separately), $5 a month for ride share, $10 a month Instacart, $100 a year for JSX, 2x $25 for Avis or Budget car rental (used separately), $120 Global Entry/TSA Precheck/Nexus",
      "<b>Automatic Perks:</b> Free checked bag, 2 United Club passes, Group 2 boarding, Premier Upgrade Priority, expanded saver award availability, 25% off United inflight purchases and Club premium drinks",
      "<b>Spend Perks:</b> 10,000 mile award discount after $20,000 spend, 1 PQP per $20 up to 1,000 PQP",
    ],
  },

  14: {
    header: {
      text: "Chase United Business",
      link: cunbcc,
    },
    image: {
      src: "/assets/CCLogo/United_Business.webp",
      link: cunbcc,
    },
    intro:
      "<b>Welcome Offer:</b> 75,000 miles and 2,000 PQP after spending $5,000 and 10,000 miles after adding an employee card in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $0 for the first year and $150 thereafter",
      "<b>Multipliers:</b> 2x United, Gas Station, Dining Office Supply, Local Transit and 1x Base",
      "<b>Credits: </b> 2x $50 for United Hotels (used separately), $125 United Travel credit after 5 flights of $100 or more, $5 a month for ride share, $10 a month Instacart, $100 a year for JSX, 2x $25 for Avis or Budget car rental (used separately), $25 in FareLock, $120 Global Entry/TSA Precheck/Nexus",
      "<b>Automatic Perks:</b> 5,000 miles when holding a personal United card, Free checked bag, 2 United Club passes, Group 2 boarding, Premier Upgrade Priority, expanded saver award availability, 25% off United inflight purchases and Club premium drinks",
      "<b>Spend Perks:</b> 2 United continental US Economy Plus seat upgrades after $25,000 spend, 1 PQP per $20 up to 4,000 PQP",
    ],
  },

  15: {
    header: {
      text: "Chase United Quest",
      link: cunqcc,
    },
    image: {
      src: "/assets/CCLogo/United_Quest.webp",
      link: cunqcc,
    },
    intro:
      "<b>Welcome Offer:</b> 70,000 miles and 1,000 PQP after spending $4,000 and 10,000 miles after adding an authorized user card in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $350",
      "<b>Multipliers:</b> 3x United, 2x Other Travel, Dining and 1x Base",
      "<b>Credits: </b> $200 United Travel credit, $150 United Hotels or Renowned Hotels and Resorts, $8 a month ($12 in December) for ride share, $10 and 2x $5 a month Instacart (used separately), $150 a year for JSX, 2x $40 for Avis or Budget car rental (used separately), $120 Global Entry/TSA Precheck/Nexus",
      "<b>Automatic Perks:</b> 10,000 mile award discount, 2 Free checked bags, Group 2 boarding, Premier Upgrade Priority, expanded saver award availability, 25% off United inflight purchases and Club premium drinks",
      "<b>Spend Perks:</b> 10,000 mile award discount after $20,000 spend, 2 United continental US Economy Plus seat upgrades after $40,000 spend, 1 PQP per $20 up to 18,000 PQP",
    ],
  },

  16: {
    header: {
      text: "Chase United Club",
      link: cunccc,
    },
    image: {
      src: "/assets/CCLogo/United_Club.webp",
      link: cunccc,
    },
    intro:
      "<b>Welcome Offer:</b> 90,000 points after spending $5,000 and 10,000 miles after adding an authorized user card in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $695",
      "<b>Multipliers:</b> 5x Renowned Hotels and Resorts, 4x United, 2x Other Travel, Dining and 1x Base",
      "<b>Credits: </b> $200 United Hotels or Renowned Hotels and Resorts, $8 a month ($12 in December) for ride share, 2x $10 a month Instacart (used separately), $200 a year for JSX, 2x $50 for Avis or Budget car rental (used separately), $120 Global Entry/TSA Precheck/Nexus",
      "<b>Automatic Perks:</b> United Club Membership, 4 United Club Passes with All Access Membership, 10% discount on United saver awards within continental US and Canada, 1,500 PQP, 2 Free checked bags, IHG One Platinum, Avis President's Club, Instacart+, Group 2 boarding, Premier Upgrade Priority, expanded saver award availability, 25% off United inflight purchases and Club premium drinks",
      "<b>Spend Perks:</b> 10,000 mile award discount after $20,000 spend, All Access membership after $50,000 spend, 1 PQP per $15 up to 28,000 PQP",
    ],
  },

  17: {
    header: {
      text: "Chase United Club Business",
      link: cuncbcc,
    },
    image: {
      src: "/assets/CCLogo/United_Club_Business.webp",
      link: cuncbcc,
    },
    intro:
      "<b>Welcome Offer:</b> 80,000 points and 2,000 PQP after spending $5,000 and 10,000 miles after adding an authorized user card in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $695",
      "<b>Multipliers:</b> 5x Renowned Hotels and Resorts, 2x United, 1.5x Base",
      "<b>Credits: </b> $200 United Hotels or Renowned Hotels and Resorts, $8 a month ($12 in December) for ride share, 2x $10 a month Instacart (used separately), $200 a year for JSX, 2x $50 for Avis or Budget car rental (used separately), $120 Global Entry/TSA Precheck/Nexus",
      "<b>Automatic Perks:</b> United Club Membership, 4 United Club Passes with All Access Membership, 2 Free checked bags, Avis President's Club, Instacart+, Group 2 boarding, Premier Upgrade Priority, expanded saver award availability, $50 LifeLock, 25% off United inflight purchases and Club premium drinks",
      "<b>Spend Perks:</b> 10,000 mile award discount after $20,000 spend, 2 United global Economy Plus seat upgrades after $40,000 spend, All Access membership after $50,000 spend, 1 PQP per $15 up to 28,000 PQP",
    ],
  },


  //****************************/
  //          IHG Cards
  //****************************/
  18: {
    header: {
      text: "Chase IHG One Rewards Traveler",
      link: cihgtcc,
    },
    image: {
      src: "/assets/CCLogo/Chase_IHG_traveler.webp",
      link: cihgtcc,
    },
    intro:
      "<b>Welcome Offer:</b> 80,000 points after spending $2,000 in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 5x IHG Hotels and Resorts, 3x Dining, Utilities, Select Streaming Services, Gas Stations, 2x Base",
      "<b>Credits:</b> None",
      "<b>Automatic Perks:</b> IHG One Silver Elite Status, 4th Night Free, 20% Rewards Points Purchase Discount, Early Access to IHG Reward Night Sales",
      "<b>Spend Perks:</b> 10,000 bonus points after $10,000 spend, IHG One Gold Elite Status after $20,000 spend",
    ],
  },
  
  19: {
    header: {
      text: "Chase IHG One Rewards Premier",
      link: cihgpcc,
    },
    image: {
      src: "/assets/CCLogo/Chase_IHG_premier.webp",
      link: cihgpcc,
    },
    intro:
      "<b>Welcome Offer:</b> 140,000 points after spending $3,000 in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $95",
      "<b>Multipliers:</b> 10x IHG Hotels and Resorts, 5x Dining, Travel, Gas Stations, 3x Base",
      "<b>Credits:</b> $120 TSA Pre-check, Global Entry or Nexus",
      "<b>Automatic Perks:</b> 40,000 IHG Point Anniversary Free Night, IHG One Silver Platinum Status, 4th Night Free, $25 United Travel Bank cash every 6 months, 20% Rewards Points Purchase Discount, Early Access to IHG Reward Night Sales",
      "<b>Spend Perks:</b> 10,000 bonus points and $100 statement credit after $10,000 spend, IHG One Diamond Elite Status after $40,000 spend",
    ],
  },
  
  20: {
    header: {
      text: "Chase IHG One Rewards Premier Business",
      link: cihgbcc,
    },
    image: {
      src: "/assets/CCLogo/Chase_IHG_business.webp",
      link: cihgbcc,
    },
    intro:
      "<b>Welcome Offer:</b> 140,000 points after spending $3,000 in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $95",
      "<b>Multipliers:</b> 10x IHG Hotels and Resorts, 5x Dining, Social Media and Search Engine Advertising, Office Supply Stores, Gas Stations, 3x Base",
      "<b>Credits:</b> $120 TSA Pre-check, Global Entry or Nexus",
      "<b>Automatic Perks:</b> 40,000 IHG Point Anniversary Free Night, IHG One Silver Platinum Status, 4th Night Free, $25 United Travel Bank cash every 6 months, 20% Rewards Points Purchase Discount, Early Access to IHG Reward Night Sales",
      "<b>Spend Perks:</b> 10,000 bonus points and $100 statement credit after $10,000 spend, IHG One Diamond Elite Status after $40,000 spend",
    ],
  },
};

// function to display the table
function displayTable(number, container) {
  const tableData = tables[number];

  if (!tableData) {
    container.innerHTML = "<p>Invalid table number.</p>";
    return;
  }

  let html = "<table>";

  html += `
  <colgroup>
    <col style="width: 33%;">
    <col style="width: 67%;">
  </colgroup>
`;

  // Header with link
  html += "<thead><tr>";
  html += `<th colspan="2"><a href="${tableData.header.link}" target="_blank">${tableData.header.text}</a></th>`;
  html += "</tr></thead><tbody>";

  // First row: linked image with rowspan=6 and intro
  html += "<tr>";
  html += `<td rowspan="6"><a href="${tableData.image.link}" target="_blank"><img src="${tableData.image.src}" alt="Image"></a></td>`;
  html += `<td>${tableData.intro}</td>`;
  html += "</tr>";

  // Loop through remaining 5 description rows
  tableData.descriptions.forEach((desc) => {
    html += `<tr><td>${desc}</td></tr>`;
  });

  html += "</tbody></table>";
  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll("div[id^='table-container']");
  containers.forEach((container) => {
    const tableNumber = parseInt(container.dataset.table, 10);
    displayTable(tableNumber, container);
  });
});
