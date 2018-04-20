class ClientsController < ApplicationController
  before_action :set_client, only: [:show]
    
  def show
  end
  
  private
  
    def set_client
      clients = [
        Client.new(name: 'STEC CAP', slug: 'steccap'), 
        Client.new(name: 'Lincoln Arts Council', slug: 'la'),
        Client.new(name: 'Test Client', slug: 'test')
      ]
      @client = clients.detect { |c| c.slug == params[:slug]}
      raise ActionController::RoutingError.new('Not Found') unless @client.present?
    end
end
