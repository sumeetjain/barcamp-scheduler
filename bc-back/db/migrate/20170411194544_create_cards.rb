class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.integer :timeslot
      t.integer :category
      t.string :name
      t.string :title
      t.string :description
      t.integer :state

      t.timestamps
    end
  end
end
