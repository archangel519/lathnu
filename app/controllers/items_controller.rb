class ItemsController < ApplicationController
  before_action :set_item, only: [:show]
    
  def show
  end
  
  private
  
    def set_item
      items = [
        Item.new(name: 'Amulet', slug: 'amulet', gltf: 'scene.gltf', description: 'The Amulet of Vigor has mysterious powers.')
      ]
      @item = items.detect { |c| c.slug == params[:slug]}
      raise ActionController::RoutingError.new('Not Found') unless @item.present?
    end
end
