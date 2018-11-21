class Api::V1::EntriesController < ApplicationController

  before_action :set_entry, only: [:show, :update, :destroy]
  before_action :find_user
  before_action :render_this, only: [:show]

    # GET /api/v1/users/:id/entries
    def index
      # @entries = Entry.all
      @entries = Entry.where(user_id: @user.id)

      render json: @entries
    end

    # GET /api/v1/users/:id/entries/1
    def show

      # render json: @entry
      render json: @entry
      # {entry:@entry,
        # entry_time_remaining_in_minutes: @entry.time_remaining_in_minutes,
        # entry_status: @entry.status,
        # entry_date: @entry.date,
        # entry_starting_time: @entry.starting_time}

    end

    # POST /api/v1/users/:id/entries
    def create
      @entry = Entry.new(entry_params)

      if @entry.save
        render json: @entry, status: :created, location: @entry
      else
        render json: @entry.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/v1/users/:id/entries/1
    def update
      if @entry.update(entry_params)
        render json: @entry
      else
        render json: @entry.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/v1/users/:id/entries/1
    def destroy
      @entry.destroy
    end

    private
      def set_entry
        @entry = Entry.find(params[:id])

      end

      def render_this
        @entry = {entry:@entry,
          entry_starting_time: @entry.starting_time,
          entry_duration_in_minutes: @entry.duration_in_minutes,
            entry_time_remaining_in_minutes: @entry.time_remaining_in_minutes,
            entry_status: @entry.status,
            entry_date: @entry.date}
      end

      def entry_params
        params.require(:entry).permit(
          :entry_date_and_time, :current_blood_sugar,
          :num_units_insulin, :note, :insulin_id, :user_id)
      end

      def find_user
        @user = User.find(params[:user_id])
      end


end
