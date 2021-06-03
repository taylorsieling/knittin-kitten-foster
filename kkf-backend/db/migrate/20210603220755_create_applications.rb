class CreateApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :applications do |t|
      t.integer "kitten_id"
      t.string "first_name"
      t.string "last_name"
      t.string "email"
      t.string "phone"
      t.string "housing"
      t.boolean "children"
      t.boolean "employment"
      t.string "work_from_home"
      t.string "hours_unattended"
      t.string "experience"
      t.string "kitten_type"
      t.boolean "give_medication"
      t.boolean "provide_food"
      t.string "current_pets"
      t.timestamps
    end
  end
end
