class Session < ApplicationRecord
  belongs_to :user
  has_many :audio_files
end
