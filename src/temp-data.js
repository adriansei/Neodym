export const recipes = [
  {
    id: '1',
    title: "Spaghetti Bolognese",
    description: "Ein klassisches italienisches Gericht.",
    duration: 45,
    instructions:
      "Zuerst die Spaghetti kochen. Währenddessen das Hackfleisch anbraten und die Tomatensauce hinzufügen. Mit den gekochten Spaghetti servieren.",
    ingredients: [
      {
        id: 1,
        rezept_id: 1,
        name: "Spaghetti",
        menge: "200g",
      },
      {
        id: 2,
        rezept_id: 1,
        name: "Hackfleisch",
        menge: "300g",
      },
      {
        id: 3,
        rezept_id: 1,
        name: "Tomatensauce",
        menge: "400ml",
      },
    ],
  },
  {
    id: "2",
    title: "Pancakes",
    description: "Weiche und fluffige Pfannkuchen.",
    duration: 20,
    instructions:
      "Alle Zutaten verrühren, den Teig portionsweise in der Pfanne ausbacken.",
    ingredients: [
      {
        id: 4,
        rezept_id: 2,
        name: "Mehl",
        menge: "200g",
      },
      {
        id: 5,
        rezept_id: 2,
        name: "Milch",
        menge: "300ml",
      },
      {
        id: 6,
        rezept_id: 2,
        name: "Eier",
        menge: "2 Stück",
      },
      {
        id: 7,
        rezept_id: 2,
        name: "Zucker",
        menge: "2 EL",
      },
    ],
  },
  {
    id: "3",
    title: "Caesar Salad",
    description: "Ein frischer, knuspriger Salat mit Caesar-Dressing.",
    duration: 15,
    instructions:
      "Salat waschen, Dressing zubereiten und zusammen mit Croutons und Parmesan anrichten.",
    ingredients: [
      {
        id: 8,
        rezept_id: 3,
        name: "Römersalat",
        menge: "1 Kopf",
      },
      {
        id: 9,
        rezept_id: 3,
        name: "Croutons",
        menge: "100g",
      },
      {
        id: 10,
        rezept_id: 3,
        name: "Parmesan",
        menge: "50g",
      },
      {
        id: 11,
        rezept_id: 3,
        name: "Caesar-Dressing",
        menge: "150ml",
      },
    ],
  },
];
