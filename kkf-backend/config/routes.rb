Rails.application.routes.draw do
  resources :medical_entries
  resources :weights
  resources :litters
  resources :fosters
  resources :applications
  resources :kittens
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
