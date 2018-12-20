class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]

  # def index
  #   @users = User.all
  #   render json: @users
  # end

  def show

    @user = User.find(params[:id])
    # @insulins = Insulin.where(user_id: @user.id)
    render json: {user: UserSerializer.new(@user)}, status: :accepted
  end



  def create
    @user = User.new(user_params)
    if @user.valid?
      # @token = encode_token(user_id: @user.id)
      # render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      @user.save
      render json: { user: UserSerializer.new(@user) }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end


  def update
    @user = User.find(params[:id])
    @user.update(user_params)

        # @token = encode_token(user_id: @user.id)
        # render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created

      render json: { user: UserSerializer.new(@user) }, status: :created
    # else
    #   render json: { error: 'failed to create user' }, status: :not_acceptable
    # end
  end

  private

  def user_params
    params.require(:user).permit(:username, :id)
    # , :password_digest)
  end
end
