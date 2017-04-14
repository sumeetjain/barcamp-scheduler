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
  end

  def cancel
    card = Card.find_by(id: params['id'])
    card.stateSignUp
  end

  def resetpending
    cards = Card.where(state: "PENDING")
    cards.update(state: "SIGNUP")
  end
end
