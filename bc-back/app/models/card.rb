class Card < ApplicationRecord
  enum timeslot: {
    "9:00 AM" => 0, 
    "9:30 AM" => 1, 
    "10:00 AM" => 2, 
    "10:30 AM" => 3, 
    "11:00 AM" => 4, 
    "11:30 AM" => 5, 
    "12:00 PM" => 6, 
    "1:00 PM" => 7, 
    "1:30 PM" => 8, 
    "2:00 PM" => 9, 
    "2:30 PM" => 10, 
    "3:00 PM" => 11, 
    "3:30 PM" => 12, 
    "4:00 PM" => 13
  }
  enum category: {
    "Creative" => 0,
    "Entrepreneur" => 1, 
    "Technology" => 2, 
    "Kitchen Sink" => 3
  }
  enum state: {
    "SIGNUP" => 0, 
    "PENDING" => 1, 
    "SET" => 2
  }

  def self.json
    cards = Card.all.order(:timeslot).as_json
    result = self.restructureJson(cards)
    return result
  end

  def statePending
      self.update(state: "PENDING")
  end

  def stateSignUp
      self.update(state: "SIGNUP")
  end

  def self.setValues(params)
    card = self.find_by(id: params['id'])
    if card.state == "PENDING"
      card.update(params.permit(:name, :title, :description, :state))
    end
  end


  private

  def self.restructureJson(cards)
    newJson = {}
    cards.each do |card|
      newJson = self.addcard(newJson, card)
    end
    return newJson
  end

  def self.addcard(newJson, card)
    if newJson[card["timeslot"]]
      newJson[card["timeslot"]][card["category"]] = self.makeHash(card)
    else
      newJson[card["timeslot"]] = {card["category"] => self.makeHash(card)}
    end
    return newJson
  end

  def self.makeHash(card)
    return {
      "id" => card["id"],
      "name" => card["name"],
      "title" => card["title"],
      "description" => card["description"],
      "state" => card["state"]
    }
  end

end
