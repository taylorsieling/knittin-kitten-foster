require "test_helper"

class MedicalEntriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @medical_entry = medical_entries(:one)
  end

  test "should get index" do
    get medical_entries_url, as: :json
    assert_response :success
  end

  test "should create medical_entry" do
    assert_difference('MedicalEntry.count') do
      post medical_entries_url, params: { medical_entry: { date: @medical_entry.date, notes: @medical_entry.notes, time: @medical_entry.time, title: @medical_entry.title } }, as: :json
    end

    assert_response 201
  end

  test "should show medical_entry" do
    get medical_entry_url(@medical_entry), as: :json
    assert_response :success
  end

  test "should update medical_entry" do
    patch medical_entry_url(@medical_entry), params: { medical_entry: { date: @medical_entry.date, notes: @medical_entry.notes, time: @medical_entry.time, title: @medical_entry.title } }, as: :json
    assert_response 200
  end

  test "should destroy medical_entry" do
    assert_difference('MedicalEntry.count', -1) do
      delete medical_entry_url(@medical_entry), as: :json
    end

    assert_response 204
  end
end
