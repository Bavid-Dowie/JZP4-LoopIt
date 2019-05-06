class AudioFilesController < ApplicationController
  before_action :set_audio, only: [:show, :update, :destroy]

  # GET /audio_files
  def index
    @audio_file = AudioFile.all

    render json: @audio_file
  end

  # GET /audio_files/1
  def show
    render json: @audio_file
  end

  # POST /audio_files
  def create
    @audio_file = Audio.new(audio_params)

    if @audio_file.save
      render json: @audio_file, status: :created, location: @audio_file
    else
      render json: @audio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /audio_files/1
  def update
    if @audio_file.update(audio_params)
      render json: @audio_file
    else
      render json: @audio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /audio_files/1
  def destroy
    @audio_file.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_audio
      @audio_file = AudioFile.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def audio_params
      params.require(:audio).permit(:filename, :session_id)
    end
end
