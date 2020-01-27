Rails.application.routes.draw do
  root 'items#show'
  
  get 'items/:slug', to: 'items#show'
end
