@businesses.each do |business|
    json.set! business.id do
        json.extract! business, :id, :name, :address, :city, :state, :zip_code, :category, :phone_number, :price_range
    end
end