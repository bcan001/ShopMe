class UsersController < ApplicationController
	def new
		@user = User.new
	end
	def create
		@user = User.new(user_params)
		@user.save
		if @user.save
			session[:user_id] = @user.id
			flash[:notice] = "User Successfully created"
			redirect_to shop_home_path
		else
      flash[:notice] = "Please fill in the fields correctly to create a user"
			render 'new'
		end
	end
	def edit
	end
	def update
	end
	def destroy
	end
	private
	def user_params
		params.require(:user).permit(:username, :password, :first_name, :last_name, :email)
	end
end