class ClientsController < ApplicationController
  before_action :set_client, only: [:show]
    
  def show
  end
  
  private
  
    def set_client
      clients = [
        Client.new(name: 'STEC CAP', slug: 'steccap', video_link: 'https://vimeo.com/262276112/3de86f3ddc'), 
        Client.new(name: 'Lincoln Arts Council', slug: 'la', video_link: 'https://vimeo.com/265469042/707b2fd530'),
        Client.new(name: 'DREAM', slug: 'dream', video_link: 'https://vimeo.com/274781204/4d31b17d03'),
        Client.new(name: 'Test Client', slug: 'test', video_link: 'https://youtu.be/5dsGWM5XGdg?t=13s')
      ]
      @client = clients.detect { |c| c.slug == params[:slug]}
      raise ActionController::RoutingError.new('Not Found') unless @client.present?
    end
end
