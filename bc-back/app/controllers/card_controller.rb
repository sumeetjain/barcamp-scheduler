class CardController < ApplicationController
  def json
    respond_to do |format|
      format.json { render(json: Card.json) }
    end
  end

  def pending
  	card = Card.find_by(id: params['id'])
    card.statePending
  end

  def update
		card = Card.find_by(id: params['id'])
    card.update(params.permit(:name, :title, :description, :state))
	  redirect_to 'http://localhost:8080'
  end

  def cancel
    card = Card.find_by(id: params['id'])
    card.stateSignUp
  end
end
