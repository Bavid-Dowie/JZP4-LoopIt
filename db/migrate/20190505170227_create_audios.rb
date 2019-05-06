class CreateAudios < ActiveRecord::Migration[5.2]
  def change
    create_table :audios do |t|
      t.string :filename
      t.references :session, foreign_key: true

      t.timestamps
    end
  end
end
