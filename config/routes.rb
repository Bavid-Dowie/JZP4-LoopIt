Rails.application.routes.draw do
    post '/auth/login', to: 'authentication#login'
    post 'authenticate', to: 'authentication#authenticate'
    post 'user_token' => 'user_token#create'
    get 'users/new', to: 'users#create'
    
    resources :sessions
    resources :audio_files
    resources :users do
      resources :sessions do
        resources :audio_files
      end
    end
  end
