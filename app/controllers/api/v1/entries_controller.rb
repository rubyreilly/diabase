class Api::V1::EntriesController < ApplicationController

  before_action :set_entry, only: [:show, :update, :destroy]

    # GET /api/v1/entries
    def index
      @entries = Entry.all

      render json: @entries
    end

    # GET /api/v1/entries/1
    def show
      render json: @entry
    end

    # POST /api/v1/entries
    def create
      @entry = Entry.new(entry_params)

      if @entry.save
        render json: @entry, status: :created, location: @entry
      else
        render json: @entry.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/v1/entries/1
    def update
      if @entry.update(entry_params)
        render json: @entry
      else
        render json: @entry.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/v1/entries/1
    def destroy
      @entry.destroy
    end

    private
      def set_entry
        @entry = Entry.find(params[:id])
      end

      def entry_params
        params.require(:entry).permit(
          :entry_date_and_time, :current_blood_sugar,
          :num_units_insulin, :note, :insulin_id, :user_id)
      end


end
