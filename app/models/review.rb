# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  business_id :bigint           not null
#  user_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :body, :rating, presence: true
    validates :body, length: { minimum: 10 }
    validates :rating, presence: true, inclusion: { in: (1..5), message: "must be between 1 and 5" }

    belongs_to :user, 
        class_name: :User,
        foreign_key: :user_id

end
