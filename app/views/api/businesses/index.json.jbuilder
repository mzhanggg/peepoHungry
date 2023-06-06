@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :address, :city, :state, :zipcode, :category, :phone_number, :price_range, :long, :lat, :hours, :avg_rating, :neighborhood
        
        json.photo business.photo.attached? ? url_for(business.photo) : nil
    end

end