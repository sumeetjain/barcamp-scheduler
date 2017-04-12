class CardController < ApplicationController
  def jsontest
    respond_to do |format|
      format.json { render(json: "fdsfdsfd") }
    end
  end
end
