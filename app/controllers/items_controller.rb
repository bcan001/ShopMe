class ItemsController < ApplicationController
	def index
		render json: Item.all
	end
	def show
		item = Item.find(params[:id])
		render json: item
	end
	def cart
		cart_items = Cart.where({user_id: current_user.id})
		render json: cart_items
	end
	def checkout
	end
end