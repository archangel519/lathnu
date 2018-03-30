class ClientsController < ApplicationController
  before_action :set_client, only: [:show]
    
  def show
  end
  
  private
  
    def set_client
      clients = ['steccap', 'test']
      @client = clients.detect { |c| c == params[:slug]}
      raise ActionController::RoutingError.new('Not Found') unless @client.present?
    end
end
