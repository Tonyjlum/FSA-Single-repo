Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  Rails.application.routes.draw do
    root 'static#index'

    namespace :v1, defaults: { format: 'json'} do
      get 'users', to: 'users#index'
    end
  end
end
