export interface productType {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: { text: string }[];
  includes: [
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    },
    {
      quantity: number;
      item: string;
    }
  ];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: [
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    },
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    },
    {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    }
  ];
}

// export interface productType {
//   id: number;
//   slug: string;
//   name: string;
//   images: {
//     mobile: string;
//     tablet: string;
//     desktop: string;
//   };
//   category: string;
//   new: boolean;
//   price: number;
//   description: string;
//   features: string;
//   includes: {
//     item: string;
//     quantity: number;
//   }[];
//   gallery: {
//     first: {
//       mobile: string;
//       tablet: string;
//       desktop: string;
//     };
//     second: {
//       mobile: string;
//       tablet: string;
//       desktop: string;
//     };
//     third: {
//       mobile: string;
//       tablet: string;
//       desktop: string;
//     };
//   };
//   others: {
//     slug: string;
//     name: string;
//     image: {
//       mobile: string;
//       tablet: string;
//       desktop: string;
//     };
//   }[];

//   categoryImage: {
//     mobile: string;
//     tablet: string;
//     desktop: string;
//   };
// }
