require "test_helper"

class KittensControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kitten = kittens(:one)
  end

  test "should get index" do
    get kittens_url, as: :json
    assert_response :success
  end

  test "should create kitten" do
    assert_difference('Kitten.count') do
      post kittens_url, params: { kitten: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show kitten" do
    get kitten_url(@kitten), as: :json
    assert_response :success
  end

  test "should update kitten" do
    patch kitten_url(@kitten), params: { kitten: {  } }, as: :json
    assert_response 200
  end

  test "should destroy kitten" do
    assert_difference('Kitten.count', -1) do
      delete kitten_url(@kitten), as: :json
    end

    assert_response 204
  end
end
