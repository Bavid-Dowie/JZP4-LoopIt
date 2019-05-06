Rails.application.routes.draw do
    post '/auth/login', to: 'authentication#login'
    post 'user_token' => 'user_token#create'
    get 'users/new', to: 'users#create'
    resources :users 
    resources :sessions do
      resources :audio_files
    end
  end
