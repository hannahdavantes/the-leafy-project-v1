const SUN_EXPOSURE = {
  direct: "Direct Light",
  indirect: "Bright Indirect Light",
  low: "Medium to Low Light",
};

const WHEN_TO_WATER = {
  dry: "Let dry between through watering",
  almost_dry: "Water when 60%-80% dry",
  moist: "Keep soil moist",
};

const HUMIDITY = {
  low: "Low",
  med: "Medium",
  high: "High",
};

function getCareInstructions(category) {
  switch (category) {
    case "Aglaonema":
      return {
        sun_exposure: SUN_EXPOSURE.indirect,
        when_to_water: WHEN_TO_WATER.almost_dry,
        humidity_level: HUMIDITY.high,
      };
    case "Alocasia":
      return {
        sun_exposure: SUN_EXPOSURE.indirect,
        when_to_water: WHEN_TO_WATER.moist,
        humidity_level: HUMIDITY.high,
      };
    case "Diffenbachia":
      return {
        sun_exposure: SUN_EXPOSURE.bright,
        when_to_water: WHEN_TO_WATER.almost_dry,
        humidity_level: HUMIDITY.med,
      };
    case "Sanseviera":
      return {
        sun_exposure: SUN_EXPOSURE.low,
        when_to_water: WHEN_TO_WATER.dry,
        humidity_level: HUMIDITY.low,
      };
    default:
      return {
        sun_exposure: SUN_EXPOSURE.indirect,
        when_to_water: WHEN_TO_WATER.dry,
        humidity_level: HUMIDITY.med,
      };
  }
}

export const products = [
  {
    category_name: "Aglaonema",
    product_name: "Harlequin",
    description:
      "The Aglaonema Harlequin, an enchanting indoor plant prized for its captivating foliage. Belonging to the Chinese Evergreen family and native to Southeast Asia. This stunning plant thrives exclusively indoors.  Aglaonema Harlequin Plant is broad, lance-shaped leaves adorned in a mesmerizing pattern of light and dark green, often complemented by shades of pink, red, or cream, it's a visual delight.",
    //https://lalitenterprise.com/products/aglaonema-harlequin-harlequin-chinese-evergreen-plant?srsltid=AfmBOorw4CiCRq9Ml0suNzwp5MGVikASAqCsYZlXODMqTE8TYnnsxV44
    image: "aglaonema-harlequin.jpg",
    //https://elysianflora.com/wp-content/uploads/2022/07/aglaonema-harlequin-2.jpg
    care_instructions: getCareInstructions("Aglaonema"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 4,
        price: 20,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 2,
        price: 25,
      },
    ],
  },
  {
    category_name: "Aglaonema",
    product_name: "Pictum Tricolor",
    description:
      "Aglaonema Pictum Tricolour, aka Chinese Evergreen Tricolour or the Camouflage Plant, is an incredibly unique species of Aglaonema with, as the name suggests, three different colours on its leaves. The dark green, bright green and muted silver come together to create an incredible camouflage effect. The leaves are oval-shaped and have a soft, velvety texture, adding to its unique aesthetic appeal. Native to the tropical rainforests of Southeast Asia, Aglaonema pictum 'Tricolor' is not only beautiful but also an excellent air purifier, making it a popular choice for both home and office environments",
    //https://jomostudio.com/products/aglaonema-pictum-tricolor?srsltid=AfmBOopAXKAKUQ7FILTGJUHqhAli7ifGAzIC5A9SmQW2nqpxu1Ef6UdA
    image: "aglaonema-pictum-tricolor.jpg",
    //https://i.redd.it/uaqw9so4z8b71.jpg
    care_instructions: getCareInstructions("Aglaonema"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 4,
        price: 70,
      },
    ],
  },
  {
    category_name: "Alocasia",
    product_name: "Frydek Variegated",
    description:
      "Alocasia Frydek Variegata, aka Variegated Alocasia Frydek, scientifically known as Alocasia Micholitziana 'Frydek' Variegata, is a stunning, rare variety of Alocasia that catches the eye with its striking variegated foliage. Its glossy, arrow-shaped leaves are a deep green colour, contrasted by dramatic, white to cream variegation that follows the veins of the leaf, providing an artistic flair. The leaf undersides are a deep burgundy, adding another layer of colour contrast. This plant's impressive size and intricate leaf design make it an exceptional focal point in any home.",
    //https://jomostudio.com/products/alocasia-frydek-variegata?srsltid=AfmBOorCMcTuFtBLfe9tu-nKEJrPRFVnYVXgNgCUVhr9ESvYgDZ2X5WM
    image: "alocasia-frydek-variegated.jpg",
    //https://www.google.com/search?sca_esv=e932d54e1e9f25e9&rlz=1C1CHBF_enCA991CA991&sxsrf=AHTn8zr9TRom1lRUw--FC8DDJ56RQ1FMmw:1740874492632&q=alocasia+frydek+variegated&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBsxayPSIAqObp_AgjkUGqel3rTRMIJGV_ECIUB00muput9Zp8VMKUi0ZjqPs3JlrgPeFrAnFlUitTiL3WcJlFn10ZVAeuxL5fSn-ULNu9lz3DIW3cy7rkKNmgHapdAFAoBFSl5-LQE_swXRSgVvZGy87KiusPiw1DSGvVAMCLf6f2K4DEg&sa=X&ved=2ahUKEwj7mO3tjuqLAxW9HzQIHT5ZE8EQtKgLegQIFRAB&biw=1419&bih=910&dpr=1#vhid=3L364kfdFfV1dM&vssid=mosaic
    care_instructions: getCareInstructions("Alocasia"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 4,
        price: 40,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 2,
        price: 60,
      },
    ],
  },
  {
    category_name: "Alocasia",
    product_name: "Dragon Scale",
    description:
      "Alocasia baginda 'Dragon Scale', aka Alocasia Dragon Scale, is a jaw-dropping Aroid that you definitely need to add to your collection! Their mature leaves take on an embossed look, and this, mixed with the silvery-green leaves containing dark veining, gives the plant the appearance of scale-like foliage. The thick, leathery leaves also help make this plant truly remarkable. Alocasia is toxic to both people and animals, so they are not to be ingested.",
    //https://jomostudio.com/products/alocasia-dragon-scale
    image: "alocasia-dragon-scale.jpg",
    //https://www.langdonsflowers.com/cdn/shop/products/Alocasia-Dragon-Scale-1_3e5791ca-4e74-4fb7-97b0-58eec5525a4e.jpg?v=1661178299
    care_instructions: getCareInstructions("Alocasia"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 3,
        price: 18,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 2,
        price: 25,
      },
    ],
  },
  {
    category_name: "Alocasia",
    product_name: "Polly",
    description:
      "Alocasia Polly, aka the African Mask Plant, is a variety of Elephant Ear native to subtropical Asia and Australia. Its dark purple/green leaves are shaped like an arrowhead and have contrasting thick, creamy veins running through them. Although this is a slightly more dwarf variety, their leaves can still grow up to 30 cm long. Alocasia is toxic to both people and animals, so they are not to be ingested.",
    //https://jomostudio.com/products/alocasia-polly?srsltid=AfmBOoruiKCF9FpqvLCxKLf_lxnNRTywohlZq1L1M097YCJWq9PZCTUU
    image: "alocasia-polly.jpg",
    //https://terragreenhouses.com/wp-content/uploads/2024/07/Alocasia-Polly-scaled.jpg
    care_instructions: getCareInstructions("Alocasia"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 4,
        price: 10,
      },
    ],
  },
  {
    category_name: "Epipremnum",
    product_name: "Aureum Shangri La",
    description:
      "Epipremnum aureum ‘Shangri La’, aka Sleeping Pothos or Spinach Pothos, is a rare cultivar of Epipremnum Aureum bred from the Golden pothos, named after James Hilton’s fictional Shangri La valley. It has dark green, oval-shaped leaves that remain curled up with specks and splatters of gold or cream-coloured variegation and can spread or vine up to 3 feet in ideal growing conditions. Similar to their cousins from the Pothos family, they are the perfect houseplant for beginners, being one of the easiest you can grow with a beautiful tropical vibe.",
    //https://jomostudio.com/products/epipremnum-aureum-shangri-la
    image: "epipremnum-aureum-shangri-la.jpg",
    //https://www.thegreengrower.nz/cdn/shop/files/Pothos_shangri_la_green.webp?v=1699052608
    care_instructions: getCareInstructions("Epipremnum"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 6,
        price: 25,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 4,
        price: 35,
      },
    ],
  },
  {
    category_name: "Epipremnum",
    product_name: "Aureum Manjula",
    description:
      "Epipremnum aureum 'Manjula' is an attractive cultivated variety of Epipremnum aureum, often known as devil's ivy or pothos. 'Manjula' is distinguished by its unique leaves, which display a spectacular variegation of white, cream, and green, with undulations and irregular contours that give each leaf an almost sculpted appearance. The leaves are large, fleshy and often have a waxy or shiny texture.",
    //https://serreslavoie.com/en/products/epipremnum-aureum-manjula?srsltid=AfmBOorhBpvJExljeoqS_nYw2ozu0E-WreLgG3_QFawEKR2j_Lfp0yYo
    image: "epipremnum-manjula.webp",
    //https://botanix.com/cdn/shop/files/Epipremnum-aureum-Manjula_dbbf82d5-443a-425b-84bb-8716100ec2d3.jpg?v=1724859794&width=1946
    care_instructions: getCareInstructions("Epipremnum"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 8,
        price: 25,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 2,
        price: 55,
      },
    ],
  },
  {
    category_name: "Hoya",
    product_name: "Carnosa Impacta",
    description:
      "Hoya Hindu Rope, scientifically known as Hoya carnosa 'Compacta', is a distinctive and eye-catching variety of Hoya. It is well-loved for its unique, contorted leaves that resemble thick ropes or curly locks, giving it a highly ornamental appearance. The leaves are waxy, dark green, and tightly clustered, creating a visually intriguing texture. This slow-growing Hoya variety occasionally produces clusters of star-shaped, sweetly scented flowers, adding to its charm. Also known as the Krinkle Kurl Hoya, it is a popular choice among houseplant enthusiasts for its unusual form and relatively easy care. The Hindu Rope Hoya is ideal for hanging baskets or shelves where its cascading vines can be appreciated.",
    //https://jomostudio.com/products/hoya-hindu-rope
    image: "hoya-carnosa-impacta.webp",
    //https://126437604.cdn6.editmysite.com/uploads/1/2/6/4/126437604/s820120652748560434_p530_i13_w1200.jpeg
    care_instructions: getCareInstructions("Hoya"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 5,
        price: 25,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 5,
        price: 60,
      },
    ],
  },
  {
    category_name: "Hoya",
    product_name: "Kerii Variegated",
    description:
      "Hoya kerrii, aka Hoya Hearts, are tropical succulent vines. This slow growing cultivar produces delightful, heart-shaped leaves like no other. The aromatic compounds produced by their flowers are prized as fragrances in perfumes, and the flowers are also cultivated as ornamentals in warmer climates. Hoya flowers are fragrant and waxy-looking, with the fragrance changing with the age of the flower.",
    //https://jomostudio.com/products/hoya-kerrii
    image: "hoya-kerii-variegated.webp",
    //https://www.flowerstalk.ca/wp-system/uploads/2020/07/Kerri-Heart-scaled.jpeg
    care_instructions: getCareInstructions("Hoya"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 2,
        price: 30,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 1,
        price: 60,
      },
    ],
  },
  {
    category_name: "Monstera",
    product_name: "Deliciosia Albo Borsigiana",
    description:
      "Monstera Albo, scientifically known as Monstera deliciosa 'Albo Borsigiana', is a striking variegated cultivar of the Monstera deliciosa species. Originating from the rainforests of Central America, this large-leaved plant is characterized by its dramatic white and green marbled or spotted foliage. The unique variegation makes each leaf distinct, and the \"Swiss cheese\" cutouts add an extra touch of exotic flair. This indoor tropical plant is a real showstopper and a must-have for enthusiasts of variegated plants.",
    //https://jomostudio.com/products/monstera-albo
    image: "monstera-albo.webp",
    //https://preview.redd.it/help-my-albo-is-becoming-creamy-v0-l8pcxfd7ylg81.jpg?width=640&crop=smart&auto=webp&s=5c4753d31af6e316a2022506579b8757433d6769
    care_instructions: getCareInstructions("Monstera"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 6,
        price: 75,
      },
      {
        size_value: 8,
        size_unit: "inch",
        quantity: 3,
        price: 175,
      },
    ],
  },
  {
    category_name: "Monstera",
    product_name: "Burle Marx Flame",
    description:
      "Monstera Burle Marx Flame, is an exquisite cultivar of Monstera known for its unique foliage and robust growth, deriving its lineage from a cross between Monstera dilacerata(reclassified as Epipremnum pinnatum) and Philodendron insulare. Named after the famous Brazilian landscape architect Roberto Burle Marx, who was known for his use of bold leaf shapes, this Monstera variety features elongated, glossy leaves with deep, irregular incisions and fenestrations. The leaves have a distinctive flame like appearance, which is where the 'Flame' part of the name comes from. This plant is less common than other Monstera varieties, making it a prized possession for houseplant enthusiasts and collectors.",
    //https://jomostudio.com/products/monstera-burle-marx-flame
    image: "monstera-burle-marx-flame.webp",
    //https://orchids-shop.com/cdn/shop/products/sized_img_0249_grande.jpg?v=1692948870
    care_instructions: getCareInstructions("Monstera"),
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 1,
        price: 45,
      },
    ],
  },
  {
    category_name: "Decorative Pots",
    product_name: "Terracotta Pot",
    description:
      "A terracotta pot is a clay pot that's been baked at a high temperature, resulting in a reddish-brown color and a porous texture.",
    image: "terracotta-pots.jpg",
    product_variations: [
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 20,
        price: 2,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 20,
        price: 4,
      },
      {
        size_value: 8,
        size_unit: "inch",
        quantity: 15,
        price: 6,
      },
      {
        size_value: 10,
        size_unit: "inch",
        quantity: 10,
        price: 8,
      },
      {
        size_value: 12,
        size_unit: "inch",
        quantity: 10,
        price: 10,
      },
    ],
  },
  {
    category_name: "Decorative Pots",
    product_name: "Veradek Round Planter",
    description:
      "Made from a patented plastic-stone composite, this planter pot has a subtle textured finish and is all-weather resistant to cracks, scratches, UV and fading.",
    image: "veradek-planter.jpg",
    product_variations: [
      {
        size_value: 8,
        size_unit: "inch",
        quantity: 5,
        price: 35,
      },
      {
        size_value: 10,
        size_unit: "inch",
        quantity: 5,
        price: 45,
      },
      {
        size_value: 12,
        size_unit: "inch",
        quantity: 5,
        price: 55,
      },
    ],
  },

  {
    category_name: "Nursery Pots",
    product_name: "Black Nursery Pot",
    description:
      "A nursery pot is an economical alternative to heavy duty containers. Features a bottom hole drainage that allows for more efficient irrigation while the design uses flexible polyethylene material to make it durable, ideal for handling and transportation. UV-protected.",
    image: "black-nursery-pots.webp",
    product_variations: [
      {
        size_value: 2,
        size_unit: "inch",
        quantity: 20,
        price: 0.5,
      },

      {
        size_value: 3,
        size_unit: "inch",
        quantity: 20,
        price: 0.75,
      },
      {
        size_value: 4,
        size_unit: "inch",
        quantity: 20,
        price: 1.25,
      },
      {
        size_value: 6,
        size_unit: "inch",
        quantity: 20,
        price: 1.5,
      },
      {
        size_value: 8,
        size_unit: "inch",
        quantity: 15,
        price: 2,
      },
      {
        size_value: 10,
        size_unit: "inch",
        quantity: 10,
        price: 2.5,
      },
      {
        size_value: 12,
        size_unit: "inch",
        quantity: 10,
        price: 3,
      },
    ],
  },
  {
    category_name: "Growing Media",
    product_name: "Molly's Aroid Mix",
    description:
      "Molly's Aroid Mix is an exceptional, soil-free potting mix, crafted for tropical and other indoor plants that thrive in a chunky, well-aerated, and fast-draining environment. This mix ensures that the potting mix doesn’t remain overly moist after watering. It is especially suitable for a wide range of plants including Palm, Ficus, Anthurium, Calathea, Aglaonema, Fiddle Leaf, Alocasia, Monstera, Philodendron, Pothos, and other tropical and indoor varieties.",

    image: "molly-aroid-mix.webp",
    product_variations: [
      {
        size_value: 3.3,
        size_unit: "liters",
        quantity: 5,
        price: 30,
      },
      {
        size_value: 5.5,
        size_unit: "liters",
        quantity: 5,
        price: 38,
      },
      {
        size_value: 11,
        size_unit: "liters",
        quantity: 10,
        price: 48,
      },
    ],
  },
  {
    category_name: "Growing Media",
    product_name: "PureLife Soild Premium Worm Castings",
    description:
      "Worm castings are a natural, nutrient-rich fertilizer made from earthworm waste. They can also be called vermicast, worm humus, or worm manure.",
    //
    image: "purelife-worm-castings.jpg",
    //
    product_variations: [
      {
        size_value: 5,
        size_unit: "liters",
        quantity: 5,
        price: 27,
      },
    ],
  },
  {
    category_name: "Growing Media",
    product_name: "HydraGarden Chunky Perlite",
    description:
      " Chunky Perlite #4 offers superior drainage and aeration, perfect for your indoor garden. Ideal for mixing with sphagnum moss, orchid bark, and succulent soil to create the perfect cactus and tropical plant soil mix.",
    //
    image: "chunky-perlite.jpg",
    //
    product_variations: [
      {
        size_value: 7,
        size_unit: "liters",
        quantity: 5,
        price: 22,
      },
    ],
  },
  {
    category_name: "Growing Media",
    product_name: "Waurher Leca Expanded Clay Pebbles",
    description:
      'LECA balls, also known as "lightweight expanded clay aggregate," are made from clay, brick dust, and waste from the mineral albite.1 These little balls of clay are used in place of soil for houseplants and are commonly used in hydroponic gardening. They are beneficial to plants in that they help to retain water, increase aeration, and reduce the amount of plant pests.',
    //
    image: "waurher-leca.jpg",
    //
    product_variations: [
      {
        size_value: 1,
        size_unit: "lbs",
        quantity: 5,
        price: 17,
      },
      {
        size_value: 2,
        size_unit: "lbs",
        quantity: 5,
        price: 23,
      },
      {
        size_value: 5,
        size_unit: "lbs",
        quantity: 5,
        price: 36,
      },
    ],
  },
  {
    category_name: "Growing Media",
    product_name: "Horticultural-Grade Volcanic Pumice",
    description:
      "Pumice is a lightweight volcanic rock or lava. It can contain up to 70 trace minerals which nourish the plant over time. High grade pumice doesn’t decompose, discolour, or float like perlite. It also remains evenly distributed in the pot over time.",
    //
    image: "horticultural-pumice.jpg",
    //
    product_variations: [
      {
        size_value: 3,
        size_unit: "liters",
        quantity: 5,
        price: 27,
      },
    ],
  },
  {
    category_name: "Growing Media",
    product_name: "Pro-Mix Premium Potting Mix",
    description:
      "Elevate your gardening experience to a whole new level with PRO-MIX Premium Potting Mix. Ready to use, it is perfect for all your potting projects, both indoors and outdoors. This innovative mix includes the MYCOACTIVE technology, an exceptional growth stimulant that provides improved resistance to stresses and promotes the development of a more resilient root system. Get the most out of your garden!",
    //
    image: "promix-potting-mix.jpg",
    //
    product_variations: [
      {
        size_value: 9,
        size_unit: "liters",
        quantity: 12,
        price: 8,
      },
    ],
  },
  {
    category_name: "Pest Control",
    product_name: "Ladybugs",
    description:
      "Ladybugs are best to used outside in the garden but can also applied indoors. They can be kept in the fridge until they are needed. Release at dawn or dust. First water the area and apply a bundle of Ladybugs where the infested plant. In about 4-5 days you will see bright yellow eggs and larvae. They are good for mealies, aphids, spider mites and thrips.",
    //
    image: "ladybugs.jpg",
    //
    product_variations: [
      {
        size_value: 100,
        size_unit: "pcs",
        quantity: 10,
        price: 25,
      },
      {
        size_value: 250,
        size_unit: "pcs",
        quantity: 10,
        price: 40,
      },
    ],
  },
  {
    category_name: "Pest Control",
    product_name: "Green Lacewing Eggs",
    description:
      "The Green LW hatches from the tag(s) in duration of 2-7 days. They only crawl during larvae stage for 2-3 weeks. Only 40-80% will hatch out of the 100 eggs on each tag. They are most aggressive during their larvae stage and eat all sorts of pests (just like teenager).  There are 3 stages of larvae before they cocoon for about 10 days and become green lacewings. Once Adult stage they only reproduce and eat pollen and fruit. They are also known as junk bugs as they carry their foods’ skeleton/shell on their back as camouflage. When they run out of food they will eat each other or attack cocoons. So getting to the adult stage is a slim chance for an indoor environment. Size during larvae goes up to 2mm-10mm and adults will be about a pinkly nail size. They are lime green and fairly pretty.",
    //
    image: "green-lacewing.webp",
    //
    product_variations: [
      {
        size_value: 5,
        size_unit: "tags",
        quantity: 10,
        price: 25,
      },
      {
        size_value: 10,
        size_unit: "pcs",
        quantity: 10,
        price: 40,
      },
      {
        size_value: 15,
        size_unit: "pcs",
        quantity: 10,
        price: 65,
      },
    ],
  },
  {
    category_name: "Pest Control",
    product_name: "General Predatory Mites",
    description:
      "This contains the following mites: Neoseiulus Cucumeris, Stratiolaelaps scimitus and  Hypoaspis Miles. Neoseiulus Cucumeris live on the stem/leaves of the plant while Stratiolaelaps scimitus and  Hypoaspis Miles dwells in soil. These mites hunts for thrips, mites and gnats that are in early stages.",
    //
    image: "neoseiulus-cucumeris.jpg",
    //
    product_variations: [
      {
        size_value: 8,
        size_unit: "ounces",
        quantity: 10,
        price: 25,
      },
      {
        size_value: 16,
        size_unit: "ounces",
        quantity: 10,
        price: 45,
      },
    ],
  },
  {
    category_name: "Pest Control",
    product_name: "Puroleo Neem Oil",
    description:
      "Neem oil is an effective, natural, and organic pesticide that can be used to get rid of fungus gnats. ",
    //
    image: "puroleo-neem-oil.jpg",
    //
    product_variations: [
      {
        size_value: 473,
        size_unit: "ml",
        quantity: 10,
        price: 20,
      },
    ],
  },
  {
    category_name: "Pest Control",
    product_name: "Safer's Sticky Stiks",
    description:
      "Sticky Stakes effectively trap a variety of flying insects including whiteflies, fungus gnats, thrips, fruit flies, and more",
    //
    image: "safers-sticky-stiks.jpg",
    //
    product_variations: [
      {
        size_value: 12,
        size_unit: "pcs",
        quantity: 10,
        price: 20,
      },
    ],
  },
  {
    category_name: "Fertilizers",
    product_name: "Marphyl Soil Enhancer",
    description:
      "Marphyl Marine Phytoplankton is ideal as an outdoor and indoor plant fertilizer. It works great as vegetable fertilizer, houseplant fertilizer, and garden fertilizer. It’s an organic solution for your garden, greenhouse, and hydroponics. Enjoy gorgeous, colorful blooms with this exceptional flower food. Enhance soil quality and watch your trees, shrubs, vines, grass, plants, flowers, and vegetables thrive",
    //
    image: "marphyl-soil-enhancer.jpg",
    //
    product_variations: [
      {
        size_value: 16.9,
        size_unit: "ounces",
        quantity: 6,
        price: 22,
      },
      {
        size_value: 33.8,
        size_unit: "ounces",
        quantity: 3,
        price: 34,
      },
      {
        size_value: 67.6,
        size_unit: "ounces",
        quantity: 3,
        price: 55,
      },
    ],
  },
  {
    category_name: "Accessories",
    product_name: "D-Shaped Moss Pole",
    description:
      "The moss pole greatly helps climbing indoor potted plants with aerial roots overcome the difficulty of growing vertically towards sunlight and develop more, larger and greener leaves.",
    //
    image: "d-shaped-moss-poles.jpg",
    //
    product_variations: [
      {
        size_value: 16,
        size_unit: "inch",
        quantity: 30,
        price: 4,
      },
      {
        size_value: 24,
        size_unit: "inch",
        quantity: 30,
        price: 7,
      },
      {
        size_value: 32,
        size_unit: "inch",
        quantity: 30,
        price: 10,
      },
    ],
  },
];

// {
//   category_name: "Alocasia",
//   product_name: "",
//   description: "",
//   //
//   image: "",
//   //
// },
