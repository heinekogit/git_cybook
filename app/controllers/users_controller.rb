class UsersController < ApplicationController
    before_action :authenticate_user!

	def new
	
	end
	
	def create
		User.create(user_params)
	
	end
	
	def destroy
		redirect_to root
	
	end
	
	def show
		@nickname = current_user.nickname
		@routes = Route.where(user_id: current_user.id).order('updated_at DESC')
	
	end
	
	
	private
	def user_params
		params.permit(:email, :nickname, :image)
	end

end
