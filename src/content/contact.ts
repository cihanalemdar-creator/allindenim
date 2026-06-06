export type OfficeLocation = {
  name: string;
  addressLines: string[];
  phone?: string;
  country: string;
  schema: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
};

export const legalCompanyName = "ALL IN DENIM, INC";

export const contactEmail = "usa@allindenim.com";

export const phoneNumbers = [
  {
    label: "Turkey Phone",
    value: "+90 (212) 909 87 05",
    href: "tel:+902129098705"
  },
  {
    label: "Turkey Phone",
    value: "+90 (850) 522 34 03",
    href: "tel:+908505223403"
  },
  {
    label: "UK Office",
    value: "+44 20 3307 5591",
    href: "tel:+442033075591"
  },
  {
    label: "USA Office",
    value: "+1 (315) 602 31 61",
    href: "tel:+13156023161"
  }
];

export const officeLocations: OfficeLocation[] = [
  {
    name: "Head Office",
    country: "Turkey",
    addressLines: [
      "EGS Business Park - Yesilkoy",
      "B-1 Blok No: 57, PK 34149",
      "Istanbul - Turkey"
    ],
    phone: "+90 (212) 909 87 05",
    schema: {
      streetAddress: "EGS Business Park - Yesilkoy B-1 Blok No: 57",
      addressLocality: "Istanbul",
      postalCode: "34149",
      addressCountry: "TR"
    }
  },
  {
    name: "UK Office",
    country: "United Kingdom",
    addressLines: ["71-75 Shelton Street", "Covent Garden", "London"],
    phone: "+44 20 3307 5591",
    schema: {
      streetAddress: "71-75 Shelton Street, Covent Garden",
      addressLocality: "London",
      addressCountry: "GB"
    }
  },
  {
    name: "USA Office / Registered Company",
    country: "United States",
    addressLines: [legalCompanyName, "1402 Ave K, 3G", "Brooklyn, NY 11230"],
    phone: "+1 (315) 602 31 61",
    schema: {
      streetAddress: "1402 Ave K, 3G",
      addressLocality: "Brooklyn",
      addressRegion: "NY",
      postalCode: "11230",
      addressCountry: "US"
    }
  },
  {
    name: "Uzbekistan Office",
    country: "Uzbekistan",
    addressLines: ["Oybek street 18/1", "Tashkent 100015", "Uzbekistan"],
    schema: {
      streetAddress: "Oybek street 18/1",
      addressLocality: "Tashkent",
      postalCode: "100015",
      addressCountry: "UZ"
    }
  },
  {
    name: "Netherlands Office",
    country: "Netherlands",
    addressLines: ["Grevelingenstraat 11-1", "1078KM Amsterdam"],
    schema: {
      streetAddress: "Grevelingenstraat 11-1",
      addressLocality: "Amsterdam",
      postalCode: "1078KM",
      addressCountry: "NL"
    }
  }
];
