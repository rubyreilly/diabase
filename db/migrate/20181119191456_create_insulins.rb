class CreateInsulins < ActiveRecord::Migration[5.2]
  def change
    create_table :insulins do |t|
      t.string :insulin_name
      t.string :insulin_short_or_long
      t.integer :insulin_duration_in_minutes
      t.integer :user_id

      t.timestamps
    end
  end
end
