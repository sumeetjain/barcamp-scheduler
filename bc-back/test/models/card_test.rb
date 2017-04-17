require 'test_helper'

class CardTest < ActiveSupport::TestCase

	test "retrieves all data" do
		# look at fixtures/cards.yml
		# we are putting only 4 rows into our database all with the same time and one of each category
		jsonresult = Card.json
		assert_equal 1, jsonresult.length, "gets all times"
		assert_equal 4, jsonresult["9:00 AM"].length, "gets all categories"
	end

	test "json formatted correctly" do
		jsonresult = Card.json
		assert_equal "9:00 AM", jsonresult.keys[0], "outer hash keys are time"
		assert_includes jsonresult["9:00 AM"].keys, "Creative", "inner hash keys are categories"
		assert_includes jsonresult["9:00 AM"].keys, "Entrepreneur", "inner hash keys are categories"
		assert_includes jsonresult["9:00 AM"].keys, "Technology", "inner hash keys are categories"
		assert_includes jsonresult["9:00 AM"].keys, "Kitchen Sink", "inner hash keys are categories"
		assert_includes jsonresult["9:00 AM"]["Creative"].keys, "name", "name in info"
		assert_includes jsonresult["9:00 AM"]["Creative"].keys, "title", "title in info"
		assert_includes jsonresult["9:00 AM"]["Creative"].keys, "description", "description in info"
		assert_includes jsonresult["9:00 AM"]["Creative"].keys, "id", "id in info"
		assert_includes jsonresult["9:00 AM"]["Creative"].keys, "state", "state in info"
	end

	test "changes state to pending" do
		card = Card.find_by(id: 0)
		card.statePending
		assert_equal "PENDING", card.state, "state is pending"
	end

	test "updates info" do
		params = ActionController::Parameters.new({:id => 1, :name => "Han Solo", :title => "The Millenium Falcon", :description => "All about the the fastest ship in the galaxy."})
		Card.setValues(params)
		assert_equal "Han Solo", Card.where(:id => 1).pluck(:name)[0], "name updated"
		assert_equal "The Millenium Falcon", Card.where(:id => 1).pluck(:title)[0], "title updated"
		assert_equal "All about the the fastest ship in the galaxy.", Card.where(:id => 1).pluck(:description)[0], "description updated"
	end

	test "update info if state is signup" do
		params = ActionController::Parameters.new({:id => 0, :name => "Han Solo", :title => "The Millenium Falcon", :description => "All about the the fastest ship in the galaxy."})
		Card.setValues(params)
		assert_equal "Han Solo", Card.where(:id => 0).pluck(:name)[0], "name updated"
		assert_equal "The Millenium Falcon", Card.where(:id => 0).pluck(:title)[0], "title updated"
		assert_equal "All about the the fastest ship in the galaxy.", Card.where(:id => 0).pluck(:description)[0], "description updated"
	end

	test "doesn't update info if state is set" do
		params = ActionController::Parameters.new({:id => 2, :name => "Han Solo", :title => "The Millenium Falcon", :description => "All about the the fastest ship in the galaxy."})
		Card.setValues(params)
		assert_not_equal "Han Solo", Card.where(:id => 0).pluck(:name)[0], "name updated"
		assert_not_equal "The Millenium Falcon", Card.where(:id => 0).pluck(:title)[0], "title updated"
		assert_not_equal "All about the the fastest ship in the galaxy.", Card.where(:id => 0).pluck(:description)[0], "description updated"
	end

	test "changes state to sign-up" do
		params = ActionController::Parameters.new({:id => 1})
		Card.cancel(params)
		assert_equal "SIGNUP", Card.where(:id => 1).pluck(:state)[0], "state is signup"
	end

	test "doesn't change state to sign-up if set" do
		params = ActionController::Parameters.new({:id => 2})
		Card.cancel(params)
		assert_not_equal "SIGNUP", Card.where(:id => 1).pluck(:state)[0], "state is not signup"
	end

end
