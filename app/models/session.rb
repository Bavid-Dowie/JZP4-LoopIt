class Session < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :audio_files
end
