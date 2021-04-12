# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# malik = Child.create(name: "Malik", age: "9", grade: "fourth")
# require 'faker'

# 5.times do
#    Child.create([{name: Faker::Name.name, age: Faker::Number.within(range: 1..13), grade: Faker::Number.non_zero_digit}])
#     end

# Schedule.create([
#     {weekday: "Monday", subject: "Math", content: "Completed chapter 1 of Go Math"},
#     {weekday: "Tuesday", subject: "Reading", content: "Completed chapter 1 of Lost"},
# ])

Child.create([{name: "Malik", age: "9", grade: "fourth"}])

Schedule.create([
    {weekday: "Monday", subject: "Math", content: "Completed chapter 1 of Go Math", child_id: 1}
])