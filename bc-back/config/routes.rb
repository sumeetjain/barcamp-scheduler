Rails.application.routes.draw do
  get "getdata" => 'card#json'
  post "updatedata" => 'card#update'
end
