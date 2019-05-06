require 'test_helper'

class AudiosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @audio = audios(:one)
  end

  test "should get index" do
    get audios_url, as: :json
    assert_response :success
  end

  test "should create audio" do
    assert_difference('Audio.count') do
      post audios_url, params: { audio: { filename: @audio.filename, session_id: @audio.session_id } }, as: :json
    end

    assert_response 201
  end

  test "should show audio" do
    get audio_url(@audio), as: :json
    assert_response :success
  end

  test "should update audio" do
    patch audio_url(@audio), params: { audio: { filename: @audio.filename, session_id: @audio.session_id } }, as: :json
    assert_response 200
  end

  test "should destroy audio" do
    assert_difference('Audio.count', -1) do
      delete audio_url(@audio), as: :json
    end

    assert_response 204
  end
end
