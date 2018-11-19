class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.datetime :entry_date_and_time
      t.integer :current_blood_sugar
      t.float :num_units_insulin
      t.text :note
      t.integer :insulin_id
      t.integer :user_id

      t.timestamps
    end
  end
end
