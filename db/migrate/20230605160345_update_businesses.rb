class UpdateBusinesses < ActiveRecord::Migration[7.0]
  def change

    add_column :businesses, :neighborhood, :string, null: false 
    add_column :businesses, :lat, :float, null: false 
    add_column :businesses, :long, :float, null: false 
    add_column :businesses, :hours, :json, null: false 
    add_column :businesses, :avg_rating, :float, null: false 


  end
end
