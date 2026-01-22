import productImg1 from "@/assets/product-galouti-1.jpg";
import productImg2 from "@/assets/product-galouti-2.jpg";
import productImg3 from "@/assets/product-galouti-3.jpg";
import productKorma from "@/assets/product-korma.jpg";
import productBhuna from "@/assets/product-bhuna.jpg";

export interface PackSize {
  count: number;
  price: number;
}

export type TagType = "bestseller" | "chefSpecial" | "topPick" | "new" | "limited";

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  packSizes: PackSize[];
  tagType?: TagType;
  ingredients?: string[];
  servingSize?: string;
  cookingTime?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mutton Galouti Kebab",
    description: "Melt-in-your-mouth delicacy from the royal kitchens of Lucknow. Made with finest mutton and 160 spices.",
    longDescription: "A legendary creation from the royal kitchens of Awadh, the Galouti Kebab was crafted for a toothless Nawab who craved the finest meat delicacies. Our kebabs continue this tradition, using the finest mutton minced to perfection and marinated with a secret blend of 160 aromatic spices.",
    image: productImg1,
    packSizes: [
      { count: 1, price: 299 },
      { count: 3, price: 799 },
      { count: 5, price: 1249 },
    ],
    tagType: "bestseller",
    ingredients: ["Premium Mutton", "Raw Papaya", "Cashew Paste", "160 Royal Spices", "Clarified Butter"],
    servingSize: "4 pieces per pack",
    cookingTime: "5-7 minutes",
  },
  {
    id: "2",
    name: "Chicken Shammi Kebab",
    description: "Succulent minced chicken kebabs infused with aromatic spices. A royal treat for your taste buds.",
    longDescription: "These exquisite kebabs are made from finely minced chicken combined with roasted chana dal and a harmonious blend of whole spices. Pan-fried to golden perfection, each bite reveals layers of flavor that have delighted royalty for centuries.",
    image: productImg2,
    packSizes: [
      { count: 1, price: 249 },
      { count: 3, price: 649 },
      { count: 5, price: 999 },
    ],
    tagType: "chefSpecial",
    ingredients: ["Tender Chicken", "Roasted Chana Dal", "Fresh Herbs", "Aromatic Spices", "Ghee"],
    servingSize: "4 pieces per pack",
    cookingTime: "4-6 minutes",
  },
  {
    id: "3",
    name: "Seekh Kebab Royale",
    description: "Hand-rolled skewered kebabs with a perfect blend of herbs and spices. Grilled to perfection.",
    longDescription: "Our Seekh Kebabs are hand-rolled with precision and care, combining premium minced meat with fresh herbs and a signature spice blend. Grilled over open flames, they offer a smoky, succulent experience worthy of royal feasts.",
    image: productImg3,
    packSizes: [
      { count: 1, price: 279 },
      { count: 3, price: 749 },
      { count: 5, price: 1149 },
    ],
    tagType: "new",
    ingredients: ["Select Mutton Mince", "Fresh Coriander", "Mint Leaves", "Green Chilies", "Ginger-Garlic"],
    servingSize: "4 pieces per pack",
    cookingTime: "6-8 minutes",
  },
  {
    id: "4",
    name: "Mutton Korma",
    description: "Rich and creamy mutton curry cooked in a royal cashew and cream gravy with aromatic spices.",
    longDescription: "A regal preparation where tender mutton pieces are slow-cooked in a velvety gravy of cashews, cream, and exotic spices. Garnished with dried fruits and rose petals, this dish embodies the opulence of Mughlai cuisine.",
    image: productKorma,
    packSizes: [
      { count: 1, price: 349 },
      { count: 3, price: 949 },
      { count: 5, price: 1449 },
    ],
    tagType: "topPick",
    ingredients: ["Premium Mutton", "Cashew Paste", "Fresh Cream", "Saffron", "Dry Fruits", "Rose Water"],
    servingSize: "Serves 2-3",
    cookingTime: "8-10 minutes",
  },
  {
    id: "5",
    name: "Mutton Bhuna Gosht",
    description: "Slow-cooked spiced mutton in a rich, caramelized onion and tomato masala. Rustic and robust.",
    longDescription: "This rustic delicacy features succulent mutton pieces cooked low and slow with caramelized onions, ripe tomatoes, and a bold spice blend. The bhuna technique creates a thick, clinging masala that coats each piece with intense, concentrated flavors.",
    image: productBhuna,
    packSizes: [
      { count: 1, price: 329 },
      { count: 3, price: 899 },
      { count: 5, price: 1349 },
    ],
    tagType: "limited",
    ingredients: ["Tender Mutton", "Caramelized Onions", "Tomatoes", "Whole Spices", "Fresh Ginger", "Turmeric"],
    servingSize: "Serves 2-3",
    cookingTime: "8-10 minutes",
  },
];
