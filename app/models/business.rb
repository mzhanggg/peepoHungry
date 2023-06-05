# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zipcode      :string           not null
#  category     :string           not null
#  phone_number :string           not null
#  price_range  :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  neighborhood :string           not null
#  lat          :float            not null
#  long         :float            not null
#  hours        :json             not null
#  avg_rating   :float            not null
#
class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zipcode, :category, :phone_number, :price_range, :neighborhood, :lat, :long, :avg_rating, presence: true

    has_one_attached :photo

    # has_many_attached :photo
        # many photos
        # _tea jbuilder:

    # has_many :reviews
end
