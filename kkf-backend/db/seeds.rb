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
    intake_time: "10:00:00",
    location_found: "2310 Sealy Ave, Galveston, TX 77550",
    intake_type: "Stray",
    status: "Unavailable",
    current_location: "Foster Home",
    description: "Two-week old kitten",
    portrait_url: "https://i.imgur.com/3Cq854O.jpg"
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
    intake_time: "10:00:00",
    location_found: "2310 Sealy Ave, Galveston, TX 77550",
    intake_type: "Stray",
    status: "Unavailable",
    current_location: "Foster Home",
    description: "Two-week old kitten",
    portrait_url: "https://i.imgur.com/h2jxzUI.jpg"
})

jessica = Application.create({
    first_name: "Jessica",
    last_name: "Sieling",
    email: "itsjess@gmail.com",
    phone: "281-614-8018",
    housing: "Rent",
    children: FALSE,
    employment: "Full-time",
    work_from_home: "Part-time",
    hours_unattended: "4",
    experience: "I have fostered two bottle babies from 2 weeks - 4 weeks.",
    kitten_type: "All",
    give_medication: TRUE,
    provide_food: TRUE,
    current_pets: "Two adult cats"
})

tammy = Application.create({
    first_name: "Tammy",
    last_name: "Sellers",
    email: "mimisellers@gmail.com",
    phone: "281-455-1604",
    housing: "Own",
    children: FALSE,
    employment: "Full-time",
    work_from_home: "Never",
    hours_unattended: "8",
    experience: "No previous foster experience",
    kitten_type: "Weened kittens",
    give_medication: TRUE,
    provide_food: TRUE,
    current_pets: "One adult cat"
})

