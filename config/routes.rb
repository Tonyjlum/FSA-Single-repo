Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json'} do
    # get 'users', to: 'users#index'
    resources :transactions
    resources :users
  end

  get "*page", to: "static#index", constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
