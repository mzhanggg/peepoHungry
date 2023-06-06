# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
        fname: 'peepo',
        lname: 'Hungry',
        zipcode: '9000',
        email: 'peepo@hungry.io', 
        password: 'password'
    )
    
    puts "Creating businesses..."

    Business.create!(
        name: 'Krusty Krab', 
        address: '42 Wallaby Way', 
        neighborhood: 'Union Square',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10011', 
        category: 'Burger', 
        phone_number: '678-999-8212', 
        price_range: 100,
        avg_rating: 4.3,
        lat: 40.73629958855562, 
        long: -73.99379521689175,
        hours: '{"Mon::  9:00 AM - 6:00 PM",
            "Tue::  9:00 AM - 6:00 PM",
            "Wed::  9:00 AM - 6:00 PM",
            "Thu::  9:00 AM - 6:00 PM",
            "Fri::  9:00 AM - 6:00 AM",
            "Sat::  CLOSED",
            "Sun::  CLOSED"}'
    )

    Business.create!(
        name: 'Wendy\'s', 
        address: '20 E 14th St', 
        neighborhood: 'Union Square',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10003', 
        category: 'Burger', 
        phone_number: '212-243-0438', 
        price_range: 25,
        avg_rating: 4.0,
        lat: 40.735490756799535, 
        long: -73.9926613133639,
        hours: '{"Mon::  7:00 AM - 12:00 AM",
            "Tue::  7:00 AM - 12:00 AM",
            "Wed::  7:00 AM - 12:00 AM",
            "Thu::  7:00 AM - 1:00 AM",
            "Fri::  7:00 AM - 1:00 AM",
            "Sat::  7:00 AM - 1:00 AM",
            "Sun::  7:00 AM - 12:00 AM"}'
    )

    Business.create!(
        name: 'Let\'s Meat BBQ', 
        address: '307 5th Ave', 
        neighborhood: 'Koreatown',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10016', 
        category: 'Korean', 
        phone_number: '212-889-0089', 
        price_range: 75, 
        avg_rating: 4.3,
        lat: 40.74685373508556, 
        long: -73.98556946035512,
        hours: '{"Mon::  12:00 PM - 11:00 PM",
            "Tue::  12:00 PM - 11:00 PM",
            "Wed::  12:00 PM - 11:00 PM",
            "Thu::  12:00 PM - 1:00 AM",
            "Fri::  12:00 PM - 1:00 AM",
            "Sat::  12:00 PM - 1:00 AM",
            "Sun::  12:00 PM - 11:00 PM"}'
    )

    Business.create!(
        name: 'Joe Coffee Company', 
        address: '9 E 13th St', 
        neighborhood: 'Union Square',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10003', 
        category: 'Coffee', 
        phone_number: '212-924-3300', 
        price_range: 25, 
        avg_rating: 4.3,
        lat: 40.74685373508556, 
        long: -73.98556946035512,
        hours: '{"Mon::  7:00 AM - 6:30 PM",
            "Tue::  7:00 AM - 6:30 PM",
            "Wed::  7:00 AM - 6:30 PM",
            "Thu::  7:00 AM - 6:30 PM",
            "Fri::  7:00 AM - 6:30 PM",
            "Sat::  9:00 AM - 5:00 PM",
            "Sun::  9:00 AM - 5:00 PM"}'
    )

    Business.create!(
        name: 'Blue Bottle Coffee', 
        address: ' 101 University Pl', 
        neighborhood: 'Union Square',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10003', 
        category: 'Coffee', 
        phone_number: '510-653-3394', 
        price_range: 50, 
        avg_rating: 4.4,
        lat: 40.73417815176639, 
        long: -73.99261471880794,
        hours: '{"Mon::  7:00 AM - 6:30 PM",
            "Tue::  7:00 AM - 6:30 PM",
            "Wed::  7:00 AM - 6:30 PM",
            "Thu::  7:00 AM - 6:30 PM",
            "Fri::  7:00 AM - 6:30 PM",
            "Sat::  9:00 AM - 5:00 PM",
            "Sun::  9:00 AM - 5:00 PM"}'
    )

    Business.create!(
        name: 'Jongro BBQ', 
        address: '22 W 32nd St', 
        neighborhood: 'Koreatown',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10001', 
        category: 'Korean', 
        phone_number: '212-473-2233', 
        price_range: 50, 
        avg_rating: 4.5,
        lat: 40.747716073138314, 
        long: -73.98693770444751,
        hours: '{"Mon::  11:30AM - 12:00 AM",
            "Tue::  11:30AM - 12:00 AM",
            "Wed::  11:30AM - 12:00 AM",
            "Thu::  11:30AM - 12:00 AM",
            "Fri::  11:30AM - 1:00 AM",
            "Sat::  11:30AM - 1:00 AM",
            "Sun::  11:30AM - 12:00 AM"}'
    )

    Business.create!(
        name: 'Gopchang Story BBQ', 
        address: '312 5th Ave', 
        neighborhood: 'Koreatown',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10001', 
        category: 'Korean', 
        phone_number: '646-371-9469', 
        price_range: 50, 
        avg_rating: 4.2,
        lat: 40.747355929732024, 
        long: -73.98597216224515,
        hours: '{"Mon:  4:00 PM - 1:00 AM",
            "Tue::  4:00 PM - 1:00 AM",
            "Wed::  4:00 PM - 1:00 AM",
            "Thu::  4:00 PM - 1:00 AM",
            "Fri::  12:00 PM - 3:00 AM",
            "Sat::  12:00 PM - 3:00 AM",
            "Sun::  12:00 PM - 1:00 AM"}'
    )

    Business.create!(
        name: 'Turntable Chicken Jazz', 
        address: '20 W 33rd St', 
        neighborhood: 'Koreatown',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10001', 
        category: 'Korean', 
        phone_number: '212-714-9700', 
        price_range: 50, 
        avg_rating: 4.3,
        lat: 40.74817654923235, 
        long: -73.98642506946062,
        hours: '{"Mon:  12:00 PM - 12:00 AM",
            "Tue::  12:00 PM - 12:00 AM",
            "Wed::  12:00 PM - 12:00 AM",
            "Thu::  12:00 PM - 12:00 AM",
            "Fri::  12:00 PM - 12:00 AM",
            "Sat::  12:00 PM - 12:00 AM",
            "Sun::  12:00 PM - 10:00 PM"}'
    )

    Business.create!(
        name: 'Boka', 
        address: '9 St Marks Pl', 
        neighborhood: 'East Village',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10003', 
        category: 'Korean', 
        phone_number: '646-678-5796', 
        price_range: 50, 
        avg_rating: 4.3,
        lat: 40.73006230011236, 
        long: -73.98916249448607,
        hours: '{"Mon::  12:00 PM - 11:00 PM",
            "Tue::  12:00 PM - 11:00 PM",
            "Wed::  12:00 PM - 11:00 PM",
            "Thu::  12:00 PM - 11:00 PM",
            "Fri::  12:00 PM - 12:00 AM",
            "Sat::  12:00 PM - 12:00 AM",
            "Sun::  12:00 PM - 11:00 PM"}'
    )

    Business.create!(
        name: 'Gregorys Coffee', 
        address: '649 Broadway', 
        neighborhood: 'NOHO',
        city: 'NYC', 
        state: 'NY', 
        zipcode: '10003', 
        category: 'Coffee', 
        phone_number: '877-210-0105', 
        price_range: 50, 
        avg_rating: 4.1,
        lat: 40.727261514542754,
        long: -73.99566375230366,
        hours: '{"Mon::  7:00 AM - 6:00 PM",
            "Tue::  7:00 AM - 6:00 PM",
            "Wed::  7:00 AM - 6:00 PM",
            "Thu::  7:00 AM - 6:00 PM",
            "Fri::  7:00 AM - 6:00 PM",
            "Sat::  8:00 AM - 5:00 PM",
            "Sun::  8:00 AM - 5:00 PM"}'
        )

    Business.create!(
        name: 'Starbucks', 
        address: '510 6th Ave', 
        neighborhood: 'Union Square',
        city: 'NYC', 
        state: 'NY',
        zipcode: '10011', 
        category: 'Coffee', 
        phone_number: '212-242-5981', 
        price_range: 50, 
        avg_rating: 3.8,
        lat: 40.727261514542754,
        long: -73.99566375230366,
        hours: '{"Mon::  6:00 AM - 7:00 PM",
            "Tue::  6:00 AM - 7:00 PM",
            "Wed::  6:00 AM - 7:00 PM",
            "Thu::  6:00 AM - 7:00 PM",
            "Fri::  6:00 AM - 7:30 PM",
            "Sat::  7:00 AM - 7:00 PM",
            "Sun::  7:00 AM - 7:00 PM"}'
    )

    Business.create!(
        name: 'Saltwater Coffee', 
        address: '126 Waverly Pl', 
        neighborhood: 'West Village',
        city: 'NYC', 
        state: 'NY',
        zipcode: '10011', 
        category: 'Coffee', 
        phone_number: '917-881-2245', 
        price_range: 25, 
        avg_rating: 4.4,
        lat: 40.727261514542754,
        long: -73.99566375230366,
        hours: '{"Mon::  7:00 AM - 5:00 PM",
            "Wed::  7:00 AM - 5:00 PM",
            "Thu::  7:00 AM - 5:00 PM",
            "Fri::  7:00 AM - 5:00 PM",
            "Sat::  8:00 AM - 6:00 PM",
            "Sun::  8:00 AM - 6:00 PM"}'
    )

    puts "Done!"
end