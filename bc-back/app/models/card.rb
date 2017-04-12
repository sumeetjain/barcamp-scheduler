class Card < ApplicationRecord
  enum timeslot: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", 
    "11:30 AM", "12:00 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
    "3:00 PM", "3:30 PM", "4:00 PM"]
  enum category: ["Entrepreneur", "Technology", "Creative", "Kitchen Sink"]
  enum state: ["SIGNUP", "PENDING", "SET"]

  def self.json
    result = {}
    self.timeslots.keys.each do |slot|
      slot_cards = Card.where(timeslot: slot)
      slot_cards.each do 
      result[slot] = .as_json
    end
    return result
  end

end
