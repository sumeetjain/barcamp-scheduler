class Card < ApplicationRecord
  enum timeslot: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", 
    "11:30 AM", "12:00 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
    "3:00 PM", "3:30 PM", "4:00 PM"]
  enum category: ["Entrepreneur", "Technology", "Creative", "Kitchen Sink"]
  enum state: ["SIGNUP", "PENDING", "SET"]

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
