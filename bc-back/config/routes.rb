Rails.application.routes.draw do
  get "getdata" => 'card#json'
  post "updatedata" => 'card#update'
  post "pending" => 'card#pending'
  post "cancel" => 'card#cancel'
  get "resetpending" => 'card#resetpending'
  get "whatever" => redirect('/reset.html')
  post "adminupdate" => 'card#adminupdate'
end
