Rails.application.routes.draw do
  get "getdata" => 'card#json'
  post "updatedata" => 'card#update'
  post "pending" => 'card#pending'
  post "cancel" => 'card#cancel'
end
