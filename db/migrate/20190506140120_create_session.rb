class CreateSession < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.string :title
      t.references :user, foreign_key: true
    end
  end
end
