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
    username: 'fry',
    email: 'fry@fry.com',
    password: 'password'
)
User.create!(
    name: 'Bender Rodriguez',
    username: 'fender',
    email: 'benderis@great.com',
    password: 'password'
)
User.create!(
    name: 'Turanga Leela',
    username: 'oneeye',
    email: 'one@eye.com',
    password: 'password'
)
User.create!(
    name: 'Zoidberg',
    username: 'zoidberg',
    email: 'zoid@berg.com',
    password: 'password'
)
User.create!(
    name: 'Scruffy',
    username: 'Mmhmmm',
    email: 'yup@yup.com',
    password: 'password'
)
User.create!(
    name: 'Nibbler',
    username: 'classkitten',
    email: 'dark@matter.com',
    password: 'password'
)

puts "#{User.count} users created!"

#  Seed examples for Session

Session.create!(
    title: 'test session1',
    user_id: 1
    )
Session.create!(
    title: 'test session2',
    user_id: 2
    )
Session.create!(
    title: 'test session3',
    user_id: 3
    )
Session.create!(
    title: 'test session4',
    user_id: 4
    )
Session.create!(
    title: 'test session5',
    user_id: 5
    )
Session.create!(
    title: 'test session6',
    user_id: 6
    )

#  Seed examples for AudioFile

AudioFile.create!(
    filename: '1.wav',
    session_id: 1
    )
AudioFile.create!(
    filename: '2.wav',
    session_id: 2
    )
AudioFile.create!(
    filename: '3.wav',
    session_id: 3
    )
AudioFile.create!(
    filename: '4.wav',
    session_id: 4
    )
AudioFile.create!(
    filename: '5.wav',
    session_id: 5
    )
AudioFile.create!(
    filename: '6.wav',
    session_id: 6
    )