class AddUserIdToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :user_id, :integer
  end
end
