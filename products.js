const PRODUCTS = [
  {
    "id": 1,
    "category": "Women",
    "brand": "Aster",
    "name": "Everyday Linen Shirt",
    "price": 1299,
    "rating": 4.8,
    "tag": "New",
    "image": "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected everyday linen shirt from Aster. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 2,
    "category": "Women",
    "brand": "Mysa",
    "name": "Floral Midi Dress",
    "price": 1899,
    "rating": 4.7,
    "tag": "Bestseller",
    "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected floral midi dress from Mysa. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 3,
    "category": "Women",
    "brand": "North Nine",
    "name": "Relaxed Straight Jeans",
    "price": 1699,
    "rating": 4.6,
    "tag": "Trending",
    "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected relaxed straight jeans from North Nine. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 4,
    "category": "Women",
    "brand": "Studio June",
    "name": "Cotton Co-ord Set",
    "price": 2199,
    "rating": 4.8,
    "tag": "New",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected cotton co-ord set from Studio June. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 5,
    "category": "Women",
    "brand": "Aster",
    "name": "Ribbed Everyday Top",
    "price": 799,
    "rating": 4.5,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected ribbed everyday top from Aster. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 6,
    "category": "Women",
    "brand": "Mysa",
    "name": "Printed Wrap Skirt",
    "price": 1199,
    "rating": 4.6,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected printed wrap skirt from Mysa. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 7,
    "category": "Women",
    "brand": "June Edit",
    "name": "Oversized Blazer",
    "price": 2499,
    "rating": 4.7,
    "tag": "Editor's pick",
    "image": "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected oversized blazer from June Edit. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 8,
    "category": "Women",
    "brand": "Aster",
    "name": "Soft Knit Cardigan",
    "price": 1599,
    "rating": 4.5,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected soft knit cardigan from Aster. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 9,
    "category": "Men",
    "brand": "Common Ground",
    "name": "Classic Oxford Shirt",
    "price": 1499,
    "rating": 4.7,
    "tag": "Bestseller",
    "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected classic oxford shirt from Common Ground. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 10,
    "category": "Men",
    "brand": "North Nine",
    "name": "Everyday Chinos",
    "price": 1799,
    "rating": 4.6,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected everyday chinos from North Nine. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 11,
    "category": "Men",
    "brand": "Common Ground",
    "name": "Minimal Graphic Tee",
    "price": 699,
    "rating": 4.5,
    "tag": "New",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected minimal graphic tee from Common Ground. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 12,
    "category": "Men",
    "brand": "Field Notes",
    "name": "Lightweight Bomber",
    "price": 2699,
    "rating": 4.8,
    "tag": "Trending",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected lightweight bomber from Field Notes. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 13,
    "category": "Men",
    "brand": "North Nine",
    "name": "Textured Polo",
    "price": 999,
    "rating": 4.4,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected textured polo from North Nine. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 14,
    "category": "Men",
    "brand": "Common Ground",
    "name": "Weekend Hoodie",
    "price": 1399,
    "rating": 4.7,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected weekend hoodie from Common Ground. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 15,
    "category": "Men",
    "brand": "Field Notes",
    "name": "Smart Casual Trousers",
    "price": 1899,
    "rating": 4.6,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80",
    "description": "A thoughtfully selected smart casual trousers from Field Notes. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 16,
    "category": "Kids",
    "brand": "Little Loop",
    "name": "Playday Cotton Tee",
    "price": 499,
    "rating": 4.8,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    "description": "A thoughtfully selected playday cotton tee from Little Loop. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 17,
    "category": "Kids",
    "brand": "Little Loop",
    "name": "Rainbow Party Dress",
    "price": 999,
    "rating": 4.7,
    "tag": "New",
    "image": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=700&q=85",
    "description": "A thoughtfully selected rainbow party dress from Little Loop. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 18,
    "category": "Kids",
    "brand": "Tiny Trails",
    "name": "Comfy Joggers",
    "price": 699,
    "rating": 4.5,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    "description": "A thoughtfully selected comfy joggers from Tiny Trails. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 19,
    "category": "Kids",
    "brand": "Little Loop",
    "name": "Printed Shorts Set",
    "price": 799,
    "rating": 4.6,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=85",
    "description": "A thoughtfully selected printed shorts set from Little Loop. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  },
  {
    "id": 20,
    "category": "Kids",
    "brand": "Tiny Trails",
    "name": "Hooded Sweatshirt",
    "price": 899,
    "rating": 4.7,
    "tag": "",
    "image": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
    "description": "A thoughtfully selected hooded sweatshirt from Tiny Trails. Designed to add comfort and personality to your everyday edit.",
    "reviews": [
      {
        "name": "Ananya",
        "rating": 5,
        "text": "Really lovely quality and looks just like the pictures. Great value!"
      },
      {
        "name": "Riya",
        "rating": 4,
        "text": "Nice finish and comfortable to use. Delivery was smooth."
      }
    ]
  }
];
