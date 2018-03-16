class ClientsController < ApplicationController
  before_action :set_client, only: [:show]
    
  def show
  end
  
  private
  
    def set_client
      clients = ['steccap']
      @client = clients.detect { |c| c == params[:slug]}
      logger.fatal @client.inspect
      raise ActionController::RoutingError.new('Not Found') unless @client.present?
    end
end
