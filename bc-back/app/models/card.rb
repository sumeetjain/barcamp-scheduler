class Card < ApplicationRecord
  enum timeslot: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", 
    "11:30 AM", "12:00 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
    "3:00 PM", "3:30 PM", "4:00 PM"]
  enum category: ["Entrepreneur", "Technology", "Creative", "Kitchen Sink"]
  enum state: ["SIGNUP", "PENDING", "SET"]

  def self.json
    cards = Card.all.order(:timeslot).as_json
    result = {}
    cards.each do |card|
      card_hash = {
        "id" => card["id"],
        "name" => card["name"],
        "title" => card["title"],
        "description" => card["description"],
        "state" => card["state"]
      }
    

      if result[card["timeslot"]]
        result[card["timeslot"]][card["category"]] = card_hash
      else
        result[card["timeslot"]] = {card["category"] => card_hash}
      end

    end
    puts result["9:30 AM"]["Entrepreneur"]
    return result
  end   
  

end
