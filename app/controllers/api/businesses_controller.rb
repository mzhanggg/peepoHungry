class Api::BusinessesController < ApplicationController

    def index 
        @businesses = Business.all 
        render :index
    end

    def show 
        @business = Business.find(params[:id])
        render :show
    end

    def search 
        query = params[:query].downcase
        category = params[:category]&.downcase 
        search = "%#{query}%"
        @businesses = Business.where("LOWER(category) LIKE ? OR LOWER(name) LIKE ?", search, search)
        render :search
    end

end