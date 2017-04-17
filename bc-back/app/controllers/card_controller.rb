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
    Card.setValues(params)
  end

  def cancel
    Card.cancel(params)
  end

  def resetpending
    Card.pendingToSignUp
  end
end
