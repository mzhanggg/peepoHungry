json.extract! @review, :id, :body, :rating, :business_id, :user_id, :created_at

json.user_fname @review.user.fname
json.user_lname @review.user.lname
