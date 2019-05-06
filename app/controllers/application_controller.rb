class ApplicationController < ActionController::API

  def authorize_request
    header = request.headers['Authorization'] 
    # looks for authorized header
    header = header.split(' ').last if header 
    # split it on spaces of last string
    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id]) 
    # current_user available in all controllers for conditional rendering
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
