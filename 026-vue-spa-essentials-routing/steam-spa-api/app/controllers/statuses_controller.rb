class StatusesController < ApplicationController
  before_action :set_status, only: [:show, :update, :destroy]

  # GET /statuses
  def index
    @statuses = Status.all

    render json: @statuses
  end

  # GET /statuses/1
  def show
    render json: @status
  end

  # POST /statuses
  def create
    @status = Status.new(status_params)

    if @status.save
      render json: @status, status: :created, location: @status
    else
      render json: @status.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /statuses/1
  def update
    if @status.update(status_params)
      render json: @status
    else
      render json: @status.errors, status: :unprocessable_entity
    end
  end

  # DELETE /statuses/1
  def destroy
    @status.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_status
      @status = Status.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def status_params
      params.require(:status).permit(:user_id, :body)
    end
end
