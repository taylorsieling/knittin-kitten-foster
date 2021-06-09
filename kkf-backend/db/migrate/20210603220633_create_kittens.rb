class CreateKittens < ActiveRecord::Migration[6.1]
  def change
    create_table :kittens do |t|
      t.string "name"
      t.string "sex"
      t.string "age"
      t.date "dob"
      t.string "weight"
      t.string "breed"
      t.string "color"
      t.string "pattern"
      t.boolean "altered"
      t.boolean "microchipped"
      t.date "intake_date"
      t.string "intake_time"
      t.string "location_found"
      t.string "intake_type"
      t.string "status"
      t.string "current_location"
      t.string "description"
      t.string "portrait_url"
      t.timestamps
    end
  end
end
