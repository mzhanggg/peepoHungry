@businesses.each do |business|
    json.set! business.id do
        # debugger
        json.extract! business, :id, :name, :address, :city, :state, :zipcode, :category, :phone_number, :price_range, :long, :lat, :hours, :avg_rating, :neighborhood
        # debugger
    end
end