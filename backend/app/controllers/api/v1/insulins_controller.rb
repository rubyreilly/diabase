class Api::V1::InsulinsController < ApplicationController


  before_action :set_insulin, only: [:show, :update, :destroy]
  before_action :find_user
    # GET /api/v1/users/:id/insulins
    def index
      # @insulins = Insulin.all

      @insulins = Insulin.where(user_id: @user.id)
      render json: @insulins
    end

    # GET /api/v1/users/:id/insulins/1
    def show
      # @entries = Entry.where(insulin_id: @insulin.id)
      render json: @insulin
    end

    # POST /api/v1/users/:id/insulins
    def create
      @insulin = Insulin.new(insulin_params)

      if @insulin.save
        render json: @insulin, status: :created
      else
        render json: @insulin.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/v1/users/:id/insulins/1
    def update
      if @insulin.update(insulin_params)
        render json: @insulin
      else
        render json: @insulin.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/v1/users/:id/insulins/1
    def destroy
      @insulin.destroy
    end

    private
      def set_insulin
        @insulin = Insulin.find(params[:id])
      end

      def insulin_params
        params.require(:insulin).permit(
          :insulin_name, :insulin_short_or_long,
          :insulin_duration_in_minutes, :user_id)
      end

      def find_user
        @user = User.find(params[:user_id])
      end


end
