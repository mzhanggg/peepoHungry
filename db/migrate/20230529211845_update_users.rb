class UpdateUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :password_digest
    remove_column :users, :session_token

    add_column :users, :password_digest, :string, null: false 
    add_column :users, :session_token, :string, null: false 
  end
end
