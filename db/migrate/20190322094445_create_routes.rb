class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
        t.text :title
        t.text :location
        t.text :map
        t.integer :distance

      t.timestamps
    end
  end
end
