class CardController < ApplicationController
  def jsontest
    respond_to do |format|
      format.json { render(json: "asdfghjkl") }
    end
  end
end
