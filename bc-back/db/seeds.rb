# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Card.timeslots.keys.each do |slot|
  Card.categories.keys.each do |cat|
    Card.create(timeslot: slot, category: cat, state: "SIGNUP")
  end
end
