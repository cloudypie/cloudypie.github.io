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
