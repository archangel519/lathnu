Rails.application.routes.draw do
  root 'items#show'
  
  get 'items/viewer', to: 'items#viewer'
  get 'items/:slug', to: 'items#show'
end
