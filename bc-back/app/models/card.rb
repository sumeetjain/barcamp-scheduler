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

  # Gets all information from the database and restructures into desired hash format
  #
  # returns hash of time -> {category -> {info}}
  def self.json
    cards = Card.all.order(:timeslot).as_json
    result = self.restructureJson(cards)
    return result
  end

  # updates state of the card to PENDING
  def statePending
    if self.state != "SET"
     self.update(state: "PENDING")
    end
  end

  # updates name, title, and description on card from params from form
  # only able to update if state is not set, 
  #     as would be the case if no one else has signed up for the same slot
  #
  # params - from submit form
  #          name, title, and description input in form
  #          card id and state: SET included in params
  def self.setValues(params)
    card = self.find_by(id: params['id'])
    if card.state != "SET"
      card.update(params.permit(:name, :title, :description, :state))
    end
  end

  # updates state of the card to SIGNUP
  def self.cancel(params)
    card = Card.find_by(id: params['id'])
    if card.state != "SET"
      card.update(state: "SIGNUP")
    end
  end

  def self.pendingToSignUp
    cards = Card.where(state: "PENDING")
    cards.update(state: "SIGNUP")
  end

  def self.resetValues(params)
    params['description'] = null
    params['title'] = null
    params['name'] = null
    params['state'] = "SIGNUP"
    card = Card.where(["timeslot = ? and category = ?", params["timeslot"], params["category"]])
    card.update(params.permit(:name, :title, :description, :state))
  end


  private

  # cards - json result from database query
  #
  # returns restructured json as hash of time -> {category -> {info}}
  def self.restructureJson(cards)
    newJson = {}
    cards.each do |card|
      newJson = self.addcard(newJson, card)
    end
    return newJson
  end

  # adds card to time if time already exists in hash
  # makes new time and adds card if it doesn't exist in the hash yet
  #
  # card - info for a single card structured in a single hash of {id -> 0, time -> "9:00 AM", category -> "CREATIVE", etc
  #
  # returns the restructured json as hash of time -> {category -> {info}} with the card added
  def self.addcard(newJson, card)
    if newJson[card["timeslot"]]
      newJson[card["timeslot"]][card["category"]] = self.makeHash(card)
    else
      newJson[card["timeslot"]] = {card["category"] => self.makeHash(card)}
    end
    return newJson
  end


  # card - info for a single card structured in a single hash of {id -> 0, time -> "9:00 AM", category -> "CREATIVE", etc
  #
  # returns a hash of only the info we want
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
