class MedicalEntriesController < ApplicationController
  before_action :set_medical_entry, only: [:show, :update, :destroy]

  # GET /medical_entries
  def index
    @medical_entries = MedicalEntry.all

    render json: @medical_entries
  end

  # GET /medical_entries/1
  def show
    render json: @medical_entry
  end

  # POST /medical_entries
  def create
    @medical_entry = MedicalEntry.new(medical_entry_params)

    if @medical_entry.save
      render json: @medical_entry, status: :created, location: @medical_entry
    else
      render json: @medical_entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /medical_entries/1
  def update
    if @medical_entry.update(medical_entry_params)
      render json: @medical_entry
    else
      render json: @medical_entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /medical_entries/1
  def destroy
    @medical_entry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_medical_entry
      @medical_entry = MedicalEntry.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def medical_entry_params
      params.require(:medical_entry).permit(:title, :date, :time, :notes)
    end
end
