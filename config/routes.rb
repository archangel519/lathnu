Rails.application.routes.draw do
  root 'clients#show'
  
  get '/:slug', to: 'clients#show'
end
