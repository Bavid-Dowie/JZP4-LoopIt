class CreateAudioFiles < ActiveRecord::Migration[5.2]
  def change
    create_table :audio_files do |t|
      t.string :filename
      t.references :session, foreign_key: true
    end
  end
end
