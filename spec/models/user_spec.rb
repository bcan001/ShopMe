require 'rails_helper'

RSpec.describe User, type: :model do
  context "when attempting to create a new user" do
  	it "needs to have all fields filled in on the form" do
  		user_count = User.all.count
  		user = User.create(first_name: "Benjamin")
  		expect(User.all.count).to eq(user_count)
  	end
  end
  
end
