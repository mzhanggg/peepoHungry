# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  category     :string           not null
#  phone_number :string           not null
#  price_range  :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zip_code, :category, :phone_number, :price_range, presence: true

    has_one_attached :photo

    # has_many_attached :photo
        # many photos
        # _tea jbuilder:

    # has_many :reviews
end
