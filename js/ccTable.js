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
      "<b>Welcome Offer:</b> 70,000 SkyMiles after spending $3,000 in 6 months and 20,000 SkyMiles after spending $5,000 in 6 months",
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
      "<b>Welcome Offer:</b> 90,000 SkyMiles after spending $6,000 in 6 months",
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
      "<b>Welcome Offer:</b> 80,000 SkyMiles after spending $4,000 in 6 months and 20,000 SkyMiles after spending $6,000 in 6 months",
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
      "<b>Welcome Offer:</b> 100,000 SkyMiles after spending $8,000 in 6 months",
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
      "<b>Welcome Offer:</b> 1000,000 SkyMiles after spending $6,000 in 6 months and 25,000 SkyMiles after spending $9,000 in 6 months",
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
      "<b>Welcome Offer:</b> 125,000 SkyMiles after spending $15,000 in 6 months",
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
      "<b>Spend Perks:</b> free night award after $15,000, Hilton Diamond Status after $40,000 spend",
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
      "<b>Automatic Perks:</b> 1 Hilton free night award, Hilton Diamond Status, Clear, National Emerald Club Executive Status",
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
      "<b>Welcome Offer:</b> 70,000 miles after spending $3,000 and 10,000 miles after adding an authorized user card in 3 months",
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
      "<b>Welcome Offer:</b> 100,000 points and 2,000 PQP after spending $5,000 and 10,000 miles after adding an authorized user card in 3 months",
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
      "<b>Welcome Offer:</b> 80,000 miles and 3,000 PQP after spending $4,000 and 10,000 miles after adding an authorized user card in 3 months",
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
      "<b>Welcome Offer:</b> 100,000 points and 2,000 PQP after spending $5,000 and 10,000 miles after adding an authorized user card in 3 months",
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
      "<b>Welcome Offer:</b> 90,000 points after spending $2,000 in 3 months and additional 3x points per dollar, up to $10,000, in 6 months",
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
      "<b>Welcome Offer:</b> 175,000 points after spending $5,000 in 3 months",
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




  //****************************/
  //         Bilt Cards
  //****************************/
  21: {
    header: {
      text: "Bilt Blue",
      link: biltbcc,
    },
    image: {
      src: "/assets/CCLogo/Bilt_blue.webp",
      link: biltbcc,
    },
    intro:
      "<b>Welcome Offer:</b> $100 Bilt cash upon approval",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 1x Base, 4% Bilt cash Base",
      "<b>Credits:</b> None",
      "<b>Automatic Perks:</b> None",
      "<b>Spend Perks:</b> None",
    ],
  },
  
  22: {
    header: {
      text: "Bilt Obsidian",
      link: biltocc,
    },
    image: {
      src: "/assets/CCLogo/Bilt_obsidian.webp",
      link: biltocc,
    },
    intro:
      "<b>Welcome Offer:</b> $200 Bilt cash upon approval",
    descriptions: [
      "<b>Annual Fee:</b> $95",
      "<b>Multipliers:</b> 3x Groceries or Dining, 2x travel, 1x Base, 4% Bilt cash everything",
      "<b>Credits:</b> 2x $50 Bilt Hotels",
      "<b>Automatic Perks:</b> None",
      "<b>Spend Perks:</b> None",
    ],
  },

  23: {
    header: {
      text: "Bilt Palladium",
      link: biltpcc,
    },
    image: {
      src: "/assets/CCLogo/Bilt_palladium.webp",
      link: biltpcc,
    },
    intro:
      "<b>Welcome Offer:</b> 50,000x Bilt points and Bilt Gold status after spending $4,000 in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $495",
      "<b>Multipliers:</b> 2x Base, 4% Bilt cash Base",
      "<b>Credits:</b> $200 Bilt Cash, 2x $200 Bilt Hotels",
      "<b>Automatic Perks:</b> Priority Pass",
      "<b>Spend Perks:</b> None",
    ],
  },

  //****************************/
  //          Marriott Cards
  //****************************/
  
  24: {
    header: {
      text: "American Express Marriott Bonvoy"
    },
    image: {
      src: "/assets/CCLogo/Amex_marriott_bonvoy.webp"
    },
    intro:
      "Only Available via product change",
    descriptions: [
      "<b>Annual Fee:</b> $99",
      "<b>Multipliers:</b> 6x Marriott, 2x Base",
      "<b>Automatic Perks:</b> 35,000 Marriott Free Night Award",
      "<b>Spend Perks:</b> 1 Elite Night Credit every $5,000, Marriott Gold after $35,000 spend",
    ],
  },

  25: {
    header: {
      text: "American Express Bonvoy Bevy",
      link: amexmarbeccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_marriott_bevy.webp",
      link: amexmarbeccv,
    },
    intro:
      "<b>Welcome Offer:</b> 85,000 miles after spending $5,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $250",
      "<b>Multipliers:</b> 6x Marriott, 4x Restaurants, US Supermarkets and 2x Base",
      "<b>Automatic Perks:</b> 1,000 bonus Marriott points for every stay, Marriott Gold elite, 15 qualifying night credits",
      "<b>Spend Perks:</b> 1 50,000 Marriott point free night award after $15,000 spend",
    ],
  },


  26: {
    header: {
      text: "American Express Bonvoy Brilliant",
      link: amexmarbrccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_marriott_brilliant.webp",
      link: amexmarbrccv,
    },
    intro:
      "<b>Welcome Offer:</b> 100,000 miles after spending $6,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $650",
      "<b>Multipliers:</b> 6x Marriott, 3x Flights, Restaurants and 2x Base",
      "<b>Credits:</b> $25 per month dining, $100 for minimum 2 night stay at Ritz Carlton or St Regis, $120 TSA Precheck/Global Entry",
      "<b>Automatic Perks:</b> 85,000 point free night award, Marriott Platinum elite, 25 qualifying night credits, Priority Pass",
      "<b>Spend Perks:</b> Brilliant Earned Choice Award after $60,000 spend",
    ],
  },

  27: {
    header: {
      text: "American Express Bonvoy Business",
      link: amexmarbuccv,
    },
    image: {
      src: "/assets/CCLogo/Amex_marriott_business.webp",
      link: amexmarbuccv,
    },
    intro:
      "<b>Welcome Offer:</b> 3x 50,000 point Free Night Award after spending $6,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $125",
      "<b>Multipliers:</b> 6x Marriott, 4x Restaurants, US Gas, Phone Services, Shipping and 2x Base",
      "<b>Credits:</b> $25 per month dining, $100 for minimum 2 night stay at Ritz Carlton or St Regis, $120 TSA Precheck/Global Entry",
      "<b>Automatic Perks:</b> 35,000 Marriott Free Night Award, 7% room rate discount, Marriott Gold, 15 qualifying night credits",
      "<b>Spend Perks:</b> 35,000 Marriott Free Night Award after $60,000 spend",
    ],
  },

  28: {
    header: {
      text: "Chase Bonvoy Bold",
      link: cmarblccv,
    },
    image: {
      src: "/assets/CCLogo/Chase_marriott_bold.webp",
      link: cmarblccv,
    },
    intro:
      "<b>Welcome Offer:</b> 2x 50,000 point Free Night Award after spending $1,000 in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $0",
      "<b>Multipliers:</b> 3x Marriott, 2x Groceries, Rideshare, Food Delivery, Select streaming, Internet, Cable, Phone Services, and 1x Base",
      "<b>Automatic Perks:</b> 0.8 cpp Pay Yourself Back ($750/year max), Marriott Silver, 5 qualifying night credits",
      "<b>Spend Perks:</b> 35,000 Marriott Free Night Award after $60,000 spend",
    ],
  },

  29: {
    header: {
      text: "Chases Bonvoy Boundless",
      link: cmarbuccv,
    },
    image: {
      src: "/assets/CCLogo/Chase_marriott_boundless.webp",
      link: cmarbuccv,
    },
    intro:
      "<b>Welcome Offer:</b> 5x 50,000 point Free Night Award after spending $3,000 in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $95",
      "<b>Multipliers:</b> 6x Marriott, 3x Groceries, Gas, and Dining, and 2x Base",
      "<b>Automatic Perks:</b> 35,000 Marriott Free Night Award, Marriott Silver, 5 qualifying night credits",
      "<b>Spend Perks:</b> 1 Elite Night Credit every $5,000, Marriott Gold after $35,000 spend",
    ],
  },

  30: {
    header: {
      text: "Chase Bonvoy Bountiful",
      link: cmarbnccv,
    },
    image: {
      src: "/assets/CCLogo/Chase_marriott_bountiful.webp",
      link: cmarbnccv,
    },
    intro:
      "<b>Welcome Offer:</b> 85,000 miles after spending $4,000 in 3 months",
    descriptions: [
      "<b>Annual Fee:</b> $250",
      "<b>Multipliers:</b> 6x Marriott, 4x Restaurants, US Supermarkets (up to $15,000 a year) and 2x Base",
      "<b>Automatic Perks:</b> 1,000 bonus Marriott points for every stay, Marriott Gold elite, 15 qualifying night credits",
      "<b>Spend Perks:</b> 1 50,000 Marriott point free night award after $15,000 spend",
    ],
  },

  31: {
    header: {
      text: "Chase Ritz Carlton",
      link: cmarrcccv,
    },
    image: {
      src: "/assets/CCLogo/Chase_ritz_carlton.webp",
      link: cmarrcccv,
    },
    intro:
      "<b>Only Available via Product Change</b>",
    descriptions: [
      "<b>Annual Fee:</b> $450",
      "<b>Multipliers:</b> 6x Marriott, 3x Dining, Car Rentals, Airlines, and 2x Base",
      "<b>Credits:</b> $300 airline incidental fee, $100 for minimum 2 night stay at Ritz Carlton or St Regis, $120 TSA Precheck/Global Entry",
      "<b>Automatic Perks:</b> 85,000 point free night award, Marriott Gold elite, 15 qualifying night credits, Priority Pass, Sapphire Lounge Access, Unlimited Authorized Users with lounge access",
      "<b>Spend Perks:</b> Marriott Platinum status after $75,000 spend",
    ],
  },

  32: {
    header: {
      text: "Chase World of Hyatt",
      link: chyahccv,
    },
    image: {
      src: "/assets/CCLogo/Chase_hyatt.webp",
      link: chyahccv,
    },
    intro:
      "<b>Welcome Offer:</b> 3 free nights after spending $5,000 in 3 months and 2 free nights after spending $15,000 in 6 months",
    descriptions: [
      "<b>Annual Fee:</b> $95",
      "<b>Multipliers:</b> 4x Hyatt, 2x Restaurants, Airlines, Transit, Fitness clubs/gyms, and 1x Base",
      "<b>Automatic Perks:</b> Category 1–4 Hyatt Free Night Certificate, Discoverist status, 5 qualifying night credits",
      "<b>Spend Perks:</b> Category 1–4 Hyatt Free Night Certificate after $15,000 spend, 2 qualifying night credits after each $5,000 in spend",
    ],
  },

  33: {
    header: {
      text: "Chase World of Hyatt Business",
      link: chyabccv,
    },
    image: {
      src: "/assets/CCLogo/Chase_hyatt_business.webp",
      link: chyabccv,
    },
    intro:
      "<b>60,000 bonus points after spending $5,000 in 3 months</b>",
    descriptions: [
      "<b>Annual Fee:</b> $199",
      "<b>Multipliers:</b> 4x Hyatt, 2x on top 3 spending categories (Dining, Shipping, Airlines, Transit, Advertising, Car Rental, Gas, Internet, Cable, Phone Services), and 1x Base",
      "<b>Credits:</b> 2x $50 Hyatt for spending $50 each time",
      "<b>Automatic Perks:</b> Hyatt Leverage Membership (up to 15% discount), Discoverist status",
      "<b>Spend Perks:</b> 5 qualifying night credits after each $10,000 in spend (up to $50,000 a year), 10% redemption bonus up to 200,000 points after $50,000 in spend",
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
