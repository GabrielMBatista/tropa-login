import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://gabriel-trop:yCImj9fF212BApBZ@cluster0.ub2jepx.mongodb.net/tropa?retryWrites=true&w=majority";

const eventos = [
  {
    id: 1749169611333,
    name: "Feest, Mitchell and Terry",
    totalTeams: 18,
    status: "Inativo",
    startDate: "2025-06-06",
    endDate: "2025-06-08",
  },
  {
    id: 1749169611506,
    name: "Kessler, Spinka and Schultz",
    totalTeams: 9,
    status: "Ativo",
    startDate: "2025-06-06",
    endDate: "2025-06-06",
  },
  {
    id: 1749169611692,
    name: "Fahey, Gislason and Upton",
    totalTeams: 3,
    status: "Inativo",
    startDate: "2025-06-06",
    endDate: "2025-06-12",
  },
  {
    id: 1749169611867,
    name: "Steuber, Grant and Quitzon",
    totalTeams: 18,
    status: "Ativo",
    startDate: "2025-06-06",
    endDate: "2025-06-15",
  },
  {
    id: 1749169612062,
    name: "Rodriguez - Jaskolski",
    totalTeams: 16,
    status: "Ativo",
    startDate: "2025-06-06",
    endDate: "2025-06-10",
  },
  {
    id: 1749169612190,
    name: "Wintheiser, Keebler and Grimes",
    totalTeams: 8,
    status: "Inativo",
    startDate: "2025-06-06",
    endDate: "2025-06-14",
  },
  {
    id: 1749169615768,
    name: "Lesch, Roberts and Vandervort",
    totalTeams: 20,
    status: "Inativo",
    startDate: "2025-06-06",
    endDate: "2025-06-12",
  },
  {
    id: 1749169616001,
    name: "Huel and Sons",
    totalTeams: 14,
    status: "Inativo",
    startDate: "2025-06-06",
    endDate: "2025-06-14",
  },
  {
    id: 1749169616076,
    name: "Douglas and Sons",
    totalTeams: 14,
    status: "Ativo",
    startDate: "2025-06-06",
    endDate: "2025-06-14",
  },
  {
    id: 1749169734580,
    name: "Balistreri Inc",
    totalTeams: 6,
    status: "Ativo",
    startDate: "2025-06-06",
    endDate: "2025-06-13",
  },
  {
    id: 1749169771970,
    name: "Grimes, Schultz and Skiles",
    totalTeams: 10,
    status: "Ativo",
    startDate: "2025-06-06",
    endDate: "2025-06-12",
  },
  {
    id: 1749169772801,
    name: "Zulauf - Abbott",
    totalTeams: 7,
    status: "Inativo",
    startDate: "2025-06-06",
    endDate: "2025-06-11",
  },
  {
    id: 1749174440043,
    name: "Rempel, Mraz and Sauer",
    totalTeams: 8,
    status: "Inativo",
    startDate: "2025-06-07",
    endDate: "2025-06-08",
  },
];

async function seed() {
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db(); // ou db("tropa") se você nomeou
  const collection = db.collection("eventos");

  await collection.deleteMany({}); // limpa antes
  await collection.insertMany(eventos); // insere

  console.log("✅ Eventos inseridos com sucesso");
  await client.close();
}

seed();
