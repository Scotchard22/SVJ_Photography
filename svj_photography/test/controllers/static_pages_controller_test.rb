require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get justin" do
    get :justin
    assert_response :success
  end

  test "should get vlad" do
    get :vlad
    assert_response :success
  end

  test "should get scot" do
    get :scot
    assert_response :success
  end

  test "should get gallery" do
    get :gallery
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
