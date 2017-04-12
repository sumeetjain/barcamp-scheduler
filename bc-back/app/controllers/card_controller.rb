class CardController < ApplicationController
  def json
    respond_to do |format|
      format.json { render(json: Card.json) }
    end
  end

  def pending
  	card = Card.find_by(id: params['id'])
  	card.update(status: "pending")
  end

  def update
  	if params["status"] == "open"
	  	card = Card.find_by(id: params['id'])
	  	card.update(status: "open")
	  	redirect_to action: "json"
	else
		card = Card.find_by(id: params['id'])
	  	card.update(name: params['name'], title: params['title'], description: params['description'], status: "closed")
	  	redirect_to action: "json"
	end
  end
end
