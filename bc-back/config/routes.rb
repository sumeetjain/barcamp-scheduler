Rails.application.routes.draw do
  get "ajaxtest" => 'card#jsontest'
end
