json.user do
    json.extract! @user, :id, :fname, :lname, :email
end