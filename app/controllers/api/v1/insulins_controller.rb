class Api::V1::InsulinsController < ApplicationController


  before_action :set_insulin, only: [:show, :update, :destroy]

    # GET /api/v1/insulins
    def index
      @insulins = Insulin.all

      render json: @insulins
    end

    # GET /api/v1/insulins/1
    def show
      render json: @insulin
    end

    # POST /api/v1/insulins
    def create
      @insulin = Insulin.new(insulin_params)

      if @insulin.save
        render json: @insulin, status: :created, location: @insulin
      else
        render json: @insulin.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /api/v1/insulins/1
    def update
      if @insulin.update(insulin_params)
        render json: @insulin
      else
        render json: @insulin.errors, status: :unprocessable_entity
      end
    end

    # DELETE /api/v1/insulins/1
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

end
