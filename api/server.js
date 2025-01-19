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
    {
"id": "11",
"name": "Cozy Apartment in Downtown",
"xl_picture_url": "https://www.istockphoto.com/photo/modern-living-room-gm1344083240-422535612?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FCozy-Apartment-in-Downtown&utm_medium=affiliate&utm_source=unsplash&utm_term=Cozy+Apartment+in+Downtown%3A%3A%3A",
"host_location": "New York, NY, USA",
"smart_location": "New York, USA",
"property_type": "Apartment",
"room_type": "Entire home/apt",
"accommodates": 2,
"bed_type": "Queen Bed",
"price": 120,
"calendar_updated": "1 month ago",
"number_of_reviews": 15,
"latitude": "40.712776",
"longitude": "-74.005974"
},
{
"id": "12",
"name": "Sunny Room with Balcony",
"xl_picture_url": "https://www.istockphoto.com/photo/balcony-of-european-modern-apartment-building-with-shutters-outdoor-gm1469662291-500796222?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FSunny-Room-with-Balcony&utm_medium=affiliate&utm_source=unsplash&utm_term=Sunny+Room+with+Balcony%3A%3A%3A",
"host_location": "Barcelona, Catalonia, Spain",
"smart_location": "Barcelona, Spain",
"property_type": "Apartment",
"room_type": "Private room",
"accommodates": 1,
"bed_type": "Single Bed",
"price": 45,
"calendar_updated": "2 weeks ago",
"number_of_reviews": 8,
"latitude": "41.385063",
"longitude": "2.173404"
},
{
"id": "13",
"name": "Modern Studio Near Beach",
"xl_picture_url": "https://www.istockphoto.com/photo/sea-view-swimming-pool-in-modern-loft-design-luxury-ocean-beach-house-gm858282034-141648801?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FModern-hotel-Near-Beach&utm_medium=affiliate&utm_source=unsplash&utm_term=Modern+hotel+Near+Beach%3A%3A%3A",
"host_location": "Miami, FL, USA",
"smart_location": "Miami, USA",
"property_type": "Studio",
"room_type": "Entire home/apt",
"accommodates": 3,
"bed_type": "King Bed",
"price": 150,
"calendar_updated": "3 months ago",
"number_of_reviews": 20,
"latitude": "25.761681",
"longitude": "-80.191788"
},
{
"id": "14",
"name": "Quiet Cottage in Countryside",
"xl_picture_url": "https://www.istockphoto.com/photo/autumn-leaf-with-blurred-wooden-house-background-at-night-gm2187504657-606083719?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FQuiet-Cottage-in-Countryside&utm_medium=affiliate&utm_source=unsplash&utm_term=Quiet+Cottage+in+Countryside%3A%3A%3A",
"host_location": "Cotswolds, England, UK",
"smart_location": "Cotswolds, UK",
"property_type": "Cottage",
"room_type": "Entire home/apt",
"accommodates": 4,
"bed_type": "Double Bed",
"price": 200,
"calendar_updated": "6 months ago",
"number_of_reviews": 12,
"latitude": "51.804679",
"longitude": "-1.659125"
},
{
"id": "15",
"name": "Shared Loft in City Center",
"xl_picture_url": "https://www.istockphoto.com/photo/young-businesspeople-at-work-in-the-office-gm1475803674-505210593?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FShared-Loft-in-City-Center&utm_medium=affiliate&utm_source=unsplash&utm_term=Shared+Loft+in+City+Center%3A%3A%3A",
"host_location": "Berlin, Berlin, Germany",
"smart_location": "Berlin, Germany",
"property_type": "Loft",
"room_type": "Shared room",
"accommodates": 1,
"bed_type": "Single Bed",
"price": 30,
"calendar_updated": "4 months ago",
"number_of_reviews": 5,
"latitude": "52.520008",
"longitude": "13.404954"
},
{
"id": "16",
"name": "Luxury Villa with Pool",
"xl_picture_url": "https://www.istockphoto.com/photo/futuristic-modern-villa-pool-on-the-sea-gm1309759362-399374835?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FLuxury-Villa-with-Pool&utm_medium=affiliate&utm_source=unsplash&utm_term=Luxury+Villa+with+Pool%3A%3A%3A",
"host_location": "Malibu, CA, USA",
"smart_location": "Malibu, USA",
"property_type": "Villa",
"room_type": "Entire home/apt",
"accommodates": 6,
"bed_type": "King Bed",
"price": 450,
"calendar_updated": "1 year ago",
"number_of_reviews": 30,
"latitude": "34.025922",
"longitude": "-118.779757"
},
{
"id": "17",
"name": "Artistic Room Near Museum",
"xl_picture_url": "https://www.istockphoto.com/photo/view-through-modern-metal-mesh-ceiling-in-city-background-with-copy-space-gm1370962080-440400669?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FArtistic-hotel-Near-Museum&utm_medium=affiliate&utm_source=unsplash&utm_term=Artistic+hotel+Near+Museum%3A%3A%3A",
"host_location": "Paris, Île-de-France, France",
"smart_location": "Paris, France",
"property_type": "Apartment",
"room_type": "Private room",
"accommodates": 2,
"bed_type": "Double Bed",
"price": 80,
"calendar_updated": "3 weeks ago",
"number_of_reviews": 18,
"latitude": "48.856613",
"longitude": "2.352222"
},
{
"id": "18",
"name": "Cozy Bungalow by the Lake",
"xl_picture_url": "https://www.istockphoto.com/photo/adorable-family-of-three-at-the-terrace-looking-at-the-river-gm1326170073-410966449?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FCozy-Bungalow-by-the-Lake&utm_medium=affiliate&utm_source=unsplash&utm_term=Cozy+Bungalow+by+the+Lake%3A%3A%3A",
"host_location": "Lake Tahoe, CA, USA",
"smart_location": "Lake Tahoe, USA",
"property_type": "Bungalow",
"room_type": "Entire home/apt",
"accommodates": 4,
"bed_type": "Queen Bed",
"price": 250,
"calendar_updated": "5 months ago",
"number_of_reviews": 10,
"latitude": "39.096849",
"longitude": "-120.032351"
},
{
"id": "19",
"name": "Minimalist Apartment in CBD",
"xl_picture_url": "https://www.istockphoto.com/photo/3d-render-of-a-contemporary-living-room-interior-gm1357529184-431406269?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FMinimalist-Apartment-in-CBD&utm_medium=affiliate&utm_source=unsplash&utm_term=Minimalist+Apartment+in+CBD%3A%3A%3A",
"host_location": "Melbourne, Victoria, Australia",
"smart_location": "Melbourne, Australia",
"property_type": "Apartment",
"room_type": "Entire home/apt",
"accommodates": 2,
"bed_type": "Double Bed",
"price": 110,
"calendar_updated": "2 months ago",
"number_of_reviews": 22,
"latitude": "-37.813629",
"longitude": "144.963058"
},
{
"id": "20",
"name": "Rustic Cabin in the Woods",
"xl_picture_url": "https://www.istockphoto.com/photo/luxury-chalet-fireplace-bedroom-gm1308803159-398686488?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FRustic-Cabin-in-the-Woods&utm_medium=affiliate&utm_source=unsplash&utm_term=Rustic+Cabin+in+the+Woods%3A%3A%3A",
"host_location": "Aspen, CO, USA",
"smart_location": "Aspen, USA",
"property_type": "Cabin",
"room_type": "Entire home/apt",
"accommodates": 5,
"bed_type": "Queen Bed",
"price": 300,
"calendar_updated": "8 months ago",
"number_of_reviews": 14,
"latitude": "39.191098",
"longitude": "-106.817539"
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
