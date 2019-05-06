Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  post 'user_token' => 'user_token#create'
  get 'users/new', to: 'users#create'
  resources :users do
  # post 'users/new', to: 'users#create'
  resources :sessions do
    resources :audio_files
  end
end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
