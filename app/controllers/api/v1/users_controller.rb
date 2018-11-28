class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def profile
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password_digest)
  end
end


  # before_action :find_user, only: [:update, :destroy]
  #
  # def create
  #   @user = User.create(user_params)
  #   if @user.valid?
  #     render json: { user: UserSerializer.new(@user) }, status: :created
  #   else
  #     render json: { error: 'failed to create user' }, status: :not_acceptable
  #   end
  # end
  #
  # def update
  #   @user.update(user_params)
  #   if @user.valid?
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end
  #
  #
  # def destroy
  #   log_out!
  #   @user.destroy
  #   # redirect_to new_session_path
  # end

  # private

  # def find_user
  #   @user = User.find(params[:id])
  # end


#   before_action :set_user, only: [:show, :update, :destroy]
#
#
#
#     # GET /api/v1/users/1
#     def show
#       render json: @user
#     end
#
#     # POST /api/v1/users
#     def create
#       @user = User.new(user_params)
#
#       if @user.save
#         render json: @user, status: :created, location: @user
#       else
#         render json: @user.errors, status: :unprocessable_entity
#       end
#     end
#
#     # PATCH/PUT /api/v1/users/1
#     def update
#       if @user.update(user_params)
#         render json: @user
#       else
#         render json: @user.errors, status: :unprocessable_entity
#       end
#     end
#
#     # DELETE /api/v1/users/1
#     def destroy
#       @user.destroy
#     end
#
#     private
#       def set_user
#         @user = User.find(params[:id])
#       end
#
#       def user_params
#         params.require(:user).permit(:username, :password_digest)
#       end
#
# end
