# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Seed examples for User
User.create!(
    name: 'Professor Farnsworth', 
    username: 'Fry', 
    email: 'fry@fry.com', 
    sessions: 'fry.wav', 
    password_digest: 'password')
User.create!(
    name: 'Bender Rodriguez', 
    username: 'Bender', 
    email: 'benderis@great.com', 
    sessions: 'bender.wav', 
    password_digest: 'password')
User.create!(
    name: 'Turanga Leela', 
    username: 'oneeye', 
    email: 'one@eye.com', 
    sessions: 'leela.wav', 
    password_digest: 'password')
User.create!(
    name: 'Zoidberg', 
    username: 'Zoidberg', 
    email: 'zoid@berg.com', 
    sessions: 'zoidberg.wav', 
    password_digest: 'password')
User.create!(
    name: 'Scruffy', 
    username: 'Mmhmmm', 
    email: 'yup@yup.com', 
    sessions: 'yup.wav', 
    password_digest: 'password')
User.create!(
    name: 'Nibbler', 
    username: 'Stinky', 
    email: 'dark@matter.com', 
    sessions: 'nibbler.wav', 
    password_digest: 'password')
    
puts "#{User.count} users created!"
    
User.create!(
    name: 'Nibbler', 
    username: 'Stinky', 
    email: 'dark@matter.com', 
    sessions: 'nibbler.wav', 
    password_digest: 'password')