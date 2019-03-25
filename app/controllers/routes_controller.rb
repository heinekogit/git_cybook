class RoutesController < ApplicationController
#    before_action :authenticate_user!


	def index
		@routes = Route.order('created_at DESC').page(params[:gage]).per(5)
	end
	
	def new
		@routes = Route.new
	end
	
	def create
		Route.create(route_params)
		redirect_to action: :index
	end
	
	private
	def route_params
		params.require(:route).permit(:title, :location, :map, :distance).merge(user_id: current_user.id)
	end

end
