class CardController < ApplicationController
  def jsontest
    respond_to do |format|
      format.json { render(json: Card.json) }
    end
  end
end
