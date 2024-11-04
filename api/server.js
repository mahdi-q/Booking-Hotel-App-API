const jsonServer = require("json-server");

const server = jsonServer.create();

// Define your data directly in the code, simulating the db.json content
const db = {
  hotels: [
    {
      id: "1",
      name: "Nice room at Vondelpark",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/74942550/415cd752_original.jpg?aki_policy=x_large",
      host_location: "Amsterdam, North Holland, Netherlands",
      smart_location: "Amsterdam, Netherlands",
      property_type: "Apartment",
      room_type: "Private room",
      accommodates: 1,
      bed_type: "Real Bed",
      price: 50,
      calendar_updated: "22 months ago",
      number_of_reviews: 3,
      latitude: "52.36904892402574",
      longitude: "4.890289306640626",
    },
    {
      id: "2",
      name: "Cozy apartment center Madrid",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/eb9e20e1-9c88-43fb-9e0a-e634dfc6e35a.jpg?aki_policy=x_large",
      host_location: "Madrid, Spain",
      smart_location: "Madrid, Spain",
      latitude: "40.4178743741405",
      longitude: "-3.6900329589843754",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      accommodates: 2,
      bed_type: "Real Bed",
      price: 95,
      calendar_updated: "2 months ago",
      number_of_reviews: 16,
    },
    {
      id: "3",
      name: "Le Quartier Sonang-Kamar Bidadari",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/10232036/f44402fc_original.jpg?aki_policy=x_large",
      host_location: "Rome, Italy",
      smart_location: "Rome, Italy",
      latitude: "41.88917978666802",
      longitude: "12.484588623046877",
      property_type: "Bed & Breakfast",
      room_type: "Private room",
      accommodates: 2,
      bed_type: "Real Bed",
      price: 160,
      calendar_updated: "today",
      number_of_reviews: 0,
    },
    {
      id: "4",
      name: "Trendy and spacious rooftop apt in centre",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/4aad80ac-8a8f-465d-873c-04c951304180.jpg?aki_policy=x_large",
      host_location: "Warsaw, Poland",
      smart_location: "Warsaw, Poland",
      latitude: "52.22233145663589",
      longitude: "21.038818359375004",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      accommodates: 4,
      bed_type: "Real Bed",
      price: 175,
      calendar_updated: "5 weeks ago",
      number_of_reviews: 1,
    },
    {
      id: "5",
      name: "nice apartment in centre London",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/10553335/64dc1cd3_original.jpg?aki_policy=x_large",
      host_location: "London, United Kingdom",
      smart_location: "London, United Kingdom",
      latitude: "51.4888656577827",
      longitude: "-0.12634277343750003",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      accommodates: 2,
      bed_type: "Real Bed",
      price: 100,
      calendar_updated: "2 months ago",
      number_of_reviews: 12,
    },
    {
      id: "6",
      name: "Paris, OUD-WEST",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/0cfd0182-b3b2-42cf-902f-24cb73a6c82e.jpg?aki_policy=x_large",
      host_location: "Paris, France",
      smart_location: "Paris, France",
      latitude: "48.837153333924455",
      longitude: "2.3730468750000004",
      property_type: "Apartment",
      room_type: "Private room",
      accommodates: 2,
      bed_type: "Real Bed",
      price: 100,
      calendar_updated: "a week ago",
      number_of_reviews: 6,
    },
    {
      id: "7",
      name: "Romantic house in easy Lisbon, garden and cats",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/fe92d866-4365-4267-b894-0f75511a6d41.jpg?aki_policy=x_large",
      host_location: "Lisbon, Portugal",
      smart_location: "Lisbon, Portugal",
      latitude: "38.7114334617413",
      longitude: "-9.136505126953127",
      property_type: "Townhouse",
      room_type: "Entire home/apt",
      accommodates: 6,
      bed_type: "Real Bed",
      price: 350,
      calendar_updated: "5 days ago",
      number_of_reviews: 0,
    },
    {
      id: "8",
      name: "Fresh and bright in Baarsjes",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/eb9e20e1-9c88-43fb-9e0a-e634dfc6e35a.jpg?aki_policy=x_large",
      host_location: "Berlin, Germany",
      smart_location: "Berlin, Germany",
      latitude: "52.515006473317875",
      longitude: "13.381347656250002",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      accommodates: 2,
      bed_type: "Real Bed",
      price: 115,
      calendar_updated: "today",
      number_of_reviews: 1,
    },
    {
      id: "9",
      name: "♥ Family home with garden, Oud West",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/101261468/5be05a66_original.jpg?aki_policy=x_large",
      host_location: "Oslo, Norway",
      smart_location: "Oslo, Norway",
      latitude: "59.90099132733527",
      longitude: "10.733642578125002",
      property_type: "House",
      room_type: "Entire home/apt",
      accommodates: 5,
      bed_type: "Real Bed",
      price: 225,
      calendar_updated: "6 months ago",
      number_of_reviews: 2,
    },
    {
      id: "10",
      name: "Bright & Modern Apartment",
      xl_picture_url:
        "https://a0.muscache.com/im/pictures/0cfd0182-b3b2-42cf-902f-24cb73a6c82e.jpg?aki_policy=x_large",
      host_location: "Stockholm, Sweden",
      smart_location: "Stockholm, Sweden",
      latitude: "59.29043572038731",
      longitude: "18.083496093750004",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      accommodates: 4,
      bed_type: "Real Bed",
      price: 180,
      calendar_updated: "3 months ago",
      number_of_reviews: 2,
    },
  ],
  bookmarks: [],
};

// Use jsonServer.router with the embedded database object
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Rewrite paths if necessary
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);

server.use((req, res, next) => {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
    router.db.setState(db); // Reset state for any modification
  }
  next();
});

// Start the JSON server
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on http://localhost:3000");
});

module.exports = server;
