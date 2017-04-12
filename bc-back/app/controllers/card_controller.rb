class CardController < ApplicationController
  def json
    respond_to do |format|
      format.json { render(json: Card.json) }
    end
  end

  def pending
  	card = Card.find_by(id: params['id'])
  	card.update(state: "PENDING")
  end

  def update
		card = Card.find_by(id: params['id'])
	  	card.update(name: params['name'], title: params['title'], description: params['description'], state: "SET")
	  	redirect_to 'http://localhost:8080'
  end
end
