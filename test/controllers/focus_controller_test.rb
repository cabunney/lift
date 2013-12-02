require 'test_helper'

class FocusControllerTest < ActionController::TestCase
  setup do
    @focu = focus(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:focus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create focu" do
    assert_difference('Focu.count') do
      post :create, focu: {  }
    end

    assert_redirected_to focu_path(assigns(:focu))
  end

  test "should show focu" do
    get :show, id: @focu
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @focu
    assert_response :success
  end

  test "should update focu" do
    patch :update, id: @focu, focu: {  }
    assert_redirected_to focu_path(assigns(:focu))
  end

  test "should destroy focu" do
    assert_difference('Focu.count', -1) do
      delete :destroy, id: @focu
    end

    assert_redirected_to focus_path
  end
end
