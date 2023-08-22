// accomodation.ts

export interface Accomodations {
    id: number;
    title: string;
    imageUrl: string;
    locationUrl: string;
    price: number;
    description: string;
    locationName: string;
    propertyType: string;
    facilities: [string, string, string];
    roomFacility: [string, string, string];
    leisure: [string, string];
  }


  
  export const accomodationList: Accomodations[] = [
    { 
      id: 1,
      title: "Fitzroy London",
      imageUrl: "../src/assets/images/accomodation/accomodation.png",
      locationUrl: "https://www.google.com/maps/place/New+York",
      description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
      price: 345,
      locationName: "New York",
      propertyType: "Hotels",
      facilities: ["Cars", "Room Service", "Swimming pool"],
      roomFacility: ["Shower", "Sofa", "Kitchen"],
      leisure: ["Shower", "Sofa"]
    },
    { 
      id: 2,
      title: "The Tower London",
      imageUrl: "../../assets/images/accomodation/accomodation1.png",
      locationUrl: "https://www.google.com/maps/place/London",
      description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
      price: 565,
      locationName: "London",
      propertyType: "Hotels",
      facilities: ["Swimming pool", "Facility guests", "Room Service"],
      roomFacility: ["Private pool", "Sofa", "Flat screen TV"],
      leisure: ["Walking hours", "Beach"]
    },
    { 
      id: 3,
      title: "The MaryleBone",
      imageUrl: "../../assets/images/accomodation/accomodation2.png",
      locationUrl: "https://www.google.com/maps/place/Paris",
      description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
      price: 345,
      locationName: "Paris",
      propertyType: "Apartments",
      facilities: ["Cars", "Family rooms", "Airport Shuttles"],
      roomFacility: ["Air Conditioning", "Private Bathroom", "Kitchen"],
      leisure: ["Beach", "Happy hour"]
    },
    
      { 
        id: 4,
        title: "IHG Hotel",
        imageUrl: "../../assets/images/accomodation/accomodation3.png",
        locationUrl: "https://www.google.com/maps/place/Tokyo",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 434,
        locationName: "Tokyo",
        propertyType: "Hotels",
        facilities: ["Room Service", "Swimming pool", "Family rooms"],
        roomFacility: ["Flat screen TV", "Shower", "Private pool"],
        leisure: ["Happy hour", "Walking hours"]
      },
      { 
        id: 5,
        title: "Thistle Piccadilly",
        imageUrl: "../../assets/images/accomodation/accomodation4.png",
        locationUrl: "https://www.google.com/maps/place/Barcelona",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 645,
        locationName: "Barcelona",
        propertyType: "Resort",
        facilities: ["Swimming pool", "Airport shuttles", "Room service"],
        roomFacility: ["Private pool", "Sofa", "Coffee machine"],
        leisure: ["Beach", "Walking hours"]
      },
      { 
        id: 6,
        title: "Ario Nomad",
        imageUrl: "../../assets/images/accomodation/accomodation5.png",
        locationUrl: "https://www.google.com/maps/place/Dubai",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 235,
        locationName: "Dubai",
        propertyType: "Bed and Breakfast",
        facilities: ["Cars", "Facilities guests", "Room service"],
        roomFacility: ["Private pool", "Sofa", "Air conditioning"],
        leisure: ["Happy hour", "Beach"]
      },
      { 
        id: 7,
        title: "Grand Central",
        imageUrl: "../../assets/images/accomodation/accomodation6.png",
        locationUrl: "https://www.google.com/maps/place/New+York",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 445,
        locationName: "New York",
        propertyType: "Hotels",
        facilities: ["Family rooms", "Room service", "Cars"],
        roomFacility: ["Shower", "Sofa", "Kitchen"],
        leisure: ["Beach", "Happy hour"]
      },
      { 
        id: 8,
        title: "Boutique At Grand Central",
        imageUrl: "../../assets/images/accomodation/accomodation7.png",
        locationUrl: "https://www.google.com/maps/place/Accra",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 645,
        locationName: "Accra",
         propertyType: "Hotels",
        facilities: ["Airport shuttles", "Family rooms", "Swimming pool"],
        roomFacility: ["Private bathroom", "Sofa", "Shower"],
       leisure: ["walking hours", "Happy hour"]
      },
      { 
        id: 9,
        title: "Nature Park Hotel",
        imageUrl: "../../assets/images/accomodation/accomodation8.png",
        locationUrl: "https://www.google.com/maps/place/Cape+Town",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 556,
        locationName: "Cape Town",
         propertyType: "Apartments",
        facilities: ["Swimming pool", "Facilities quests", "Family rooms"],
        roomFacility: ["Private pool", "Hair dryer", "Flat screen TV"],
        leisure: ["Beach", "Walking hours"]
      },
      { 
        id: 10,
        title: "Even Midtwon East - Grand Central",
        imageUrl: "../../assets/images/accomodation/accomodation9.png",
        locationUrl: "https://www.google.com/maps/place/New+York",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 456,
        locationName: "New York",
         propertyType: "Resort",
        facilities: ["Swimming pool", "Room service", "Airport shuttles"],
         roomFacility: ["Air conditioning", "Sofa", "Kitchen"],
        leisure: ["Beach", "Happy hour"]
      },
      { 
        id: 11,
        title: "Kelivn Joyner",
        imageUrl: "../../assets/images/accomodation/accomodation10.png",
        locationUrl: "https://www.google.com/maps/place/Rome",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 335,
        locationName: "Rome",
         propertyType: "Hotels",
        facilities: ["Cars", "Facilities guests", "Airport shuttles"],
        roomFacility: ["Shower", "Coffee machine", "Hair dryer"],
        leisure: ["Beach", "Walking Hours"]
      },
      { 
        id: 12,
        title: "Grand Bay",
        imageUrl: "../../assets/images/accomodation/accomodation11.png",
        locationUrl: "https://www.google.com/maps/place/Sydney",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 345,
        locationName: "Sydney",
         propertyType: "Resort",
        facilities: ["Family rooms", "Swimming pool", "Room service"],
        roomFacility: ["Air conditioning", "Private bathroom", "Kitchen"],
        leisure: ["Walking hours", "Beach"]
      },
      { 
        id: 13,
        title: "Centrak Colin",
        imageUrl: "../../assets/images/accomodation/accomodation12.png",
        locationUrl: "https://www.google.com/maps/place/Bangkok",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 545,
        locationName: "Bangkok",
         propertyType: "Hotels",
        facilities: ["Swimming pool", "Cars", "Room service"],
        roomFacility: ["Flat screen TV", "Private pool", "Coffee machine"],
        leisure: ["Happy hour", "beach"]
      },
      { 
        id: 14,
        title: "Garth Fort and palace",
        imageUrl: "../../assets/images/accomodation/accomodation13.png",
        locationUrl: "https://www.google.com/maps/place/Dubai",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 445,
        locationName: "Dubai",
         propertyType: "Hotels",
        facilities: ["Swimming pool", "Cars", "Room service"],
       roomFacility: ["Private bathroom", "Sofa", "Kitchen"],
        leisure: ["Waliking hours", "Beach"]
      },
      { 
        id: 15,
        title: "Hatice Central",
        imageUrl: "../../assets/images/accomodation/accomodation14.png",
        locationUrl: "https://www.google.com/maps/place/Naples",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 456,
        locationName: "Naples",
        propertyType: "Hotels",
        facilities: ["Family rooms", "Airport Shuttles", "Room service"],
        roomFacility: ["Cofffee machine", "Sofa", "Hair dryer"],
        leisure: ["Beach", "Walking hours"]
      },
      { 
        id: 16,
        title: "Van Zy Nomad",
        imageUrl: "../../assets/images/accomodation/accomodation15.png",
        locationUrl: "https://www.google.com/maps/place/Dubai",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 235,
        locationName: "Dubai",
         propertyType: "Bed and Breakfast",
        facilities: ["Cars", "Family rooms", "Facilities guests"],
        roomFacility: ["Shower", "Private pool", "Air conditioning"],
        leisure: ["Walking hours", "Happy hour"]
      },
      { 
        id: 17,
        title: "Oasis Home",
        imageUrl: "../../assets/images/accomodation/accomodation16.png",
        locationUrl: "https://www.google.com/maps/place/Madrid",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 445,
        locationName: "Madrid",
         propertyType: "Resort",
        facilities: ["Swimming pool", "Family rooms", "Room service"],
        roomFacility: ["Hair dryer", "Shower", "Flat screen TV"],
        leisure: ["Happy hour", "Beach"]
      },
      { 
        id: 18,
        title: "4 Seasons Central",
        imageUrl: "../../assets/images/accomodation/accomodation17.png",
        locationUrl: "https://www.google.com/maps/place/Lagos",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 645,
        locationName: "Lagos",
         propertyType: "Hotels",
        facilities: ["Room service", "Airport shuttles", "swimming pool"],
       roomFacility: ["Private pool", "Kitchen", "Private bathroom"],
        leisure: ["Beach", "Walking hours"]
      },
      { 
        id: 19,
        title: "Moderne Wang",
        imageUrl: "../../assets/images/accomodation/accomodation18.png",
        locationUrl: "https://www.google.com/maps/place/Cape+Town",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 445,
        locationName: "Cape Town",
        propertyType: "Apartments",
        facilities: ["Swimming pool", "Cars", "Room service"],
        roomFacility: ["Private bathroom", "Sofa", "Kitchen"],
        leisure: ["Walking hours", "Happy hours"]
      },
      { 
        id: 20,
        title: "Juan Castro",
        imageUrl: "../../assets/images/accomodation/accomodation19.png",
        locationUrl: "https://www.google.com/maps/place/Vancouver",
        description: "Lorem ipsum dolor sit amet consectetur. Fermentum in tortor mattis viverra iaculis nibh. Ac ultrices aliquet est facilisi fusce enim quis id felis.",
        price: 845,
        locationName: "Vancouver",
        propertyType: "Hotel",
        facilities: ["Family rooms", "Room Service", "Airpot Shuttles"],
        roomFacility: ["Hair dryer", "Private pool", "Coffee Machine"],
        leisure: ["Beach", "Happy hour"]
      }  
  ];
  