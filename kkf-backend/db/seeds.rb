# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

poppy = Kitten.create({
    name: "Poppy",
    sex: "Female",
    age: "2 Weeks",
    dob: "2021-05-12",
    weight: "145",
    breed: "Domestic Shorthair",
    color: "Black/Orange",
    pattern: "Tortoiseshell",
    altered: FALSE,
    microchipped: FALSE,
    intake_date: "2021-05-24",
    intake_time: "12:00 PM",
    location_found: "2310 Sealy Ave, Galveston, TX 77550",
    intake_type: "Stray",
    status: "Unavailable",
    current_location: "Foster Home",
    description: "Two-week old kitten",
    portrait_url: "https://i.imgur.com/XZDJwC4.jpg?1"
})

rosie = Kitten.create({
    name: "Rosie",
    sex: "Female",
    age: "2 Weeks",
    dob: "2021-05-12",
    weight: "160",
    breed: "Domestic Shorthair",
    color: "Black/White",
    pattern: "Tuxedo",
    altered: FALSE,
    microchipped: FALSE,
    intake_date: "2021-05-24",
    intake_time: "12:00 PM",
    location_found: "2310 Sealy Ave, Galveston, TX 77550",
    intake_type: "Stray",
    status: "Unavailable",
    current_location: "Foster Home",
    description: "Two-week old kitten",
    portrait_url: "https://i.imgur.com/fU70IZ0.jpg?1"
})

caleb = Kitten.create({
    name: "Caleb",
    sex: "Male",
    age: "4 Weeks",
    dob: "2021-04-26",
    weight: "320 Grams",
    breed: "Domestic Shorthair",
    color: "Orange",
    pattern: "Tabby",
    altered: FALSE,
    microchipped: FALSE,
    intake_date: "2021-05-21",
    intake_time: "12:00 PM",
    location_found: "2310 Sealy Ave, Galveston, TX 77550",
    intake_type: "Stray",
    status: "Unavailable",
    current_location: "Foster Home",
    description: "Caleb is shy, but sweet.",
    portrait_url: "https://i.imgur.com/utcnqZN.jpg?1"
})

jester = Kitten.create({
    name: "Jester",
    sex: "Female",
    age: "4 Weeks",
    dob: "2021-04-26",
    weight: "362 Grams",
    breed: "Domestic Shorthair",
    color: "Grey",
    pattern: "Tabby",
    altered: FALSE,
    microchipped: FALSE,
    intake_date: "2021-05-21",
    intake_time: "12:00 PM",
    location_found: "2310 Sealy Ave, Galveston, TX 77550",
    intake_type: "Stray",
    status: "Unavailable",
    current_location: "Foster Home",
    description: "Jester is energetic and playful.",
    portrait_url: "https://i.imgur.com/HCQ12I1.jpg?1"
})
